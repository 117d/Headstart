import { stringCompare } from "./string";

/**
 * Filters the input data according to the provided settings.
 * @param {Array} data input array that contains papers
 * @param {Object} searchSettings 'value' = search string
 * @param {Object} filterSettings 'value' = filter mode, 'field' = what field
 * to match to 'value', 'area' = uri of the zoomed-in area, 'paper' = id of the
 * selected paper
 *
 * @returns {Array} filtered data array
 */
export const filterData = (data, searchSettings, filterSettings) => {
  if (filterSettings.paper) {
    data = data.filter((e) => e.safe_id === filterSettings.paper);
  }

  if (filterSettings.zoomed) {
    if (filterSettings.isStreamgraph) {
      if (filterSettings.docIds) {
        data = data.filter((paper) => filterSettings.docIds.includes(paper.id));
      }
    } else {
      data = data.filter(
        (e) => e.area_uri.toString() === filterSettings.area.toString()
      );
    }
  }

  let filterValue = filterSettings.value;
  let filterField = filterSettings.field;

  data = data.filter(getParamFilterFunction(filterValue, filterField));

  let searchWords = parseSearchText(searchSettings.value);
  if (searchWords.length > 0) {
    data = data.filter(getWordFilterFunction(searchWords));
  }

  return data;
};

/**
 * Returns the search text keywords.
 * @param {String} searchText plaintext
 *
 * @returns {Array} keywords array
 */
export const parseSearchText = (searchText) => {
  return searchText
    .split(" ")
    .map((word) => word.trim().toLowerCase())
    .filter((word) => word !== "");
};

const getParamFilterFunction = (param, field) => {
  if (typeof field === "undefined" || field === null) {
    if (param === "open_access") {
      return (d) => d.oa;
    }

    if (param === "publication") {
      return (d) => d.resulttype === "publication";
    }

    if (param === "dataset") {
      return (d) => d.resulttype === "dataset";
    }

    return () => true;
  }

  if (param === "all") {
    return () => true;
  }

  return (d) => d[field] === param;
};

/**
 * Creates a paper filtering function from the search words.
 *
 * Function taken from legacy list.js
 * @param {Array} search_words array of search words (plaintext strings)
 *
 * @returns {Function} filtering function
 */
const getWordFilterFunction = (search_words) => {
  return (d) => {
    const abstract = getPropertyOrEmptyString(d, "paper_abstract");
    const title = getPropertyOrEmptyString(d, "title");
    const authors = getPropertyOrEmptyString(d, "authors_string");
    const journals = getPropertyOrEmptyString(d, "published_in");
    const year = getPropertyOrEmptyString(d, "year");
    const keywords = getPropertyOrEmptyString(d, "subject_orig");
    const tags = getPropertyOrEmptyString(d, "tags");
    const comments = getPropertyOrEmptyString(d, "comments_for_filtering");
    const resulttype = getPropertyOrEmptyString(d, "resulttype");
    // TODO: make these two properties language-aware
    const open_access = d.oa ? "open access" : "";
    const free_access = d.free_access ? "free access" : "";

    let i = 0;
    let word_found = true;
    while (word_found && i < search_words.length) {
      word_found =
        abstract.indexOf(search_words[i]) !== -1 ||
        title.indexOf(search_words[i]) !== -1 ||
        authors.indexOf(search_words[i]) !== -1 ||
        journals.indexOf(search_words[i]) !== -1 ||
        year.indexOf(search_words[i]) !== -1 ||
        keywords.indexOf(search_words[i]) !== -1 ||
        tags.indexOf(search_words[i]) !== -1 ||
        comments.indexOf(search_words[i]) !== -1 ||
        resulttype.indexOf(search_words[i]) !== -1 ||
        open_access.indexOf(search_words[i]) !== -1 ||
        free_access.indexOf(search_words[i]) !== -1;
      i++;
    }

    return word_found;
  };
};

const getPropertyOrEmptyString = (object, property) => {
  if (Object.prototype.hasOwnProperty.call(object, property)) {
    return object[property].toString().toLowerCase();
  }

  return "";
};

/**
 * Sorts the input data according to the provided settings.
 * @param {Array} data input array that contains papers
 * @param {Object} sortSettings 'value' = name of the sort param
 *
 * @returns {Array} sorted data array
 */
export const sortData = (data, sortSettings) => {
  return data.sort(getParamSortFunction(sortSettings.value));
};

const getParamSortFunction = (field) => {
  if (field === "year") {
    return (a, b) => stringCompare(a[field], b[field], "desc");
  }

  if (
    field === "relevance" ||
    field === "citations" ||
    field === "readers" ||
    field === "tweets"
  ) {
    return (a, b) => stringCompare(a[field], b[field], "desc");
  }

  return (a, b) => stringCompare(a[field], b[field], "asc");
};

/**
 * Synchronously checks whether the file with given url exists.
 *
 * Function taken from legacy list.js
 *
 * @param {String} url
 *
 * @returns {Boolean} true if the file exists
 */
export const isFileAvailable = (url) => {
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();

  return http.status !== 404;
};

/**
 * Returns the paper's preview image.
 * @param {Object} paper
 *
 * @returns {String} the preview image url
 */
export const getPaperPreviewImage = (paper) => {
  return "paper_preview/" + paper.id + "/page_1.png";
};

/**
 * Returns the paper's preview link.
 * @param {Object} paper
 *
 * @returns {String} the preview link url
 */
export const getPaperPreviewLink = (paper) => {
  if (paper.oa && paper.link !== "") {
    return null;
  }

  return paper.outlink;
};

/**
 * Returns the paper's pdf click handler.
 * @param {Object} paper
 * @param {Function} handlePDFClick
 *
 * @returns {Function} function that opens the pdf preview
 */
export const getPaperPDFClickHandler = (paper, handlePDFClick) => {
  if (
    paper.oa === false ||
    paper.resulttype === "dataset" ||
    paper.link === ""
  ) {
    return null;
  }

  return () => handlePDFClick(paper);
};

/**
 * Returns the paper's keywords.
 * @param {Object} paper
 * @param {Object} localization
 *
 * @returns {String} the keywords or a fallback string in current language
 */
export const getPaperKeywords = (paper, localization) => {
  if (
    !Object.prototype.hasOwnProperty.call(paper, "subject_orig") ||
    paper.subject_orig === ""
  ) {
    return localization.no_keywords;
  }

  return paper.subject_orig;
};

/**
 * Returns the paper's classification.
 * @param {Object} paper
 * @param {Object} localization
 *
 * @returns {String} the classification or a fallback string in current language
 */
export const getPaperClassification = (paper, localization) => {
  if (
    !Object.prototype.hasOwnProperty.call(paper, "bkl_caption") ||
    paper.bkl_caption === ""
  ) {
    return localization.no_keywords;
  }

  return paper.bkl_caption;
};

/**
 * Returns the paper's text link.
 * @param {Object} paper
 * @param {String} linkType covis/url/doi/<null>
 *
 * @returns {Object} link object with properties 'address' and 'isDoi'
 */
export const getPaperTextLink = (paper, linkType) => {
  if (linkType === "covis") {
    let address = paper.url;
    if (typeof address !== "string" || address === "") {
      address = "n/a";
    }
    return { address, isDoi: false };
  }

  if (linkType === "url") {
    return { address: paper.outlink, isDoi: false };
  }

  if (linkType === "doi") {
    if (paper.doi) {
      return { address: paper.doi, isDoi: true };
    }

    if (paper.link) {
      return { address: paper.link, isDoi: false };
    }

    // fallback for PubMed
    if (paper.url) {
      return { address: paper.url, isDoi: false };
    }
  }

  return {};
};

/**
 * Returns the paper's comments.
 * @param {Object} paper
 *
 * @returns {Array} comments array or null
 */
export const getPaperComments = (paper) => {
  let comments = paper.comments;
  if (!comments || comments.length === 0) {
    return null;
  }

  return comments;
};

/**
 * Returns the paper's tags.
 * @param {Object} paper
 *
 * @returns {Array} tags array or null
 */
export const getPaperTags = (paper) => {
  if (!paper.tags) {
    return null;
  }

  let tags = paper.tags.split(/, |,/g).filter((tag) => !!tag);
  if (tags.length > 0) {
    return tags;
  }

  return null;
};

/**
 * Parses the paper's authors string.
 *
 * @param {string} authors semicolon-separated authors
 *
 * @returns list of authors names and surnames
 */
export const getAuthorsList = (authors, firstNameFirst = true) => {
  if (typeof authors !== "string") {
    return "";
  }

  return authors
    .split(";")
    .filter((a) => !!a)
    .map((a) => {
      const namesList = a.trim().split(",");
      const lastName = namesList[0].trim();
      if (namesList.length < 2) {
        return lastName;
      }

      const firstName = namesList[1].trim();

      if (firstNameFirst) {
        return `${firstName} ${lastName}`;
      }

      return `${lastName} ${firstName}`;
    });
};

/**
 * Sanitizes paper coordinate.
 *
 * Function migrated from the old code (io.js).
 *
 * @param {string} coordinate x or y coordinate
 * @param {number} decimalDigits number of decimals
 *
 * @returns sanitized coordinate
 */
export const parseCoordinate = (coordinate, decimalDigits) => {
  if (isNaN(parseFloat(coordinate))) {
    return parseFloat(0).toFixed(decimalDigits);
  }

  const fixedCoordinate = parseFloat(coordinate).toFixed(decimalDigits);
  if (fixedCoordinate === "-" + parseFloat(0).toFixed(decimalDigits)) {
    return parseFloat(0).toFixed(decimalDigits);
  }

  return fixedCoordinate;
};

/**
 * Determines whether the paper is open access.
 *
 * Function migrated from the old code (io.js).
 *
 * @param {object} paper
 * @param {object} config
 *
 * @returns true/false
 */
export const isOpenAccess = (paper, config) => {
  if (config.service === "pubmed") {
    return typeof paper.pmcid !== "undefined" && paper.pmcid !== "";
  }

  return paper.oa_state === 1 || paper.oa_state === "1";
};

/**
 * Returns paper's open access link.
 *
 * Function migrated from the old code (io.js).
 *
 * @param {object} paper
 * @param {object} config
 *
 * @returns oa link
 */
export const getOpenAccessLink = (paper, config) => {
  if (config.service === "pubmed") {
    if (typeof paper.pmcid !== "undefined" && paper.pmcid !== "") {
      return (
        "http://www.ncbi.nlm.nih.gov/pmc/articles/" + paper.pmcid + "/pdf/"
      );
    }

    return "";
  }

  return paper.link;
};

/**
 * Returns paper's outlink.
 *
 * Function migrated from the old code (io.js) - yeah it's shitty.
 *
 * @param {object} paper
 * @param {object} config
 *
 * @returns outlink
 */
export const getOutlink = (paper, config) => {
  if (config.service === "base") {
    return paper.oa_link;
  }

  if (config.service === "openaire" && paper.resulttype === "dataset") {
    return config.url_prefix_datasets + paper.url;
  }

  if (config.url_prefix !== null) {
    return config.url_prefix + paper.url;
  }

  if (typeof paper.url !== "undefined") {
    return paper.url;
  }

  return "";
};

/**
 * Returns displayable metric value.
 *
 * Function migrated from the old code (io.js).
 *
 * @param {object} paper
 * @param {string} metric paper property name
 *
 * @returns metric value
 */
export const getVisibleMetric = (paper, metric) => {
  if (Object.prototype.hasOwnProperty.call(paper, metric)) {
    if (paper[metric] === "N/A") {
      return "n/a";
    }

    return +paper[metric];
  }
};

/**
 * Returns internal metric value.
 *
 * Function migrated from the old code (io.js).
 *
 * @param {object} paper
 * @param {string} metric paper property name
 *
 * @returns metric value
 */
export const getInternalMetric = (paper, metric) => {
  if (!paper[metric] || paper[metric].toString().toLowerCase() === "n/a") {
    return 0;
  }

  return +paper[metric];
};

/**
 * Validator function for paper.year property.
 *
 * @param {string} date validated date string
 * @returns {boolean}
 */
export const dateValidator = (date) => {
  if (date.match(/^\d{3,4}$/)) {
    return true;
  }
  if (date.match(/^\d{3,4}-\d{2}$/)) {
    return true;
  }
  if (date.match(/^\d{3,4}-\d{2}-\d{2}$/)) {
    return true;
  }
  if (date.match(/^\d{3,4}-\d{2}-\d{2}\w?\s*[-:\d]*\w?$/)) {
    return true;
  }

  return false;
};

/**
 * Validator function for paper.oa_state property.
 * @param {string | number} oaState paper.oa_state property
 * @returns {boolean}
 */
export const oaStateValidator = (oaState) =>
  [0, 1, 2].includes(parseInt(oaState));

/**
 * Validator for string array.
 *
 * @param {[string]} list string array
 * @returns {boolean}
 */
export const stringArrayValidator = (list) =>
  !list.map((e) => typeof e === "string").some((e) => !e);
