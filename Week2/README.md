# Week 2: Web Development & Web Scraping

This folder contains lab exercises for **Week 2** of **STATS 401: Data Acquisition & Visualization Seminar**. The focus of these labs is to introduce **basic web development concepts** and **web scraping techniques using Python**.

---

## Lab 3: Introduction to Web Development

### **Overview**
Lab 3 introduces the **fundamentals of web development**, covering:
- **HTML**: Structure and content of webpages
- **CSS**: Styling and design for webpages
- **JavaScript**: Adding interactivity to webpages

Since **Lab 4 focuses on web scraping**, it is crucial to understand **HTML structure** first, making Lab 3 an essential prerequisite.

### **Lab 3 Contents**
- **Lab3_Web_Intro.pdf**: Tutorial on HTML, CSS, and JavaScript basics
- **Lab3_Exercises.pdf**: Exercises to apply concepts
- **Completed Files**:
  - `exercise1.html` → HTML file for a simple webpage
  - `exercise3.js` → JavaScript file for dynamic content
  - `styles.css` → CSS file for styling

### **Lab 3 Tasks**
1. **Create an HTML page (`exercise1.html`)**
   - Title: "List of My Favorite Things"
   - Header: "Favorite Things"
   - Paragraph description
   - Ordered list with at least 3 items
   - "Confirm" button

2. **Link CSS to HTML**
   - Modify styles using an external CSS file (`styles.css`)

3. **JavaScript Exercise (`exercise3.js`)**
   - Create an array with `["Mario", "Rosalina", "Luigi", "Bowser"]`
   - Use a loop (`for` or `while`) to display each name in a dialog box

---

## Lab 4: Web Scraping with BeautifulSoup

### **Overview**
Lab 4 introduces **web scraping** using `BeautifulSoup`, a powerful Python library for extracting data from HTML pages.

### **Lab 4 Contents**
- **Lab4_BeautifulSoup_Tutorial.ipynb**: Jupyter Notebook with a step-by-step tutorial on web scraping techniques.

### **Lab 4 Tasks**
1. **Load and Parse an HTML Page**
   - Use `BeautifulSoup` to extract data from a sample webpage

2. **Extract Specific Elements**
   - Identify and extract:
     - Titles (`<h1>, <h2>, <h3>`)
     - Paragraphs (`<p>`)
     - Links (`<a href>`)

3. **Find Elements with CSS Selectors**
   - Use `find()` and `find_all()` functions to retrieve content dynamically

4. **Web Scraping Real-World Data**
   - Extract and process data from an online source

---

## Getting Started

### **Run HTML & JavaScript (Lab 3)**
1. Open the `exercise1.html` file in a browser.
2. Modify the **CSS** and **JavaScript** files to see how changes affect the webpage.

### **Run Web Scraping Code (Lab 4)**
1. Open `Lab4_BeautifulSoup_Tutorial.ipynb` in **Jupyter Notebook**.
2. Run the cells to execute the web scraping tasks.

```bash
# Install BeautifulSoup if not already installed
pip install beautifulsoup4 requests

# Run the script in Python
python web_scraper.py
```

---

## Summary
| Lab | Topic | Key Concepts |
|---|---|---|
| **Lab 3** | Web Development | HTML, CSS, JavaScript |
| **Lab 4** | Web Scraping | BeautifulSoup, HTML Parsing, Data Extraction |

