import React from "react";
import { PropTypes } from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import ScatterGraphOutput from "./ScatterGraphOutput";
import OutputPreview from "../BaseOutputComponent/OutputPreview.js";

class ScatterGraphOutputPreview extends OutputPreview {
  render() {
    const actions = [
      <FlatButton
        key={0}
        label="Ok"
        primary
        keyboardFocused
        onTouchTap={this.handleOk}
      />
    ];
    return (
      <Dialog
        title="Preview Scatter Graph Output Component"
        actions={actions}
        modal
        autoScrollBodyContent
        open={this.state.open}
      >
        <ScatterGraphOutput
          headers={this.state.headers}
          calling_context="demo"
          data={new Array(this.state.headers.length).fill([
            { x: 1, y: 2 },
            { x: 2, y: 5 },
            { x: 3, y: 8 },
            { x: 4, y: 9 },
            { x: 5, y: 13 }
          ])}
        />
      </Dialog>
    );
  }
}

ScatterGraphOutputPreview.propTypes = {
  functions: PropTypes.object.isRequired
};

export default ScatterGraphOutputPreview;
