# Week 4: Data Visualization with D3.js

This folder contains lab exercises for **Week 4** of **STATS 401: Data Acquisition & Visualization Seminar**. This week focuses on **D3.js**, a powerful JavaScript library for data visualization.

---

## Lab 7: Introduction to D3.js

### **Overview**
D3.js (Data-Driven Documents) is a JavaScript library used to create dynamic and interactive data visualizations using **HTML, CSS, and SVG**. In this lab, we learn:
- The fundamentals of **D3.js**
- How to create **SVG shapes**
- How to bind **data to visual elements**

### **Lab 7 Contents**
- **Lab7_D3_Intro.pdf**: Introduction to D3.js and SVG elements
- **Lab7_Exercise.pdf**: Exercises to practice visualization concepts
- **Completed Files**:
  - `index.html` → HTML file for the visualization
  - `index.js` → JavaScript file containing D3.js code
  - `styles.css` → CSS file for styling
  - `d3.v7.js` → D3.js library file

### **Lab 7 Tasks**
1. **Set Up D3.js Project**
   - Create an HTML file (`index.html`)
   - Link **D3.js**, **CSS**, and **JavaScript**
   - Structure the project folder

2. **Visualize Data Using SVG**
   - Create **rectangles** for a **bar chart**
   - Create **circles** to visualize temperature data
   - Create **lines** to represent numerical values

3. **Exercises**
   - Add **text labels** to bar charts
   - **Creative Challenge**: Design a meaningful SVG shape using D3.js

---

## Lab 8: Advanced D3.js Visualizations

### **Overview**
Lab 8 expands on Lab 7 by introducing **paths, area charts, and axes** in D3.js. By the end of this lab, you will be able to:
- Create **paths and custom shapes**
- Generate **area charts** from data
- Use **D3.js axes** for better data representation

### **Lab 8 Contents**
- **Lab8_Tutorial.pdf**: Instructions for creating paths, area charts, and axes
- **Lab8_Exercise.docx**: Additional exercises to reinforce learning
- **Completed Files**:
  - `interpolate.js` → Script for drawing paths
  - `area.js` → Script for area charts
  - `axes.js` → Script for axes
  - `task2.html`, `task3.html`, `task4.html` → HTML files for different tasks

### **Lab 8 Tasks**
1. **Create SVG Paths**
   - Draw custom paths using **D3 path generators**
   - Experiment with **curved and straight lines**

2. **Build an Area Chart**
   - Plot **monthly data points** using an area chart
   - Adjust **fill color and opacity**

3. **Use Groups for Complex Shapes**
   - Group multiple area charts together
   - Implement **different curve styles**

4. **Add Axes to Visualizations**
   - Learn how to use `d3.axisBottom`, `d3.axisLeft`
   - Format **tick labels and scales**

5. **Exercises**
   - Modify **stroke and fill** properties for better styling
   - Recreate an **area chart** with axes using sample data

---

## Getting Started

### **Run D3.js Visualizations**
1. Open `index.html` (for Lab 7) or `task2.html` (for Lab 8) in a browser.
2. Modify JavaScript (`index.js`, `area.js`, `axes.js`) to see the effects.

### **Running a Live Server**
For real-time updates, use **VS Code Live Server**:
```bash
# Install Live Server (if not installed)
npm install -g live-server

# Run Live Server
live-server
```

---

## Summary
| Lab | Topic | Key Concepts |
|---|---|---|
| **Lab 7** | Intro to D3.js | SVG, Shapes, Data Binding |
| **Lab 8** | Advanced D3.js | Paths, Area Charts, Axes |
