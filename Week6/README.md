# Week 6: Advanced Data Visualization and Interaction with D3.js

This folder contains lab exercises for **Week 6** of **STATS 401: Data Acquisition & Visualization Seminar**. This week focuses on advanced **data visualization techniques** and **interactive elements** using **D3.js**.

---

## Lab 9: Chord Diagrams and Line Charts with D3.js

### Overview
This lab explores two advanced visualization techniques:
1. **Chord Diagrams** – Used to represent relationships between different entities.
2. **Line Charts from CSV Data** – Learn how to process and visualize data stored in a `.csv` file.

### Lab 9 Contents
- **STATS401_Lab9_D3_Part3.pdf**: Introduction to chord diagrams and line charts.
- **STATS 401 Lab 9 Exercise.pdf**: Exercise on creating meaningful datasets and adding features.
- **Completed Files**:
  - `chord.js` → Implements a **chord diagram** visualization.
  - `price.js` → Implements a **line chart** from a `.csv` dataset.
  - `price_data.csv` → Sample dataset for the line chart.

### Lab 9 Tasks
1. **Create a Chord Diagram**
   - Visualize relationships using an **n x n matrix**.
   - Customize arc colors and ribbon styles.
   - Implement `d3.chord()` and `d3.ribbon()`.

2. **Build a Line Chart from a CSV File**
   - Load data from a `.csv` file.
   - Use `d3.timeParse()` to process date values.
   - Implement `d3.line()` to plot the relationship.
   - Fix **cross-origin request issues** when loading local files.

3. **Exercise**
   - Find a **new dataset** and visualize it.
   - Implement at least **one unique feature** (axis labels, mean value lines, captions, etc.).

---

## Lab 10: Interactive Visualizations with D3.js

### Overview
This lab introduces **interactivity** in D3.js, allowing users to **zoom, pan, select, and drag** elements. The key techniques include:
- **Quadtrees** for efficient point selection.
- **Dragging** elements on an SVG canvas.
- **Brushing** to select data regions.
- **Zooming and panning** for better navigation.

### Lab 10 Contents
- **STATS_401_Lab_10_Tutorial_D3_part4.pdf**: Introduction to interactive D3.js elements.
- **Completed Files**:
  - `quadtree.js` → Implements **quadtree-based point selection**.
  - `dragging.js` → Adds **dragging behavior** to elements.
  - `brushing.js` → Implements **brushing interactions**.
  - `zoom.js` → Adds **zoom and pan functionality**.

### Lab 10 Tasks
1. **Quadtrees for Efficient Point Selection**
   - Use `d3.quadtree()` to locate the nearest data point.
   - Optimize point selection for scatter plots.

2. **Dragging Elements**
   - Implement `d3.drag()` to allow movement of circles or other shapes.
   - Maintain the **relative position** of dragged elements.

3. **Brushing for Data Selection**
   - Use `d3.brush()` to define selection regions.
   - Highlight selected data points.

4. **Zoom and Pan**
   - Implement `d3.zoom()` to enable **chart scaling**.
   - Adjust elements dynamically based on zoom level.

---

## Getting Started

### Running D3.js Visualizations
1. Open the respective HTML files (`index.html`, `quadtree.html`, etc.) in a browser.
2. Modify the **JavaScript** files (`chord.js`, `price.js`, etc.) to explore different visualization techniques.

### Running a Local Server for CSV Files
If loading `.csv` files, use Python’s built-in HTTP server to bypass **CORS restrictions**:
```bash
# Start a local server (Python 3)
python3 -m http.server 4000
```
Then, open the browser and navigate to:
```
http://localhost:4000
```

---

## Summary
| Lab | Topic | Key Concepts |
|---|---|---|
| **Lab 9** | Chord Diagrams & Line Charts | `d3.chord()`, `d3.line()`, CSV Processing |
| **Lab 10** | D3.js Interactions | Quadtrees, Dragging, Brushing, Zoom & Pan |

