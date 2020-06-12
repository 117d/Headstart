<?php

header('Content-type: application/json');

require_once dirname(__FILE__) . '/../classes/headstart/library/CommUtils.php';
require 'search.php';

use headstart\library;


if(php_sapi_name() == 'cli') {
    // Called from command-line, maybe cron
    # parse options
    $shortopts = "";
    $longopts = array(
      "q:",
      "sheet_id:"
    );
    $options = getopt($shortopts, $longopts);
    $dirty_query = $options["q"];
    $sheet_id = $options["sheet_id"];
} elseif(php_sapi_name() == 'apache2handler') {
    // Called from the apache2 webserver upon web request
    $dirty_query = library\CommUtils::getParameter($_GET, "q");
    $sheet_id = library\CommUtils::getParameter($_GET, "sheet_id");
}


$result = search("gsheets", $dirty_query, array("q" => $dirty_query, "sheet_id" => $sheet_id, "sheet_range" => "Resources!A1:O200")
                    , array("sheet_id")
                    , ";", null, false, false, null, 3
                    , "area_uri", "subject", $sheet_id, false
                    , "api");

echo $result;

?>