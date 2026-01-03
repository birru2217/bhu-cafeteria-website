# BHU Student Cafeteria System ☕

**A modern, offline-first, and server-connected solution designed to eliminate fraud and streamline meal services at Bule Hora University.**

This project transitions the university's manual, paper-based system into a fast, reliable, and fair digital application that works seamlessly on any Android device, even during power and internet outages.

---

## 🌟 About The Developer

This project was conceived and developed by **Biruk Tadesse**, a passionate and detail-oriented **Computer Science and Engineering (CSE) student**.

> As a developer, I specialize in creating practical, user-centric solutions to real-world problems. My expertise lies in both **web and mobile application development**, with a strong focus on building responsive, efficient, and robust systems from the ground up. This project showcases my ability to handle front-end design (HTML/CSS), complex client-side logic (JavaScript), and backend integration with modern cloud services like Firebase. I am driven by the challenge of turning complex requirements into simple, elegant, and functional software.

---

## ✨ Key Features

This isn't just a simple logging app; it's a comprehensive system built for reliability and efficiency.

-   **🚀 Real-time Synchronization:** Powered by **Google Firebase (Firestore)**, multiple operators can work on different devices simultaneously. All data is instantly synced to a central server, making it **impossible for a student to eat twice** at different entry points.
-   **🔌 100% Offline-First Functionality:** The app remains fully operational during network outages. All entries are securely saved on the device and automatically synchronized with the server the moment connectivity is restored.
-   **🌍 Multi-Language Support:** A fully translated interface provides native support for **English, Afaan Oromoo, and Amharic**.
-   **🎨 Modern & Responsive UI/UX:**
    -   **Dynamic Theming:** Switch between **Light Mode** and **Dark Mode** for comfortable viewing in any environment.
    -   **Auditory & Haptic Feedback:** The app provides sound and vibration alerts for successful entries and re-eating attempts, ensuring operators are always aware of the status.
    -   **Intuitive Design:** Features emoji-rich buttons and a clean layout that is fully responsive and works beautifully on any mobile screen size.
-   **🔧 Cross-Platform & Maintainable:** The core is a powerful web application (`HTML`, `CSS`, `JavaScript`) wrapped in an Android `WebView`, making future updates and maintenance incredibly simple.

---

## 📸 Screenshots

*(Here you will add your screenshots. See the guide below on how to get the URLs.)*

| Welcome & Session Select | Main Entry Screen |
| :---: | :---: |
| ![Welcome Screen]([YOUR_SCREENSHOT_URL_HERE_1]) | ![Main Screen]([YOUR_SCREENSHOT_URL_HERE_2]) |

| Dark Mode & Side Menu | Re-eating Attempts Log |
| :---: | :---: |
| ![Dark Mode]([YOUR_SCREENSHOT_URL_HERE_3]) | ![Attempts Log]([YOUR_SCREENSHOT_URL_HERE_4]) |

---

## 🛠️ Technology Stack

This project was built using a modern and efficient technology stack:

*   **Frontend:** HTML5, CSS3 (with CSS Variables for theming), Vanilla JavaScript (ES6+)
*   **Backend & Real-time Database:** Google Firebase (Firestore)
*   **Android Wrapper:** Android Studio (Java & WebView)
*   **Version Control:** Git & GitHub

---

## 🚀 Getting Started

There are two ways to use this project: as a web application or as an Android app.

### 1. Running the Web Application

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/birru2217/bhu-cafeteria-website.git
    ```
2.  **Navigate to the folder:**
    ```sh
    cd bhu-cafeteria-website
    ```
3.  **Open `index.html`** in your favorite web browser. That's it!

### 2. Building the Android App (`.apk`)

1.  **Prerequisites:** You must have [Android Studio](https://developer.android.com/studio) installed.
2.  **Clone the `android-app` repository** (or download the ZIP).
3.  **Open the project** in Android Studio.
4.  Let Gradle sync all the dependencies.
5.  Go to **Build > Generate Signed Bundle / APK...** and follow the steps to create a distributable `app-release.apk` file.

---
