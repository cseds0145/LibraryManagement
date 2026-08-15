# 🏛️ The Grand Athenaeum • 3D Vintage Library Management System

An interactive, immersive 3D vintage library web application featuring multi-genre wooden stacks, an interactive dual-page open-book reader, synthesized tactile sound effects, and 80+ complete public domain manuscripts.

---

## ✨ Features Overview

### 1. 🗄️ 3D Realistic Wooden Bookshelves
- **3-Tier Illuminated Cabinet**: Volumes organized on illuminated mahogany shelves with wooden beams and brass plaques.
- **Dynamic 3D Hover Physics**: Hovering over any volume smoothly lifts and tilts the book in 3D space (`perspective: 1400px`, `transform-style: preserve-3d`).
- **Authentic Bindings**: Procedurally generated leather bindings (Burgundy Morocco, Walnut Calfskin, Midnight Navy, Forest Green Levant, Obsidian Pigskin, Cognac Gold-Tooled) with gold foil ribs and silk bookmark ribbons.
- **Availability Status Indicators**: Real-time LED status stones on book spines (`Available`, `In Private Study`, `Out of Stock`).

### 2. 📖 Interactive 3D Dual-Page Open Book Reader
- **Two-Page Aged Parchment Spread**: Authentic parchment paper with center spine crease shadow, classical serif typography, and decorative drop capitals.
- **Full Chapter Reading**: Full-length chapters for classic masterpieces (including Letters I–IV and Chapters I, IV, V, X, XXIV of Mary Shelley’s *Frankenstein*).
- **Navigation & Controls**:
  - Chapter selector dropdown.
  - Page-turn buttons (`⮜ Previous Pages` / `Turn to Next Pages ⮞`).
  - Keyboard navigation (`←` / `→` arrow keys, `PageUp` / `PageDown`, `Esc` to close).
  - Font size toggles (`A-`, `A`, `A+`).
- **📥 Offline eBook Downloader**: One-click exporter that generates and downloads complete plain text (`.txt`) manuscripts.
- **🌐 Public Domain Reference**: Direct links to official Project Gutenberg and Comic Book Plus archives.

### 3. 📚 80+ Curated Public Domain Volumes Across 4 Genres
- **🧪 Science Fiction (20 Books)**: *Frankenstein*, *The Time Machine*, *The War of the Worlds*, *Twenty Thousand Leagues Under the Sea*, *A Journey to the Centre of the Earth*, *Dr. Jekyll & Mr. Hyde*, *A Princess of Mars*, etc.
- **🎭 Comedy & Satire (20 Books)**: *The Importance of Being Earnest*, *Three Men in a Boat*, *Right Ho, Jeeves*, *The Innocents Abroad*, *A Connecticut Yankee in King Arthur's Court*, *The Pickwick Papers*, *Tartuffe*, etc.
- **🎓 Education & Science (20 Books)**: Plato's *The Republic*, *The Autobiography of Benjamin Franklin*, *Democracy and Education*, *The Montessori Method*, *Calculus Made Easy*, *The Principles of Psychology*, *Self-Reliance*, *Meditations*, etc.
- **📚 Golden Age Comics & Graphic Serials (20 Books)**: *Action Comics*, *Detective Comics*, *Planet Comics*, *Plastic Man*, *The Spirit*, *Captain Flash*, *Blue Beetle*, *Doll Man*, *Stardust the Super Wizard*, etc.

### 4. 🔑 Library Accession Desk (Authentication & Registration)
- **Member Sign-In**: Secure login for Student Scholars and Faculty Curators.
- **Library Card Registration**: Issue new circulation cards with Scholar Full Name, Role, Username, and Password (stored in `localStorage`).
- **⚡ 1-Click Instant Scholar Entry**: Quick-preset buttons (`[ 🎓 Eleanor (Student) ]` and `[ 🏛️ Dr. Finch (Faculty) ]`) for instant one-click testing.

### 5. 🕯️ Scholar’s Study Desk & Faculty Curator's Ledger
- **Scholar Study Desk**: Dedicated candlelight reading desk displaying volumes currently checked out by the user in 3D.
- **Loan Requisitions**: Request permissions for out-of-stock or restricted volumes.
- **Curator’s Deaccession & Accession Register**: Faculty tools to bind and shelf new volumes or deaccession existing catalog items.

### 6. 🔊 Synthesized Tactile Sound Engine
- Built with the **Web Audio API** (zero external MP3 files needed).
- Authentic acoustic synthesis:
  - Gentle book slide friction on wood when hovering over spines.
  - Heavy ink stamp thud when issuing or returning books.
  - Page rustle on page turns.
  - Brass latch clicks on button interactions.
  - Toggle audio on/off anytime from the curator bar.

---

## 📂 Project Structure

```
LibraryManagement1/
├── index.html       # Semantic layout: Accession Desk, 3D Shelves, Inspection & Reader Modals
├── styles.css       # Vintage design system, 3D perspective transforms & parchment styling
├── books-data.js    # 80+ curated public domain books dataset with multi-chapter texts
├── app.js           # Core state machine, audio synthesizer, pagination engine & downloaders
└── README.md        # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Option 1: Direct Browser Launch (No Installation Required)
Simply double-click [`index.html`](file:///C:/Users/ansh6/.gemini/antigravity/scratch/LibraryManagement1/index.html) or right-click and choose **Open with Browser** (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Option 2: Run with a Local Static Server
If you prefer running via a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx serve)
npx -y serve .
```
Then navigate to `http://localhost:8000` in your web browser.

---

## 📜 Default Scholar Credentials

| Role | Username | Password | Scholar Name | Initial Checked Out Volumes |
| :--- | :--- | :--- | :--- | :--- |
| **🎓 Student Scholar** | `student1` | `student123` | Eleanor Vance | *Frankenstein* & *The Importance of Being Earnest* |
| **🏛️ Faculty Curator** | `faculty1` | `faculty123` | Archivist Dr. Alistair Finch | Access to Master Deaccession Register & New Tomes |

*You can also click **"Register New Library Card"** to create a custom account at any time.*

---

## ⌨️ Keyboard Shortcuts (Open Book Reader)

| Key | Action |
| :--- | :--- |
| **`→` (Right Arrow)** or **`PageDown`** | Turn to next page spread |
| **`←` (Left Arrow)** or **`PageUp`** | Turn to previous page spread |
| **`Escape`** | Close reader or book inspection modal |

---

## 🌐 Public Domain Archives Attribution
All book texts, classic excerpts, and comic scripts in this application are in the public domain and sourced in accordance with open preservation initiatives:
- [Project Gutenberg](https://www.gutenberg.org/) — Free eBooks & classical literature.
- [Comic Book Plus](https://comicbookplus.com/) — Legal Golden Age and Silver Age public domain comic book archive.

---

## 📜 License
This project is open-source and free to use for personal, academic, and educational purposes.
