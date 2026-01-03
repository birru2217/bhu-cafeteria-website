# BHU Student Cafeteria System ☕

**A modern, offline-first, and server-connected solution designed to eliminate fraud and streamline meal services at Bule Hora University.**

This project transitions the university's manual, paper-based system into a fast, reliable, and fair digital application. It works seamlessly on any Android device and boasts impressive features.

---

## 🌟 About the Developer

This project was conceived and developed by **Biruk Tadesse**, a passionate and detail-oriented **Computer Science and Engineering (CSE) student**.

> As a developer, I specialize in creating practical, user-centric solutions to real-world problems. My expertise lies in both **web and mobile application development**, with a strong focus on building responsive, efficient, and robust systems from the ground up. This project showcases my ability to handle front-end design (HTML/CSS), complex client-side logic (JavaScript), and backend integration with modern cloud services like Firebase. I am driven by the challenge of turning complex requirements into simple, elegant, and functional software.

---

## ✨ Key Features

This isn't just a simple logging app; it's a comprehensive system built for reliability and efficiency.

-   **🚀 Real-time Synchronization:** Powered by **Google Firebase (Firestore)**, multiple operators can work on different devices simultaneously. All data is instantly synced to a central server, making it **impossible for a student to eat twice** at different entry points.
-   **🔌 100% Offline-First Functionality:** The app remains fully operational during network outages. All entries are securely saved on the device and automatically synchronized with the server the moment connectivity is restored.
-   **🌍 Multi-Language Support:** A fully translated interface provides native support for **English, Afaan Oromoo, and Amharic**.
-   **🔒 Secure ID Entry:** Student IDs are entered in a strict `0000/XX` format, with the year optionally lockable for consistent data entry.
-   **🔔 Visual & Auditory Alerts:** The app provides clear visual feedback (green for success, red with vibration for errors) and audible alerts for successful entries and re-eating attempts.
-   **🎨 Modern & Responsive UI/UX:** Features a clean, intuitive interface that adapts beautifully to any screen size.
-   **🔄 Easy Data Management:** Local data is persistent and syncs automatically. A simple menu allows for language switching, time setting, and clearing local data.

---

## 📸 Screenshots

*(Replace the placeholder URLs with the actual URLs of your screenshots hosted on GitHub.)*

| Welcome & Session Select | Main Entry Screen |
| :---: | :---: |
| ![Welcome Screen]([YOUR_SCREENSHOT_URL_FOR_WELCOME_SCREEN]) | ![Main Entry Screen]([YOUR_SCREENSHOT_URL_FOR_MAIN_SCREEN]) |

| Dark Mode & Side Menu | Re-eating Attempts Log |
| :---: | :---: |
| ![Dark Mode]([YOUR_SCREENSHOT_URL_FOR_DARK_MODE]) | ![Attempts Log]([YOUR_SCREENSHOT_URL_FOR_ATTEMPTS_LOG]) |

---

## 🛠️ Technology Stack

This project was built using a modern and efficient technology stack:

*   **Web Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Android App:** Java (Android Studio) with WebView integration
*   **Backend & Real-time Database:** Google Firebase (Firestore, Authentication)
*   **Version Control:** Git & GitHub

---

## 🚀 Getting Started

### 1. Running the Web Application

The core of the application is a web app. You can run this directly in any modern browser.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-github-username/bhu-cafeteria-website.git
    ```
    *(Replace `your-github-username` with your actual GitHub username.)*
2.  **Navigate to the project folder:**
    ```bash
    cd bhu-cafeteria-website
    ```
3.  **Open `index.html`** in your web browser.

### 2. Building the Android App (`.apk`)

For a native mobile experience, you can build an Android app.

1.  **Prerequisites:** You must have [Android Studio](https://developer.android.com/studio) installed.
2.  **Clone the Android app repository:**
    ```bash
    git clone https://github.com/your-github-username/bhu-cafeteria-android-app.git
    ```
    *(Replace `your-github-username` with your actual GitHub username. If you haven't created a separate repo for the Android app, you can clone the main one and find the Android project within it.)*
3.  **Open the project** in Android Studio.
4.  **Add Firebase SDK:** Follow the instructions in `README.md` and the `script.js` file to integrate your `google-services.json` and add the necessary Firebase dependencies in your `build.gradle` files.
5.  **Build the Signed APK:**
    *   In Android Studio, go to **Build > Generate Signed Bundle / APK...**
    *   Select **APK** and click **Next**.
    *   In the "Generate Signed APK" screen, make sure your **Keystore** is selected (or create a new one).
    *   **Crucially, change the Build Variant from `debug` to `release`.**
    *   Click **Finish**.
6.  **Install the APK:** Find the `app-release.apk` file in your project's `app/build/outputs/apk/release/` folder and install it on your Android device via USB, Bluetooth, or any file-sharing method.

---

## 🔗 Links

Here are direct links to the developer's profiles and project resources:

-   **YouTube:** [Jomore Tech](https://www.youtube.com/@jomoreekoo)
-   **Facebook:** [Biruk Tadesse](https://www.facebook.com/profile.php?id=61564927622966)
-   **Telegram (Owner):** [@Brex2217](https://t.me/Brex2217)
-   **Telegram (Group):** [BHU Students](https://t.me/BHU_Info_col_9)

---

### **Firebase Setup Summary**

To ensure real-time data synchronization and offline capabilities, follow these steps in your Firebase project:

1.  **Create Firestore Database:**
    *   Go to Firebase Console -> Your Project -> Firestore Database.
    *   Click **Create database**.
    *   Select **"Start in test mode"**.
    *   Choose a **location** (e.g., `eur3 (Europe)`) and click **Enable**.
2.  **Configure Security Rules:**
    *   In Firestore, go to the **Rules** tab.
    *   Replace the existing rules with the following to allow read/write access (for development):
        ```
        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /{document=**} {
              allow read, write: if true;
            }
          }
        }
        ```
    *   Click **Publish**.
3.  **Add Web App SDK:**
    *   In Firebase Project Settings, scroll down to "Your apps".
    *   Click the **Android logo** (🤖) to add your Android app.
    *   Enter your **Package name** (`com.example.bhucafe`).
    *   Enter your **App nickname** (`Bhu Cafe`).
    *   Click **Register app**.
    *   **Download the `google-services.json` file** and place it in your project's `app/` directory.
    *   **Add Firebase SDKs in `build.gradle.kts (Project: BhuCafe)` and `build.gradle.kts (Module: app)`:**
        *   Ensure the `com.google.gms.google-services` plugin is applied.
        *   Add the necessary Firebase libraries (`firebase-analytics`, `firebase-auth`, `firebase-firestore`) in your app-level `build.gradle.kts` file.
4.  **Test:** Run your application on an emulator or device.

This detailed setup will ensure your application connects to Firebase correctly, enabling real-time data handling and reliable offline persistence.
