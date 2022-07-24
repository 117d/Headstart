import React from "react";
import { connect } from "react-redux";

import { useLocalizationContext } from "../../components/LocalizationProvider";

const Coordinates = ({ paper }) => {
  return (
    <div style={{ marginTop: 5 }}>
      <span style={{ fontSize: 12 }}>
        Coordinates: X={paper.x.toFixed(2)}, Y={paper.y.toFixed(2)}
      </span>
    </div>
  );
};

export default Coordinates;
