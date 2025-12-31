import data from "../data/vitamins.json";
import { useState } from "react";

function renderTree(
  node,
  x,
  y,
  level,
  onSelect,
  hovered,
  setHovered,
  collapsed
) {
  const nodes = [];
  const edges = [];

  const isHovered = hovered?.id === node.id;

  nodes.push(
    <g
      key={node.id}
      onClick={() => onSelect(node)}
      onMouseEnter={(e) =>
        setHovered({ id: node.id, text: node.summary, x: e.clientX, y: e.clientY })
      }
      onMouseLeave={() => setHovered(null)}
      style={{ cursor: "pointer" }}
    >
      <rect
        x={x - 80}
        y={y - 26}
        rx="14"
        ry="14"
        width="160"
        height="52"
        fill={isHovered ? "#bae6fd" : level === 0 ? "#e0f2fe" : "#ecfeff"}
        stroke="#93c5fd"
        strokeWidth="1.2"
      />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fontSize="13"
        fill="#0f172a"
        style={{ pointerEvents: "none", fontWeight: 500 }}
      >
        {node.title}
      </text>
    </g>
  );

  if (node.children && !collapsed[node.id]) {
    node.children.forEach((child, i) => {
      const childX = x + 260;
      const childY = y + i * 120 - (node.children.length * 60);

      edges.push(
        <path
          key={`${node.id}-${child.id}`}
          d={`M ${x + 80} ${y} C ${x + 140} ${y}, ${childX - 140} ${childY}, ${
            childX - 80
          } ${childY}`}
          stroke="#cbd5e1"
          strokeWidth="1.4"
          fill="none"
        />
      );

      const childTree = renderTree(
        child,
        childX,
        childY,
        level + 1,
        onSelect,
        hovered,
        setHovered,
        collapsed
      );
      nodes.push(...childTree.nodes);
      edges.push(...childTree.edges);
    });
  }

  return { nodes, edges };
}

export default function MindMap({ onSelectNode }) {
  const [hovered, setHovered] = useState(null);
  const [collapsed, setCollapsed] = useState({});

  const handleSelect = (node) => {
    onSelectNode(node);
    setCollapsed((prev) => ({ ...prev, [node.id]: !prev[node.id] }));
  };

  const { nodes, edges } = renderTree(
    data,
    420,
    420,
    0,
    handleSelect,
    hovered,
    setHovered,
    collapsed
  );

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1800 1000"
        preserveAspectRatio="xMidYMid meet"
        style={{ background: "#f8fafc" }}
      >
        {edges}
        {nodes}
      </svg>

      {/* 🔥 Hover Tooltip */}
      {hovered && (
        <div
          style={{
            position: "fixed",
            top: hovered.y + 10,
            left: hovered.x + 10,
            background: "#0f172a",
            color: "white",
            padding: "6px 10px",
            fontSize: "12px",
            borderRadius: "6px",
            maxWidth: "220px",
            zIndex: 1000,
          }}
        >
          {hovered.text}
        </div>
      )}
    </div>
  );
}
