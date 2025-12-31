# Interactive Mindmap UI

## 📌 Overview
This project is an interactive, data-driven Mindmap UI built as part of the **Frontend Development Internship Assignment**.  
The goal of this project is to visualize hierarchical data in a clean, intuitive, and interactive way, similar to professional mind-mapping tools.

The application focuses on:
- Data-driven rendering
- Rich user interactions
- Clean UI/UX
- Maintainable frontend architecture

---

## 🎯 Features

### Mindmap Visualization
- Displays hierarchical data as a mindmap
- Parent → child relationships are clearly represented
- Nodes are connected visually using curved edges
- Layout is readable and visually structured

### Interactive Capabilities
- **Hover interaction**  
  - Hovering on a node highlights it
  - Displays a tooltip with a short summary
- **Click interaction**
  - Clicking a node selects it
  - Clicking toggles expand/collapse of child nodes
- **Expand / Collapse**
  - Nodes can be explored interactively
- **Fit View / Reset View**
  - Toolbar button to reset the view
- **Edit in UI**
  - Selected node details can be edited directly in the side panel (UI-level editing)

### Data Display
- **On hover**: short contextual summary
- **Side panel**:
  - Node title
  - Detailed description
  - Metadata such as node ID and data source

---

## 🔑 Key Capability: Data-Driven Rendering
- The entire mindmap is generated from a structured **JSON file**
- No nodes or edges are hardcoded
- Updating the JSON automatically updates:
  - Node content
  - Hierarchy
  - Hover and side-panel information

Example:
- Adding a node in JSON → new node appears in UI
- Updating text in JSON → reflected on hover and side panel
- Changing hierarchy → structure updates automatically

---

## 🛠️ Technology Stack

- **React** – Component-based UI development
- **SVG** – Precise, predictable rendering of nodes and connections
- **JavaScript (ES6+)**
- **CSS / Inline Styles** – Clean, minimal styling

No backend is used, as this is a frontend-focused assignment.

---

## 🧩 Architecture & Approach

- `data/vitamins.json`  
  Contains the complete hierarchical data model

- `MindMap.jsx`  
  - Recursively converts JSON data into SVG nodes and edges
  - Handles hover, click, expand/collapse logic

- `SidePanel.jsx`  
  - Displays detailed information for the selected node
  - Allows UI-level editing of node descriptions

- `Toolbar.jsx`  
  - Provides controls such as Fit View / Reset View

- `App.jsx`  
  - Overall layout
  - Manages shared state (selected node)

This separation ensures clean code, scalability, and maintainability.

---

## 📸 Screenshots
Screenshots are included to demonstrate:
- Full mindmap view
- Hover interactions
- Node selection & side panel
- Expanded and collapsed states

---

## 🎥 Demo Video
A short demo video is included showing:
- Mindmap exploration
- Hover tooltip
- Expand / collapse behavior
- Editing node details
- Fit View functionality

<img width="1920" height="1080" alt="after clicking fit view button" src="https://github.com/user-attachments/assets/b7c673b8-bb8e-4d6d-a61d-1899d1eeb80c" />
<img width="1920" height="1080" alt="Before clicking fit view button" src="https://github.com/user-attachments/assets/e3ae0a00-b6e6-4ef4-9f7d-1daf5d5cfa19" />



---

## 📝 Notes & Assumptions
- UI-level editing is supported (data is not persisted back to JSON)
- The focus is on functional parity and UX clarity, not pixel-perfect replication
- SVG was chosen for predictable layout control and performance

---

## 👤 Credits
Created by **Vemula Siri Mahalaxmi**  
For **Recsify Technologies**
