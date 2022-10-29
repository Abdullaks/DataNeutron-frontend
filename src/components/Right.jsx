import { Resizable } from 're-resizable';
import React, { useState } from 'react'

function Right() {
         const [state, setState] = useState({ width: "60%", height: 300 });

  return (
    <Resizable
      style={{
        marginLeft: 5,
        marginTop: 20,
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
      Window 2
    </Resizable>
  );
}

export default Right