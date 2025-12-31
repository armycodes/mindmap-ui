export default function Toolbar() {
  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        left: 16,
        display: "flex",
        gap: "10px",
        zIndex: 10,
      }}
    >
      <button
        className="toolbar-btn"
        onClick={() => window.location.reload()}
      >
        Fit View
      </button>
    </div>
  );
}
