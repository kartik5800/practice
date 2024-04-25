import React, { useState } from "react";
import PropTypes from "prop-types";

const data = [
  {
    id: "1",
    name: "public",
    children: [
      {
        id: "c1",
        name: "image",
        children: [
          { id: "sc1", name: "image1.png" },
          { id: "sc1", name: "image2.png" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "src",
    children: [
      {
        id: "c1",
        name: "assets",
        children: [{ id: "sc1", name: "react.png" }],
      },
      { id: "sc1", name: "app.css" },
      { id: "sc1", name: "app.jsx" },
      { id: "sc1", name: "index.css" },
      { id: "sc1", name: "main.jsx" },
    ],
  },
  { id: "3", name: "folder3", children: [{ id: "c1", name: "c1" }] },
  { id: "4", name: "folder3", children: [{ id: "cw1", name: "c1er" }] },
];

const App = () => {
  return (
    <div>
      {data.map((data, index) => (
        <ChildApp key={`parent-tree-${index}`} data={data} />
      ))}
    </div>
  );
};

const ChildApp = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCollaps = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={openCollaps}>
        {data.children && (isOpen ? "-" : "+")}
        {data.name}
      </div>
      {isOpen && data.children && (
        <div style={{ marginLeft: "20px" }}>
          {data?.children?.map((child, index) => (
            <ChildApp key={`child-tree-${index}`} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

ChildApp.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default App;
