var config = {
    
/*** basic visualization modes ***/
    //show list
    render_list: true,
    //show map (should be renamed to reflect that)
    render_bubbles: true,
    //show toolbar at the bottom
    scale_toolbar: false,
    //show author-based view
    is_authorview: false,
    //when set to true, scale map using metrics
    content_based: false,
    //show streamgraph instead of map
    is_streamgraph: false,
    //tag that headstart is appended to 
    tag: "visualization",
       
/*** basic map dimensions for the canvas (in pixels) ***/  
    //minimum height
    min_height: 600,
    //minimum width
    min_width: 600,
    //maximum height
    max_height: 1000,
    //[deprecated] size of multiples
    multiples_size: 600,
    //padding for map range of articles (currently set inline) 
    padding_articles: 0,
    //padding for map range of bubbles (currently set dynamically inline)
    circle_padding: 0,
    
/*** reference sizes for the map, bubbles and papers (in pixels) ***/    
    // map reference size
    reference_size: 650,
    //max paper size
    max_diameter_size: 50,
    //min paper size
    min_diameter_size: 30,
    //max bubble size
    max_area_size: 110,
    //min bubble size
    min_area_size: 50,
    
/*** adapt min and max sizes for bubbles and papers (1 = reference size) ***/    
    bubble_min_scale: 1,
    bubble_max_scale: 1,
    paper_min_scale: 1,
    paper_max_scale: 1,
    //enables a mode for dynamic sizing based on the number of papers (for n > 150)
    dynamic_sizing: false,
    
/*** paper ratios ***/    
    // dogear height and width in relationship to paper height and widht
    dogear_width: 0.1,
    dogear_height: 0.1,
    //paper width and height ratios (currently at the golden cut)
    paper_width_factor: 1.2,
    paper_height_factor: 1.6,
    //height of the metrics section of the paper (ratio)
    paper_readers_height_factor: 0.2,
    //magic number related to the height of the metrics section of the paper
    paper_metadata_height_correction: 25,
    
/*** basic list sizes (in pixels) ***/
    //currently set inline - should be moved to config
    
/*** force-directed layout settings ***/
    //enable force-directed layout for bubbles
    is_force_areas: false,
    //alpha for force-directed layout for bubbles
    area_force_alpha: 0.02,
    
    //enable force-directed layout for papers
    is_force_papers: true,
    //alpha for force-directed layout for papers
    papers_force_alpha: 0.1,
    
    //enables a mode for dynamic alpha setting for force-directed layouts
    dynamic_force_area: false,
    dynamic_force_papers: false,
    
/*** preview image & pdf sizes (list and overlay) ***/
    //list sizes
    preview_image_width_list: 230,
    preview_image_height_list: 298,
    //overlay sizes
    preview_image_width: 738,
    preview_image_height: 984,
    
 /*** zoom settings ***/    
    //correction factor for zoomed in bubble size
    zoom_factor: 0.9,
    // transition durations
    transition_duration: 750,
    zoomout_transition: 750,
    
/*** basic data- and third-party-service related settings ***/
    //mode for retrieving data
    mode: "local_files",
    //which backend to use for data processing (api or legacy)
    backend: "legacy",
    //which backend to use for data persistence (api or legacy)
    persistence_backend: "legacy",
    //language specification to use (see localization object)
    language: "eng",
    //language used for hyphenation
    hyphenation_language: "en",
    //if set to true, Hypothes.is reader will be used for PDF viewing (make sure the related submodule is checked out)
    //if set to false, the default pdf viewer of the browser will be used
    use_hypothesis: false,
    //bubbles have area uris in the data (if set to false, bubble titles are used)
    //service providing the data
    service: "none",
    //canonical url for the map
    canonical_url: null,
    //which intro to use for the modal (see intro.js)
    intro: "intro_cris",
    //show intro (true/false)
    show_intro: false,
    //show loading screen before map is loaded (true/false)
    show_loading_screen: false,
    //evaluation mode/events logging
    is_evaluation: false,
    //which evaluation service to use. can also be an array. currently possible: "log", "matomo" and "ga"
    evaluation_service: "log",
    //enable logging of mouseover events (use only temporarily as it creates A LOT of logging events)
    enable_mouseover_evaluation: false,
    //[deprecated] enables bookmarking and recommenders for CN3
    is_adaptive: false,
    //whether to embed the okmaps credit
    credit_embed: false,
    use_area_uri: false,
    //add a prefix to paper urls
    url_prefix: null,
    url_prefix_datasets: null,
    //data input format
    input_format: "csv",
    //base unit for metrics
    base_unit: "readers",
    //preview type
    preview_type: "image",
    //convert author names from "[last name], [first name]" to "[first name] [last name]"
    convert_author_names: true,
    //adds some (currently very limited) debug output to the browser console
    debug: false,
    //debounce value
    debounce: 50,

/*** settings for title and context line ***/
    //set map title directly (should be renamed)
    subdiscipline_title: "",
    //[deprecated] show link to load multiples view
    show_multiples: false,
    //show link to display intro
    show_infolink: true,
    //show dropdown to load different map datasets
    show_dropdown: true,
    //show context line
    show_context: false,
    //[deprecated] show link to display intro to area
    show_infolink_areas: false,
    //create title from context
    create_title_from_context: false,
    //create title from context style
    create_title_from_context_style: '',
    //set a custom title
    custom_title: null,
    //show number of open access documents in context
    show_context_oa_number: true,
    //create a tooltip for the label "most relevant" in the context line
    context_most_relevant_tooltip: false,
    //show timestamp in the context line
    show_context_timestamp: false,
    
/*** list behaviour ***/
    //show list onload (can be shown on click)
    show_list: false,
    //show doi outlinks in list entry (requires presence of doi attribute in data)
    doi_outlink: false,
    //show url outlink in list entry
    url_outlink: false,
    //show keywords in list entry
    show_keywords: false,
    //show tags in list entry
    show_tags: false,
    //hide keywords when paper is not selected
    hide_keywords_overview: true,
    //show area in list entry
    show_area: true,
    //show result type (document type) in list entry
    show_resulttype: false,
    //show comments (requires presence of comments in data)
    show_comments: false,
    //whether the title of a list entry can be clicked after it has been selected
    is_title_clickable: true,
    //abstract length in characters when items are not expanded
    abstract_small: 250,
    //abstract length expanded (null = no character limit)
    abstract_large: null,
    //show a backlink to all papers in bubble at the bottom of a list entry when a paper is selected
    list_set_backlink: false,
    //sort options for sort dropdown
    sort_options: ["readers", "title", "authors", "year"],
    //filter options for filter dropdown
    filter_options: ["all", "open_access", "publication", "dataset"],
    //custom data property to filter for. if null, defaults are used with above filter options
    filter_field: null,
    //display sort menu dropdown
    sort_menu_dropdown: false,
    //initial field used for sorting
    initial_sort: null,
    //whether to show other papers in the list view when a paper is selected
    list_show_all_papers: false,
    
    highlight_query_terms: false,
    highlight_query_fields: ["title"
                                , "authors_string"
                                , "paper_abstract"
                                , "year"
                                , "published_in"
                                , "subject_orig"],
    
    //extension for fields that are highlighted that contain the original text,
    //not the text including the spans
    sort_field_exentsion: "_sort",

    //display filter menu dropdown
    filter_menu_dropdown: false,
    //[deprecated] list subentry settings
    list_sub_entries: false,
    list_sub_entries_readers: false,
    list_sub_entries_number: false,
    list_sub_entries_statistics: false,
    //[deprecated] list additional images settings
    list_additional_images: false,
    list_images: [],
    list_images_path: "images/",
    visual_distributions: false,
    //[deprecated] list link to an external visualization settings
    list_show_external_vis: false,
    external_vis_url: "",
    
/*** button/modal settings ***/
    //show embed modal button
    embed_modal: false,
    //show share modal button
    share_modal: false,
    //hashtags for twitter cards (share modal)
    hashtags_twitter_card: "okmaps,openscience,dataviz",
    //show button with link to faqs
    faqs_button: false,
    //url for link to faqs
    faqs_url: "",

/*** streamgraph settings ***/
    //[experimental] zoomable streamgraph
    streamgraph_zoom: false,
    //streamgraph color definition
    streamgraph_colors: ["#28a2a3", "#671A54", "#CC3380", "#7acca3", "#c999ff", "#ffe199"
        , "#ccfff2", "#99DFFF", "#FF99AA", "#c5d5cf", "#FFBD99", "#2856A3"],
    
/*** [deprecated] settings related to conference navigator integration ***/
    conference_id: 0,
    user_id: 0,
    max_recommendations: 10,
    max_documents: 100,
    
    service_names: {plos: "PLOS"
                        , base: "BASE"
                        , pubmed: "PubMed"
                        , doaj: "DOAJ"
                        , openaire: "OpenAIRE"
                        , linkedcat: "LinkedCat+"
                        , linkedcat_authorview: "LinkedCat+"
                        , linkedcat_browseview: "LinkedCat+"
                        , triple: "TRIPLE"
                    },

    localization: {
        eng: {
            loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "readers",
            year: "date",
            authors: "authors",
            title: "title",
            default_title: 'Overview of <span id="num_articles"></span> documents',
            overview_label: 'Overview of',
            streamgraph_label: 'Streamgraph for',
            overview_authors_label: 'Overview of the works of',
            streamgraph_authors_label: 'Streamgraph for the works of',
            custom_title_explanation: 'This is a custom title. Please see the info button for more information. Original query:',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            most_relevant_tooltip: 'At the moment, we use the relevance ranking provided by the source API. Both PubMed and BASE mainly use text similarity between your query and the article metadata to determine the relevance. Please consult the FAQ for more information.',
            source_label: 'Source',
            resulttype_label: 'Document type',
            documenttypes_label: 'Document types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            area: "Area",
            items: "items",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            backlink_list_streamgraph: "← Show all documents",
            backlink_list_streamgraph_stream_selected: "← Show all documents in stream",
            keywords: "Keywords",
            no_keywords: "n/a",
            no_title: "No title",
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        ger: {
            loading: "Wird geladen...",
            search_placeholder: "Suche in der Liste...",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "Leser",
            year: "Jahr",
            authors: "Autor",
            title: "Titel",
            default_title: 'Überblick über <span id="num_articles"></span> Artikel',
            overview_label: 'Überblick über',
            streamgraph_label: 'Streamgraph für',
            overview_authors_label: 'Überblick über die Werke von',
            streamgraph_authors_label: 'Streamgraph für die Werke von',
            custom_title_explanation: 'Dieser Titel wurde manuell geändert. Die Original-Suche lautet:',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'Artikel',
            source_label: 'Quelle',
            resulttype_label: 'Dokumentart',
            documenttypes_label: 'Publikationsarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            area: "Bereich",
            items: "Dokumente",
            backlink: "← Zurück zum Überblick",
            backlink_list: "← Zeige alle Dokumente des Bereichs",
            backlink_list_streamgraph: "← Zeige alle Dokumente an",
            backlink_list_streamgraph_stream_selected: "← Zeige alle Dokumente des Streams an",
            keywords: "Schlagwörter",
            no_title: "Kein Titel",
            no_keywords: "nicht vorhanden",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            embed_title: 'Visualisierung einbetten',
            sort_by_label: 'sortieren: ',
            relevance: "Relevanz",
            link: "Link",
            comment_by_label: "von",
            share_button_title: "Visualisierung teilen",
            embed_button_title: "Visualisierung auf einer anderen Seite einbetten",
            embed_button_text: 'Kopieren',
            embed_body_text: 'Sie können diesen Code verwenden, um die Visualisierung auf anderen Seiten einzubetten.',
            pdf_not_loaded: "Leider konnten wir das PDF nicht abrufen. Mehr Informationen finden Sie auf",
            pdf_not_loaded_linktext: "dieser Seite",
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        ger_linkedcat: {
           loading: "Wird geladen...",
            search_placeholder: "Suche in der Liste...",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "Leser",
            year: "Jahr",
            authors: "Autor",
            title: "Titel",
            default_title: 'Knowledge Map für <span id="num_articles"></span> Artikel',
            overview_label: 'Knowledge Map für',
            streamgraph_label: 'Streamgraph für',
            overview_authors_label: 'Knowledge Map für die Werke von',
            streamgraph_authors_label: 'Streamgraph für die Werke von',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'open access Dokumente',
            source_label: 'Quelle',
            resulttype_label: 'Dokumentart',
            documenttypes_label: 'Dokumentarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            bio_link: 'Biografie',
            area: "Bereich",
            area_streamgraph: "Schlagwort",
            items: "Dokumente",
            backlink: "← Zurück zum Überblick",
            backlink_list: "Zeige alle Dokumente des Bereichs",
            backlink_list_streamgraph: "Zeige alle Dokumente an",
            backlink_list_streamgraph_stream_selected: "Zeige alle Dokumente des Streams an",
            keywords: "Schlagwörter",
            basic_classification: "Basisklassifikation",
            ddc: "DDC",
            no_keywords: "nicht vorhanden",
            no_title: "Kein Titel",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            embed_title: 'Visualisierung einbetten',
            sort_by_label: 'sortieren: ',
            relevance: "Relevanz",
            link: "Link",
            comment_by_label: "von",
            share_button_title: "Visualisierung teilen",
            embed_button_title: "Visualisierung auf einer anderen Seite einbetten",
            embed_button_text: 'Kopieren',
            embed_body_text: 'Sie können diesen Code verwenden, um die Visualisierung auf anderen Seiten einzubetten.',
            pdf_load_text: "Dieser Vorgang kann mehrere Minuten dauern, da die gescannten Texte sehr umfangreich sein können. Bitte haben Sie etwas Geduld.",
            pdf_not_loaded: "Leider konnten wir das PDF nicht abrufen. Mehr Informationen finden Sie auf",
            pdf_not_loaded_linktext: "dieser Seite",
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        eng_plos: {
            loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "",
            intro_icon: "&#xf05a;",
            readers: "views",
            year: "date",
            authors: "authors",
            title: "title",
            area: "Area",
            items: "items",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            keywords: "Keywords",
            no_keywords: "n/a",
            no_title: "No title",
            overview_label: 'Overview of',
            custom_title_explanation: 'This is a custom title. Please see the info button for more information. Original query:',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            source_label: 'Source',
            resulttype_label: 'Article type',
            documenttypes_label: 'Article types',
            documenttypes_tooltip: 'The following article types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        eng_pubmed: {
            loading: "Loading knowledge map.",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "",
            intro_icon: "&#xf05a;",
            relevance: "relevance",
            readers: "citations",
            year: "year",
            authors: "authors",
            title: "title",
            area: "Area",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            backlink_list_streamgraph: "← Show all documents",
            backlink_list_streamgraph_stream_selected: "← Show all documents in stream",
            keywords: "Keywords",
            no_keywords: "n/a",
            no_title: "No title",
            overview_label: 'Overview of',
            streamgraph_label: 'Streamgraph for',
            overview_authors_label: 'Overview of the works of',
            streamgraph_authors_label: 'Streamgraph for the works of',
            custom_title_explanation: 'This is a custom title. Please see the info button for more information. Original query:',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            most_relevant_tooltip: 'To determine the most relevant documents, we use the relevance ranking provided by the source - either BASE or PubMed. Both sources compute the text similarity between your query and the article metadata to establish the relevance ranking. Please consult the FAQ for more information.',
            source_label: 'Source',
            resulttype_label: 'Document type',
            documenttypes_label: 'Document types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            filter_by_label: 'show: ',
            all: "any",
            open_access: "Open Access",
            link: 'link',
            items: "items",
            comment_by_label: "by",
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_button_text: 'Copy',
            embed_title: 'embed map',
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            high_metadata_quality: "High metadata quality",
            high_metadata_quality_desc_base: "This knowledge map only includes documents with an abstract (min. 300 characters). High metadata quality significantly improves the quality of your knowledge map.",
            high_metadata_quality_desc_pubmed: "This knowledge map only includes documents with an abstract. High metadata quality significantly improves the quality of your knowledge map.", 
            low_metadata_quality: "Low metadata quality",
            low_metadata_quality_desc_base: "This knowledge map includes documents with and without an abstract. Low metadata quality may significantly reduce the quality of your knowledge map. ",
            low_metadata_quality_desc_pubmed: "This knowledge map includes documents with and without an abstract. Low metadata quality may significantly reduce the quality of your knowledge map. ",
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        eng_openaire: {
            loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "more info",
            intro_icon: "",
            relevance: "relevance",
            readers: "readers",
            tweets: "tweets",
            year: "year",
            authors: "authors",
            citations: "citations",
            title: "title",
            area: "Area",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            keywords: "Keywords",
            no_keywords: "n/a",
            no_title: "No title",
            overview_label: 'Overview of',
            articles_label: 'documents',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            source_label: 'Source',
            resulttype_label: 'Document type',
            documenttypes_label: 'Article types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            dataset_count_label: "datasets",
            paper_count_label: "papers",
            viper_edit_title: "How to add project resources",
            viper_edit_desc_label: `<p>Are you missing relevant publications and datasets related to this project? \ 
            <p>No problem: simply link further resources on the OpenAIRE website. \ 
            The resources will then be be automatically added to the map. \ 
            <p>Use the button indicated in the exemplary screenshot to do so: `,
            viper_button_desc_label: `<p>By clicking on the button below, you are redirected to the\
                OpenAIRE page for`,
            viper_edit_button_text: 'continue to openaire',
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_button_text: 'Copy',
            embed_title: 'embed map',
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            link: 'link',
            tweets_count_label: " tweets",
            readers_count_label: " readers (Mendeley)",
            citations_count_label: " citations (Crossref)",
            filter_by_label: 'show: ',
            all: "any",
            open_access: "Open Access",
            publication: "papers",
            dataset: "datasets",
            items: "items",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            scale_by_label: 'Scale map by:',
            scale_by_infolink_label: 'notes on use of metrics',
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            credit_alt: "VIPER was created by Open Knowledge Maps",
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
         ger_cris: {
            loading: "Wird geladen...",
            search_placeholder: "Suchwort eingeben",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "mehr Informationen",
            intro_icon: "&#xf129;",
            intro_label_areas: "Verteilung der Respondenten",
            intro_areas_title: "Verteilung der Respondenten für ",
            readers: "Nennungen",
            year: "Jahr",
            authors: "Autor",
            title: "alphabetisch",
            default_title: 'Überblick über <span id="num_articles"></span> Artikel',
            overview_label: 'Überblick über',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'Artikel',
            source_label: 'Quelle',
            documenttypes_label: 'Publikationsarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            area: "Themenfeld",
            backlink: "← Zurück zur Übersicht",
            backlink_list: "← Zeige alle Themen im Themenfeld",
            keywords: "Keywords",
            no_keywords: "nicht vorhanden",
            no_title: "Kein Titel",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            showmore_questions_label: "Alle",
            showmore_questions_verb: "Fragen anzeigen",
            distributions_label: "Verteilungen ",
            show_verb_label: "ausklappen",
            hide_verb_label: "einklappen",
            sort_by_label: 'sortieren: ',
            items: "Themen",
            comment_by_label: "von",
            scale_by_infolink_label: '',
            scale_by_label: 'Verteilung für:',
            credit_alt: "Created by Open Knowledge Maps",
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        ger_cris_2: {
            loading: "Wird geladen...",
            search_placeholder: "Suchwort eingeben",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "mehr Informationen",
            intro_icon: "&#xf129;",
            intro_label_areas: "Verteilung der Respondenten",
            intro_areas_title: "Verteilung der Respondenten für ",
            readers: "Anzahl Fragen",
            year: "Jahr",
            authors: "Autor",
            title: "alphabetisch",
            default_title: 'Überblick über <span id="num_articles"></span> Artikel',
            overview_label: 'Überblick über',
            most_recent_label: 'neueste',
            most_relevant_label: 'relevanteste',
            articles_label: 'Artikel',
            source_label: 'Quelle',
            documenttypes_label: 'Publikationsarten',
            documenttypes_tooltip: 'Die folgenden Publikationsarten wurden bei der Erstellung dieser Visualisierung in Betracht gezogen (nicht alle davon scheinen notwendigerweise in dieser Visualisierung auch auf):',
            area: "Themenfeld",
            backlink: "← Zurück zur Übersicht",
            backlink_list: "← Zeige alle Themen im Themenfeld",
            keywords: "Keywords",
            no_keywords: "nicht vorhanden",
            no_title: "Kein Titel",
            default_area: "Kein Bereich",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            showmore_questions_label: "Alle",
            showmore_questions_verb: "Fragen anzeigen",
            distributions_label: "Verteilungen ",
            show_verb_label: "ausklappen",
            hide_verb_label: "einklappen",
            sort_by_label: 'sortieren: ',
            items: "Themen",
            comment_by_label: "von",
            scale_by_infolink_label: '',
            scale_by_label: 'Verteilung für:',
            credit_alt: "Created by Open Knowledge Maps",
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        eng_cris_2: {
           loading: "Loading...",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "more information",
            intro_icon: "&#xf129;",
            intro_label_areas: "Distribution of respondents",
            intro_areas_title: "Distribution of respondents for ",
            readers: "no. questions",
            year: "date",
            authors: "authors",
            title: "alphabetically",
            default_title: 'Overview of <span id="num_articles"></span> documents',
            overview_label: 'Overview of',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            articles_label: 'documents',
            source_label: 'Source',
            documenttypes_label: 'Document types',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            area: "Area",
            backlink: "← Back to overview",
            backlink_list: "← Show all topics in area",
            keywords: "Keywords",
            no_keywords: "n/a",
            no_title: "No title",
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            comment_by_label: "by",
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            showmore_questions_label: "Show all",
            showmore_questions_verb: "questions",
            distributions_label: "distributions ",
            show_verb_label: "expand",
            hide_verb_label: "collapse",
            items: "topics",
            scale_by_infolink_label: '',
            scale_by_label: 'Distribution for:',
            credit_alt: "Created by Open Knowledge Maps",
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
        eng_gsheets: {
            loading: "Updating and retrieving map. This may take a few seconds, please hold on.",
            search_placeholder: "Search within map...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "[more info]",
            intro_icon: "",
            relevance: "relevance",
            readers: "citations",
            year: "date",
            authors: "authors",
            title: "title",
            area: "Area",
            backlink: "← Back to overview",
            backlink_list: "← Show all documents in area",
            backlink_list_streamgraph: "← Show all documents",
            backlink_list_streamgraph_stream_selected: "← Show all documents in stream",
            keywords: "Keywords",
            no_keywords: "n/a",
            no_title: "No title",
            overview_label: 'Overview of',
            streamgraph_label: 'Streamgraph for',
            overview_authors_label: 'Overview of the works of',
            streamgraph_authors_label: 'Streamgraph for the works of',
            articles_label: 'resources',
            most_recent_label: 'most recent',
            most_relevant_label: 'most relevant',
            most_relevant_tooltip: 'To determine the most relevant documents, we use the relevance ranking provided by the source - either BASE or PubMed. Both sources compute the text similarity between your query and the article metadata to establish the relevance ranking. Please consult the FAQ for more information.',
            source_label: 'Data source',
            resulttype_label: 'Document type',
            documenttypes_label: 'Document types',
            timestamp_label: 'Last updated',
            documenttypes_tooltip: 'The following document types were taken into consideration in the creation of this map (not all of them may appear in the map):',
            default_area: "No area",
            default_author: "",
            default_id: "defaultid",
            default_hash: "hashHash",
            default_abstract: "No Abstract",
            default_published_in: "",
            default_readers: 0,
            default_url: "",
            default_x: 1.,
            default_y: 1.,
            default_year: "",
            sort_by_label: 'sort by:',
            filter_by_label: 'show: ',
            all: "any",
            open_access: "Open Access",
            "Journal Article": "Journal article",
            Preprint: "Preprint",
            ReFigure: "ReFigure",
            Review: "Review",
            link: 'link',
            items: "items",
            comment_by_label: "by",
            pdf_not_loaded: "Sorry, we were not able to retrieve the PDF for this publication. You can get it directly from",
            pdf_not_loaded_linktext: "this website",
            share_button_title: "share this map",
            embed_button_title: "Embed this knowledge map on other websites",
            embed_button_text: 'Copy',
            embed_title: 'embed map',
            embed_body_text: 'You can use this code to embed the visualization on your own website or in a dashboard.',
            empty_area_warning: "No matches found. Please reset your filter options above.",
        },
    },

    scale_types: [],
    rescale_map: true,
    cris_legend: false,

    url_plos_pdf: "http://www.plosone.org/article/fetchObject.action?representation=PDF&uri=info:doi/",
    plos_journals_to_shortcodes: {
        "plos neglected tropical diseases": "plosntds",
        "plos one": "plosone",
        "plos biology": "plosbiology",
        "plos medicine": "plosmedicine",
        "plos computational Biology": "ploscompbiol",
        "plos genetics": "plosgenetics",
        "plos pathogens": "plospathogens",
        "plos clinical trials": "plosclinicaltrials"
    },

    // modern_frontend feature flag
    modern_frontend_enabled: process.env.MODERN_FRONTEND
};

if (config.content_based) {
    config.sort_options = ["title", "area"];
}

export default config;
