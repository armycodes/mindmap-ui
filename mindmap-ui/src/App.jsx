import { useState } from "react";
import MindMap from "./components/Mindmap.jsx";
import SidePanel from "./components/SidePanel";
import Toolbar from "./components/Toolbar";
export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f1f5f9",
        color: "#0f172a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* MAIN CONTENT AREA */}
      <div
        style={{
          flex: 1,
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Toolbar />

        {/* Mindmap */}
        <div style={{ flex: 1 }}>
          <MindMap onSelectNode={setSelectedNode} />
        </div>

        {/* Side Panel */}
        <div
          style={{
            width: "380px",
            background: "#ffffff",
            borderLeft: "1px solid #e2e8f0",
          }}
        >
          <SidePanel node={selectedNode} />
        </div>
      </div>

      {/* 🔻 FOOTER (FIXED & VISIBLE) */}
      <div
        style={{
          height: "36px",
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          color: "#64748b",
          flexShrink: 0,
        }}
      >
        Developed and Designed by
        <strong style={{ margin: "0 6px" }}>
          Vemula Siri Mahalaxmi
        </strong>
        for
        <strong style={{ marginLeft: "6px" }}>
          Recsify Technologies
        </strong>
      </div>
    </div>
  );
}