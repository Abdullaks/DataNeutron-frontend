import React, { useState } from 'react'
import { Resizable } from 're-resizable';

function Bottom() {
         const [state, setState] = useState({ width: "90%", height: 200 });

  return (
    <Resizable
      style={{ marginLeft: 50, marginTop: 20, border: "1px solid black",backgroundColor:"gray" }}
      size={{ width: state.width, height: state.height }}
      onResizeStop={(e, direction, ref, d) => {
        setState({
          width: state.width + d.width,
          height: state.height + d.height,
        });
      }}
    >
      Window 3
    </Resizable>
  );
}

export default Bottom