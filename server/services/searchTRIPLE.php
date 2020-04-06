<?php

header('Content-type: application/json');

require_once dirname(__FILE__) . '/../classes/headstart/library/CommUtils.php';
require 'search.php';

use headstart\library;

$dirty_query = library\CommUtils::getParameter($_POST, "q");

$post_params = $_POST;

$result = search("triple", $dirty_query
                , $post_params, array("from", "to", "sorting")
                , ";", null, true, true, null, 3
                , "area_uri", "subject", $precomputed_id, false
                , "api");

echo $result

?>
