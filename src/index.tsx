import * as React from "react";
import { render } from "react-dom";
import { Graph } from "react-d3-graph";

import "./styles.css";

// graph payload (with minimalist structure)
const data = {
  nodes: [
    { id: "Harry", color: "red", size: 600 },
    { id: "Sally" },
    { id: "Alice" },
  ],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    labelProperty: "id",
    highlightStrokeColor: "blue",
  },
  link: {
    type: "CURVE_SMOOTH",
    highlightColor: "lightblue",
  },
};

function App() {
  const onClickGraph = () => {
    console.log(`Clicked the graph background`);
  };

  const onClickNode = (nodeId) => {
    console.log(`Clicked node ${nodeId}`);
  };

  const onDoubleClickNode = (nodeId) => {
    console.log(`Double clicked node ${nodeId}`);
  };

  const onRightClickNode = (event, nodeId) => {
    console.log(`Right clicked node ${nodeId}`);
  };

  const onMouseOverNode = (nodeId) => {
    console.log(`Mouse over node ${nodeId}`);
  };

  const onMouseOutNode = (nodeId) => {
    console.log(`Mouse out node ${nodeId}`);
  };

  const onClickLink = (source, target) => {
    console.log(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = (event, source, target) => {
    console.log(`Right clicked link between ${source} and ${target}`);
  };

  const onMouseOverLink = (source, target) => {
    console.log(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = (source, target) => {
    console.log(`Mouse out link between ${source} and ${target}`);
  };

  return (
    <div className="App">
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onRightClickNode={onRightClickNode}
        onClickGraph={onClickGraph}
        onClickLink={onClickLink}
        onRightClickLink={onRightClickLink}
        onMouseOverNode={onMouseOverNode}
        onMouseOutNode={onMouseOutNode}
        onMouseOverLink={onMouseOverLink}
        onMouseOutLink={onMouseOutLink}
      />
      ;
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
