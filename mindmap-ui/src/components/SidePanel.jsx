import { useState, useEffect } from "react";

export default function SidePanel({ node }) {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    if (node) setSummary(node.summary);
  }, [node]);

  if (!node) {
    return (
      <div style={{ padding: "24px", color: "#475569" }}>
        Select a node to view details.
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", color: "#0f172a" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600 }}>
        Architecture Documentation
      </h2>

      <h3 style={{ marginTop: "20px", fontSize: "16px", fontWeight: 600 }}>
        {node.title}
      </h3>

      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        style={{
          marginTop: "10px",
          width: "100%",
          height: "100px",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          fontSize: "14px",
        }}
      />

      <p style={{ fontSize: "12px", marginTop: "10px", color: "#64748b" }}>
        (UI-only edit, data remains JSON-driven)
      </p>

      <div style={{ marginTop: "20px", fontSize: "13px", color: "#475569" }}>
        <p>
          <strong>Node ID:</strong> {node.id}
        </p>
        <p>
          <strong>Source:</strong> JSON
        </p>
      </div>
    </div>
  );
}
