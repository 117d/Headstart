import React from "react";
import dateFormat from "dateformat";

const StandardBuiltWith = ({
  timestamp,
  codebaseUrl,
  codebaseName,
  sourceUrl,
  sourceName,
}) => (
  <div className="builtwith" id="builtwith">
    Created {formatTimestamp(timestamp)} with{" "}
    <a
      href="https://github.com/OpenKnowledgeMaps/Headstart"
      target="_blank"
      rel="noreferrer"
    >
      Headstart
    </a>{" "}
    and{" "}
    <a href={codebaseUrl} target="_blank" rel="noreferrer">
      {codebaseName}
    </a>
    . All content retrieved from{" "}
    <a href={sourceUrl} target="_blank" rel="noreferrer">
      {sourceName}
    </a>
    .
  </div>
);

export default StandardBuiltWith;

const formatTimestamp = (timestamp) => {
  if (!timestamp) {
    return "";
  }

  try {
    const date = new Date(timestamp);
    return `on ${dateFormat(date, "d mmm yyyy")} at ${dateFormat(
      date,
      "H:MM"
    )}`;
  } catch (error) {
    console.warn(error);
    return "";
  }
};
