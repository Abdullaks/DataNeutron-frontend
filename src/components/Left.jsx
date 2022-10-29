import React, { useState } from "react";
import { Resizable } from "re-resizable";

function Left() {
  const [state, setState] = useState({ width: "30%", height: 300 });

  return (
    <Resizable
      style={{
        marginLeft: 50,
        marginTop: 20,
        maxWidth: "100%",
        minWidth: "20%",
        border: "1px solid black",
        backgroundColor: "gray",
      }}
      size={{ width: state.width, height: state.height }}
      onResizeStop={(e, direction, ref, d) => {
        setState({
          width: state.width + d.width,
          height: state.height + d.height,
        });
      }}
    >
      Window 1
    </Resizable>
  );
}

export default Left;
