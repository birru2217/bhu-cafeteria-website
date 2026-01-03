# BHU Student Cafeteria System (Web Application) ☕

Welcome to the official repository for the **BHU Student Cafeteria System**, a modern, offline-first, and server-connected web application designed to eliminate fraud and streamline meal services at Bule Hora University.

This project was built from the ground up to solve critical inefficiencies in the university's manual, paper-based system, especially during power outages. It provides a fast, reliable, and fair digital solution that can run on any device with a modern web browser, including laptops, tablets, and mobile phones.

---

## 🌟 About The Developer

This project was conceived and developed by **Biruk Tadesse**, a passionate and detail-oriented student from the **Computer Science and Engineering (CSE)** department.

> As a developer, I specialize in architecting and building practical, user-centric solutions to real-world problems. My expertise spans the full development lifecycle of **Web Applications, Mobile Applications, and Desktop Software**. This project is a testament to my ability to handle responsive front-end design (HTML/CSS), implement complex client-side logic (Vanilla JavaScript), and integrate with modern, scalable cloud backends like Google Firebase. I am driven by the challenge of turning complex requirements into simple, elegant, and highly functional software that makes a tangible impact.

---

## ✨ Core Features & In-Depth Look

This isn't just a simple logging app; it's a comprehensive system architected for resilience and multi-user efficiency.

### 🚀 **Real-time, Multi-Operator Synchronization**
The system is powered by **Google Firebase (Firestore)**. This allows multiple cafeteria operators to work simultaneously on different devices at various entry points.
- When an operator registers a student ID, the data is instantly sent to the central server.
- The server immediately checks if that ID has already been logged for the current meal session (Breakfast, Lunch, or Dinner).
- This makes it **impossible for a student to eat twice** by going to different registration lines. All devices are always in sync.

### 🔌 **100% Offline-First Functionality**
Understanding the reality of inconsistent power and internet, the app was built with a robust offline-first architecture.
- **Works Perfectly Without Internet:** The application remains fully functional even during complete network outages.
- **Automatic Data Sync:** All entries made while offline are securely saved on the device's local cache. The moment connectivity is restored, the application automatically and intelligently syncs all the offline data to the central server in the background.

### 🌍 **Full Multi-Language Support**
To ensure accessibility for all users, the interface provides complete and native support for three languages:
-   **English**
-   **Afaan Oromoo**
-   **አማርኛ (Amharic)**
Users can switch between languages at any time from the settings menu, and the entire interface, including all text and messages, will update instantly.

### 🎨 **Modern & Intuitive User Experience (UI/UX)**
The system was designed to be easy to learn and fast to operate.
-   **Dynamic Theming:** A beautiful **Dark Mode** and **Light Mode** can be toggled to ensure comfortable viewing in any lighting condition.
-   **Rich Feedback:** The app provides immediate feedback for every action. Successful entries are confirmed with a green message and a pleasant sound, while re-eating attempts trigger a red, shaking message accompanied by a distinct alert sound and a haptic **vibration** on mobile devices.
-   **Clean & Responsive Design:** The layout is clean, professional, and fully responsive, adapting perfectly to any screen size, from a large desktop monitor to a small mobile phone.

### ⚙️ **Advanced Settings & Controls**
A comprehensive side menu (☰) gives operators full control:
-   **Meal Session Selection:** Easily switch between **Breakfast, Lunch, and Dinner** databases.
-   **Year Lock:** Set a default year (e.g., `/16`) and lock it to speed up data entry.
-   **Data Management:** A "Clear All Data" function with a confirmation step provides a secure way to reset local settings.
-   **In-App Help & About:** Detailed information about the system and its usage is available directly within the app.

---

## 📸 Screenshots

*(Drag and drop your screenshot images into a GitHub Issue comment to get the URLs, then paste them here.)*

| Welcome Screen (with Snow Effect) | Session Selection |
| :---: | :---: |
| ![Welcome Screen]([YOUR_SCREENSHOT_URL_HERE_1]) | ![Session Select]([YOUR_SCREENSHOT_URL_HERE_2]) |

| Main Entry Screen (Light Mode) | Main Entry Screen (Dark Mode) |
| :---: | :---: |
| ![Main Light]([YOUR_SCREENSHOT_URL_HERE_3]) | ![Main Dark]([YOUR_SCREENSHOT_URL_HERE_4]) |

| Side Menu & Re-eating Log |
| :---: |
| ![Side Menu & Log]([YOUR_SCREENSHOT_URL_HERE_5]) |

---

## 🛠️ Technology Stack

This project was built using a modern, efficient, and scalable technology stack:

-   **Frontend:**
    -   **HTML5:** For the semantic structure of the application.
    -   **CSS3:** For all styling, including responsive design (Media Queries) and dynamic theming (CSS Variables).
    -   **Vanilla JavaScript (ES6+):** For all client-side logic, DOM manipulation, and interaction with the backend. No frameworks were used, ensuring the app is lightweight and fast.

-   **Backend & Real-time Database:**
    -   **Google Firebase (Firestore):** Used as the central NoSQL database for real-time data synchronization and offline data persistence.

-   **Version Control & Hosting:**
    -   **Git & GitHub:** For source code management and project documentation.

---

## 🚀 Installation & Setup Guide (How to Run on a New Computer)

Follow these steps to get the web application running on your local machine.

1.  **Prerequisites:**
    -   A modern web browser (like Chrome, Firefox).
    -   A code editor (like VS Code).

2.  **Clone the Repository:**
    Open your terminal or command prompt and run the following command:
    ```sh
    git clone https://github.com/birru2217/bhu-cafeteria-website.git
    ```

3.  **Navigate to the Project Folder:**
    ```sh
    cd bhu-cafeteria-website
    ```

4.  **Run the Application:**
    Simply open the **`index.html`** file in your web browser. That's it! The application is fully client-side and requires no additional build steps to run.

---

## 📱 Android Application

A dedicated Android version of this project, which wraps this web application in a `WebView`, is also available. This provides a more native experience for mobile users.

➡️ **[View the Android App Repository Here](https://github.com/birru2217/bhu-cafeteria-android-app)** *(This will be the link to your second repository once you create it)*

---
