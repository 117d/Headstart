import React from "react";
import { connect } from "react-redux";

import { useLocalizationContext } from "../../components/LocalizationProvider";
import { STREAMGRAPH_MODE } from "../../reducers/chartType";
import {
  getPaperClassification,
  getPaperKeywords,
  getPaperPDFClickHandler,
  getPaperTextLink,
} from "../../utils/data";
import { mapDispatchToListEntriesProps } from "../../utils/eventhandlers";
import { shorten } from "../../utils/string";

import Abstract from "./Abstract";
import AccessIcons from "./AccessIcons";
import Area from "./Area";
import Classification from "./Classification";
import Details from "./Details";
import EntryBacklink from "./EntryBacklink";
import Keywords from "./Keywords";
import Link from "./Link";
import ListEntry from "./ListEntry";
import SidePreviewIcons from "./SidePreviewIcons";
import Title from "./Title";

/**
 * List entry template used in LinkedCat.
 * @param {Object} props
 */
const ClassificationListEntry = ({
  paper,
  handlePDFClick,
  linkType,
  abstractSize,
  isStreamgraph,
  handleAreaMouseover,
  handleAreaMouseout,
  handleAreaClick,
  showBacklink,
  isInStreamBacklink,
  handleBacklinkClick,
}) => {
  const loc = useLocalizationContext();

  const id = paper.safe_id;
  const access = {
    isOpenAccess: !!paper.oa,
    isFreeAccess: !!paper.free_access,
    isDataset: paper.resulttype === "dataset",
  };
  const preview = {
    onClickPDF: getPaperPDFClickHandler(paper, handlePDFClick),
  };
  const link = getPaperTextLink(paper, linkType);
  const classification = getPaperClassification(paper, loc);
  const abstract = abstractSize
    ? shorten(paper.paper_abstract, abstractSize)
    : paper.paper_abstract;
  const keywords = getPaperKeywords(paper, loc);
  const area = !isStreamgraph
    ? {
        text: paper.area,
        onMouseOver: () => handleAreaMouseover(paper),
        onMouseOut: () => handleAreaMouseout(),
      }
    : null;
  const backlink = {
    show: showBacklink,
    isInStream: isInStreamBacklink,
    onClick: () => handleBacklinkClick(),
  };

  return (
    // html template starts here
    <ListEntry anchorId={id}>
      <div className="list_metadata">
        <AccessIcons
          isOpenAccess={access.isOpenAccess}
          isFreeAccess={access.isFreeAccess}
          isDataset={access.isDataset}
        />
        <Title paper={paper} />
        <SidePreviewIcons onClickPDF={preview.onClickPDF} />
        <Details
          authors={
            paper.authors_string ? paper.authors_string : loc.default_authors
          }
          source={paper.published_in}
        />
        <Link address={link.address} isDoi={link.isDoi} />
      </div>
      <Classification>{classification}</Classification>
      <Keywords>{keywords}</Keywords>
      <Abstract text={abstract} />
      {!!area && (
        <Area
          onClick={handleAreaClick}
          onMouseOver={area.onMouseOver}
          onMouseOut={area.onMouseOut}
        >
          {area.text}
        </Area>
      )}
      {!!backlink.show && (
        <EntryBacklink
          onClick={backlink.onClick}
          isInStream={backlink.isInStream}
        />
      )}
    </ListEntry>
    // html template ends here
  );
};

const mapStateToProps = (state) => ({
  abstractSize: state.selectedPaper ? null : state.list.abstractSize,
  linkType: state.list.linkType,
  isStreamgraph: state.chartType === STREAMGRAPH_MODE,
  showBacklink: state.chartType === STREAMGRAPH_MODE && !!state.selectedPaper,
  isInStreamBacklink: !!state.selectedBubble,
  disableClicks: state.list.disableClicks,
});

export default connect(
  mapStateToProps,
  mapDispatchToListEntriesProps
)(ClassificationListEntry);
