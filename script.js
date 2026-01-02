document.addEventListener('DOMContentLoaded', () => {
    // --- DICTIONARY (With more complete translations) ---
    const translations = {
        en: {
            welcome_part1: "Welcome to", welcome_part2: "BHU", welcome_part3: "Students",
            select_session_title: "Select Meal Session",
            title_part1: "BHU", title_part2: "Student", title_part3: "Cafeteria System",
            nav_home: "Home", nav_dashboard: "Dashboard", nav_reattempts: "Attempts",
            getin_btn: "Get-in",
            settings_title: "Settings", language_title: "Language", timer_title: "Set Time Manually", about_btn: "About",
            help_btn: "Help", contacts_btn: "Contacts",
            restart_btn: "Clear All Data", dark_mode: "Dark Mode",
            cancel_btn: "Cancel", confirm_restart_btn: "Yes, Clear Data",
            restart_warning_title: "Final Warning!", restart_warning_text: "Are you sure? All saved data for all sessions will be permanently deleted.",
            about_modal_title: "About the System", about_background_title: "Project Background",
            about_background_content: "This system was created to solve a critical problem at the Bule Hora University cafeteria: resource and time wastage during power outages. The previous manual, paper-based system led to unauthorized repeat meals and long queues. This digital solution ensures fairness, speed, and accuracy, even without electricity or internet.",
            about_mission_title: "Our Mission",
            about_mission_content: "To provide a fair, efficient, and modern solution to eliminate food wastage and reduce waiting times at the Bule Hora University cafeteria.",
            about_p1: "Developed By:",
            help_title: "How to Use the System",
            help_section1_title: "1. Getting Started", help_section1_content: "When the application first opens, click 'Enter Cafeteria System' to proceed to the meal selection screen.",
            help_section2_title: "2. Daily Operation",
            help_step1: "<strong>Select Session:</strong> Choose Breakfast, Lunch, or Dinner from the selection screen.",
            help_step2: "<strong>Set Year (Optional):</strong> Type a 2-digit year (e.g., 16). Click the lock icon (🔓) to fix it (🔒) for all subsequent entries. Click again to unlock.",
            help_step3: "<strong>Enter Student ID:</strong> Type the student's 4-digit ID and click 'Get-in'.",
            help_step4: "<strong>Check Status:</strong> A green message means success. A red, vibrating message means the student has already eaten.",
            help_step5: "<strong>View Recent Entries:</strong> The last 10 successful entries appear at the bottom for quick verification.",
            help_section3_title: "3. Using the Side Menu (☰)",
            help_menu_dark: "<strong>Dark Mode:</strong> Toggle for a comfortable view in low light.",
            help_menu_lang: "<strong>Language:</strong> Switch between English, Afaan Oromoo, and Amharic.",
            help_menu_clear: "<strong>Clear All Data:</strong> This will completely erase all saved records. Use with caution.",
            help_menu_back: "<strong>Back Arrow (↩️):</strong> Use the back arrow in the top-right to return to the meal selection screen without losing data.",
            contacts_title: "Contact the Developers",
            youtube_owner: "Brex Tech", facebook_owner: "BT", telegram_owner: "Brex2217", telegram_group: "BHU Students",
            reattempt_list_title: "Re-eating Attempt Log", id_header: "Student ID", time_header: "Time of Attempt", no_attempts: "No re-eating attempts recorded yet.",
            recent_entries_title: "Recent Successful Entries",
            session_breakfast: "Breakfast", session_lunch: "Lunch", session_dinner: "Dinner"
        },
        om: {
            welcome_part1: "Baga Nagaan", welcome_part2: "GARA BHU", welcome_part3: "Dhuftan",
            select_session_title: "Yeroo Nyaataa Filadhu",
            title_part1: "sirnna Kaaffeeteeriyaa", title_part2: "Barattoota", title_part3: "UBHU",
            nav_home: "Jalqaba", nav_dashboard: "Daashboordii", nav_reattempts: "Yaaliwwan irra deebii",
            getin_btn: "Seeni", settings_title: "Qindaa'ina", language_title: "Afaan", about_btn: "Waa'ee",
            help_btn: "Gargaarsa", contacts_btn: "Qunnamtii",
            restart_btn: "Hunda Haqaa", dark_mode: "Bifa Dukkanaa'aa",
            cancel_btn: "Haqi", confirm_restart_btn: "Eeyyee, Haqi",
            restart_warning_title: "Akeekkachiisa!", restart_warning_text: "Sirnicha irra deebiin jalqabsiisuu barbaaddaa? Odeeffannoon hundi ni bada.",
            about_modal_title: "Waa'ee Sirna Kanaa", about_background_title: "Ka'umsa Pirojektii",
            about_background_content: "Sirni kun rakkoo cimaa kaaffeeteeriyaa Yuunivarsiitii Bulee Horaa keessatti mul'atu furuuf hojjetame: yeroo ibsaan badu qabeenyi fi yeroon qisaasa'a. Sirni duraanii kan harkaan waraqaa irratti galmeessu, irra deddeebiin nyaachuu fi hiriira dheeraaf sababa ture. Furmaanni dijitaalaa kun haqummaa, saffina, fi sirrummaa ni mirkaneessa, ibsaa fi intarneetii malee illee.",
            about_mission_title: "Kaayyoo Keenya",
            about_mission_content: "Qisaasa'ama nyaataa hir'isuufi yeroo eeggannaa gabaabsuun furmaata ammayyaa, saffisaa, fi haqa qabeessa ta'e kennuu.",
            about_p1: "Kan Hojjetame :",
            help_title: "Akkaataa Itti Fayyadamaa",
            help_section1_title: "1. Akkamitti Jalqabda", help_section1_content: "Yeroo jalqabaaf banamu, 'Gara Sirnaatti Seeni' cuqaasuun gara filannoo yeroo nyaataatti darbi.",
            help_section2_title: "2. Hojii Guyyaa Guyyaa",
            help_step1: "<strong>Yeroo Filadhu:</strong> Ciree, Laaqana, yookiin Irbaata filadhu.",
            help_step2: "<strong>Waggaa Qindeeffadhu (Dirqama Miti):</strong> Lakkoofsa waggaa (/16) galchi. Mallattoo qufulaa (🔓) cuqaasuun (🔒) cufi.",
            help_step3: "<strong>ID Galchi:</strong> ID barataa dijiitii-4 galchiitii 'Seeni' cuqaasi.",
            help_step4: "<strong>Haala Ilaali:</strong> Ergaan magariisaan milkaa'ina agarsiisa. Inni diimaan barataan duraan nyaachuu isaa agarsiisa.",
            help_step5: "<strong>Galmeewwan Dhihoo Ilaali:</strong> Galmeewwan 10'n dhumaa gadiitti mul'atu.",
            help_section3_title: "3. Meenuu Cinaa (☰) Fayyadamuu",
            help_menu_dark: "<strong>Bifa Dukkanaa'aa:</strong> Ifti yoo xiqqaatu fayyadami.",
            help_menu_lang: "<strong>Afaan:</strong> Afaanota sadan gidduutti jijjiiri.",
            help_menu_clear: "<strong>Hunda Haqaa:</strong> Odeeffannoo hunda balleessa. Of eeggannoon fayyadami.",
            help_menu_back: "<strong>Mallattoo Deebii (↩️):</strong> Odeeffannoo osoo hin balleessin gara filannoo yeroo nyaataatti deebi'i.",
            contacts_title: "Warra Hojjetan Qunnami",
            reattempt_list_title: "Galmee Yaalii Irra Deebii", id_header: "ID Barataa", time_header: "Yeroo", no_attempts: "Yaaliin tokkollee hin galmoofne.",
            recent_entries_title: "Galmeewwan Dhiyeenyaa Milkaa'an",
            session_breakfast: "Ciree", session_lunch: "Laaqana", session_dinner: "Irbaata"
        },
        am: {
            welcome_part1: "እንኳን ወደ", welcome_part2: "ቡሌ ሆራ", welcome_part3: "በደህና መጡ",
            select_session_title: "የምግብ ሰዓቱን ይምረጡ",
            title_part1: "ቡሌ ሆራ", title_part2: "ተማሪዎች", title_part3: "ካፊቴሪያ",
            nav_home: "ዋና ገጽ", nav_dashboard: "ዳሽቦርድ", nav_reattempts: "ሙከራዎች",
            getin_btn: "ግባ", settings_title: "ቅንብሮች", language_title: "ቋንቋ", about_btn: "ስለ",
            help_btn: "እገዛ", contacts_btn: "እውቂያዎች",
            restart_btn: "ሁሉንም ዳታ አጥፋ", dark_mode: "ጨለማ ሁነታ",
            cancel_btn: "ሰርዝ", confirm_restart_btn: "አዎ, አጥፋ",
            restart_warning_title: "ማስጠንቀቂያ!", restart_warning_text: "ስርዓቱን እንደገና ማስጀመር ይፈልጋሉ? ሁሉም መረጃ ይጠፋል።",
            about_modal_title: "ስለ ስርዓቱ", about_background_title: "የፕሮጀክቱ ዳራ",
            about_background_content: "ይህ ስርዓት የተፈጠረው በቡሌ ሆራ ዩኒቨርሲቲ ካፍቴሪያ ውስጥ ያለውን የሀብት እና የጊዜ ብክነት ለመፍታት ነው፤ በተለይም የኤሌክትሪክ ኃይል ሲቋረጥ። የቀድሞው የወረቀት ስርዓት ያለፈቃድ ተደጋጋሚ ምግቦችን እና ረጅም ሰልፎችን አስከትሏል። ይህ ዲጂታል መፍትሄ ያለ ኤሌክትሪክ እና ኢንተርኔት እንኳን ፍትሃዊነትን፣ ፍጥነትን እና ትክክለኛነትን ያረጋግጣል።",
            about_mission_title: "ተልዕኳችን",
            about_mission_content: "የምግብ ብክነትን ለማስወገድ እና የጥበቃ ጊዜን ለመቀነስ ፍትሃዊ፣ ቀልጣፋ እና ዘመናዊ መፍትሄ መስጠት።",
            about_p1: "የተሰራው በ፡",
            help_title: "የአጠቃቀም መመሪያ",
            help_section1_title: "1. አጀማመር", help_section1_content: "አፕሊኬሽኑ ሲከፈት 'ወደ ካፊቴሪያ ስርዓት ይግቡ' የሚለውን ጠቅ በማድረግ ወደ የምግብ ሰዓት ምርጫ ይሂዱ።",
            help_section2_title: "2. የዕለት ተዕለት አጠቃቀም",
            help_step1: "<strong>ሰዓት ይምረጡ:</strong> ቁርስ፣ ምሳ ወይም እራት ይምረጡ።",
            help_step2: "<strong>ዓመትን ያዘጋጁ (አስገዳጅ ያልሆነ):</strong> የዓመቱን ቁጥር (/16) ያስገቡ። የመቆለፊያ ምልክቱን (🔓) ጠቅ በማድረግ (🔒) ይቆልፉ።",
            help_step3: "<strong>መለያ ያስገቡ:</strong> ባለ 4-አሃዝ የተማሪ መለያ ቁጥር ያስገቡ እና 'ግባ' የሚለውን ይጫኑ።",
            help_step4: "<strong>ሁኔታን ይመልከቱ:</strong> አረንጓዴ መልእክት ስኬትን ያሳያል። ቀይ እና የሚንቀጠቀጥ መልእክት ተማሪው አስቀድሞ መብላቱን ያሳያል።",
            help_step5: "<strong>የቅርብ ጊዜ ምዝገባዎችን ይመልከቱ:</strong> የመጨረሻዎቹ 10 ምዝገባዎች ከታች ይታያሉ።",
            help_section3_title: "3. የጎን ምናሌ (☰) አጠቃቀም",
            help_menu_dark: "<strong>ጨለማ ሁነታ:</strong> በዝቅተኛ ብርሃን ውስጥ ለማየት።",
            help_menu_lang: "<strong>ቋንቋ:</strong> በሶስቱ ቋንቋዎች መካከል ይቀያይሩ።",
            help_menu_clear: "<strong>ሁሉንም ዳታ አጥፋ:</strong> ሁሉንም የተቀመጡ መረጃዎችን ያጠፋል። በጥንቃቄ ይጠቀሙ።",
            help_menu_back: "<strong>የመመለሻ ምልክት (↩️):</strong> መረጃ ሳያጡ ወደ የምግብ ሰዓት ምርጫ ለመመለስ ይጠቀሙ።",
            contacts_title: "ከአበልጻጊዎቹ ጋር ይገናኙ",
            reattempt_list_title: "የድጋሚ ሙከራ መዝገብ", id_header: "የተማሪ መለያ", time_header: "ሰዓት", no_attempts: "ምንም ሙከራ አልተመዘገበም።",
            recent_entries_title: "የቅርብ ጊዜ ስኬታማ ምዝገባዎች",
            session_breakfast: "ቁርስ", session_lunch: "ምሳ", session_dinner: "እራት"
        }
    };

    // --- ELEMENT SELECTIONS ---
    const body = document.body;
    const welcomeScreen = document.getElementById('welcome-screen');
    const sessionSelectionScreen = document.getElementById('session-selection-screen');
    const appWrapper = document.getElementById('app-wrapper');
    const langSelect = document.getElementById('lang-select');
    const idPart1 = document.getElementById('id-part1');
    const idPart2 = document.getElementById('id-part2');
    const yearLockBtn = document.getElementById('year-lock-btn');
    const getInBtn = document.getElementById('get-in-btn');
    const messageDisplay = document.getElementById('message-display');
    const liveClockDisplay = document.getElementById('live-clock');
    const pages = { home: document.getElementById('home-page'), list: document.getElementById('list-page'), reating: document.getElementById('reating-page') };
    const navButtons = { home: document.getElementById('nav-home'), list: document.getElementById('nav-list'), reating: document.getElementById('nav-reating') };
    const sessionButtons = document.querySelectorAll('#session-selection-screen .session-btn');
    const sideMenu = document.getElementById('side-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const snowCanvas = document.getElementById('snow-canvas');

    // --- APP STATE ---
    let clockInterval;
    let appData;
    let currentSession = 'breakfast';
    let currentLang = 'en';
    let isYearLocked = false;
    const errorSound = new Audio("error_alert.mp3");
    const successSound = new Audio("corrects_alert.mp3");

    // --- DATA HANDLING ---
    function saveData() { localStorage.setItem('bhuCafeteriaData', JSON.stringify(appData)); }
    function loadData() {
        const data = localStorage.getItem('bhuCafeteriaData');
        appData = data ? JSON.parse(data) : { breakfast: { eaten: {}, reattempts: {}, recent: [] }, lunch: { eaten: {}, reattempts: {}, recent: [] }, dinner: { eaten: {}, reattempts: {}, recent: [] } };

        idPart2.value = localStorage.getItem('bhuCafeteriaYear') || '16';
        isYearLocked = JSON.parse(localStorage.getItem('bhuYearLocked')) || false;
        updateLockIcon();
    }

    // --- INITIALIZATION ---
    function init() {
        loadData();

        document.getElementById('enter-app-btn').addEventListener('click', () => {
            welcomeScreen.style.display = 'none';
            sessionSelectionScreen.classList.remove('hidden');
        });

        sessionButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentSession = button.dataset.session;
                sessionSelectionScreen.classList.add('hidden');
                appWrapper.classList.remove('hidden');
                if (snowCanvas) snowCanvas.style.display = 'none';

                updateSessionTitle();
                idPart1.focus();
                renderRecentEntries();
            });
        });

        startLiveClock();
        setupEventListeners();
        checkTheme();
        startSnowAnimation();
    }

    function setupEventListeners() {
        langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
        // ** THE FIX IS HERE **
        // Set initial language after all elements are ready
        changeLanguage(langSelect.value);

        getInBtn.addEventListener('click', processStudentEntry);
        yearLockBtn.addEventListener('click', toggleYearLock);

        idPart1.addEventListener('input', () => {
            if (idPart1.value.length >= 4) {
                if (!isYearLocked) {
                    idPart2.focus();
                } else {
                    getInBtn.focus();
                }
            }
        });
        idPart1.addEventListener('keypress', (e) => { if (e.key === 'Enter') processStudentEntry(); });
        idPart2.addEventListener('keypress', (e) => { if (e.key === 'Enter') processStudentEntry(); });

        Object.keys(navButtons).forEach(key => navButtons[key].addEventListener('click', () => showPage(key)));

        document.getElementById('hamburger-menu-icon').addEventListener('click', () => sideMenu.classList.add('open'));
        document.getElementById('close-side-menu').addEventListener('click', () => sideMenu.classList.remove('open'));

        document.getElementById('about-btn').addEventListener('click', () => showModal('about-modal'));
        document.getElementById('help-btn').addEventListener('click', () => showModal('help-modal'));
        document.getElementById('contacts-btn').addEventListener('click', () => showModal('contacts-modal'));
        document.getElementById('restart-btn').addEventListener('click', () => showModal('restart-modal'));
        document.getElementById('back-to-session-btn').addEventListener('click', backToSessionSelect);

        themeToggle.addEventListener('change', toggleTheme);
        initModals();
    }

    function initModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            const closeBtn = modal.querySelector('.close-modal-btn');
            if(closeBtn) {
                closeBtn.addEventListener('click', () => modal.style.display = 'none');
            }
        });

        const restartModal = document.getElementById('restart-modal');
        restartModal.querySelector('.cancel').addEventListener('click', () => restartModal.style.display = 'none');
        restartModal.querySelector('#confirm-restart-btn').addEventListener('click', () => {
            localStorage.removeItem('bhuCafeteriaData');
            localStorage.removeItem('bhuCafeteriaYear');
            localStorage.removeItem('bhuYearLocked');
            location.reload(true);
        });

        window.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        });
    }

    // --- CORE FUNCTIONS ---
    function changeLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            const translation = translations[lang]?.[key] || translations['en'][key];
            if (translation) {
                elem.innerHTML = translation;
            }
        });
        updateSessionTitle();
        if (pages.list.classList.contains('active')) renderListPage();
        if (pages.reating.classList.contains('active')) renderReatingPage();
        renderRecentEntries();
    }

    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            sideMenu.classList.remove('open');
            changeLanguage(currentLang);
        }
    }

    function showPage(pageKey) {
        Object.values(pages).forEach(page => page.classList.remove('active'));
        Object.values(navButtons).forEach(btn => btn.classList.remove('active'));

        if (pageKey === 'list') renderListPage();
        if (pageKey === 'reating') renderReatingPage();
        if (pageKey === 'home') renderRecentEntries();

        pages[pageKey].classList.add('active');
        navButtons[pageKey].classList.add('active');
    }

    function backToSessionSelect() {
        appWrapper.classList.add('hidden');
        sessionSelectionScreen.classList.remove('hidden');
        if (snowCanvas) snowCanvas.style.display = 'block';
    }

    function toggleYearLock() {
        isYearLocked = !isYearLocked;
        if (isYearLocked) {
            const yearValue = idPart2.value;
            if (yearValue && yearValue.length === 2 && /^\d+$/.test(yearValue)) {
                localStorage.setItem('bhuCafeteriaYear', yearValue);
            }
        }
        updateLockIcon();
        localStorage.setItem('bhuYearLocked', isYearLocked);
    }

    function updateLockIcon() {
        if (isYearLocked) {
            yearLockBtn.textContent = '🔒';
            yearLockBtn.title = 'Year is locked. Click to unlock.';
            idPart2.disabled = true;
        } else {
            yearLockBtn.textContent = '🔓';
            yearLockBtn.title = 'Year is unlocked. Click to lock.';
            idPart2.disabled = false;
        }
    }

    function updateSessionTitle() {
        const sessionName = (translations[currentLang]?.[`session_${currentSession}`] || currentSession).toUpperCase();
        const titleEl = document.getElementById('current-session-title');
        if (titleEl) {
            titleEl.textContent = `${sessionName} Entry`;
        }
    }

    function showWarning(studentId) {
        messageDisplay.textContent = `ID (${studentId}) has already been served for ${currentSession}!`;
        messageDisplay.className = 'message-error shake';
        setTimeout(() => messageDisplay.classList.remove('shake'), 500);

        errorSound.play().catch(e => console.error("Error playing sound:", e));

        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
    }

    function processStudentEntry() {
        const id1 = idPart1.value.trim();
        const id2 = idPart2.value.trim();
        const numberRegex = /^\d+$/;

        if (id1.length !== 4 || id2.length !== 2 || !numberRegex.test(id1) || !numberRegex.test(id2)) {
            messageDisplay.textContent = "Please enter a valid ID in the format 0000/00.";
            messageDisplay.className = 'message-error shake';
            if (navigator.vibrate) navigator.vibrate(100);
            setTimeout(() => messageDisplay.classList.remove('shake'), 500);
            return;
        }
        const studentId = `${id1}/${id2}`;
        const sessionData = appData[currentSession];

        if (sessionData.eaten[studentId]) {
            showWarning(studentId);

            if (!sessionData.reattempts[studentId]) {
                sessionData.reattempts[studentId] = liveClockDisplay.textContent;
            }
        } else {
            messageDisplay.textContent = `Success! ID (${studentId}) has been logged for ${currentSession}.`;
            messageDisplay.className = 'message-success';
            successSound.play().catch(e => console.error("Error playing success sound:", e));
            sessionData.eaten[studentId] = liveClockDisplay.textContent;
            const entry = { id: studentId, time: liveClockDisplay.textContent };
            sessionData.recent.unshift(entry);
            if (sessionData.recent.length > 10) {
                sessionData.recent.pop();
            }
            renderRecentEntries();
        }
        saveData();
        idPart1.value = '';
        if (!isYearLocked) idPart2.value = '';
        idPart1.focus();
    }

    function startLiveClock() {
        if(clockInterval) clearInterval(clockInterval);
        clockInterval = setInterval(() => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            const strHours = String(hours).padStart(2, '0');

            liveClockDisplay.textContent = `${strHours}:${minutes}:${seconds} ${ampm}`;
        }, 1000);
    }

    function renderListPage() {
        const sessionData = appData[currentSession];
        const sessionName = (translations[currentLang]?.[`session_${currentSession}`] || currentSession).toUpperCase();
        pages.list.innerHTML = `
            <div class="stats">
                <h3>${sessionName} Dashboard</h3>
                <p>Total Students Served: <strong>${Object.keys(sessionData.eaten).length}</strong></p>
            </div>
            <div id="list-recent-entries" class="recent-entries-wrapper"></div>`;
        renderRecentEntries();
    }

    function renderReatingPage() {
        const sessionData = appData[currentSession];
        const lang = currentLang;
        const sessionName = (translations[lang]?.[`session_${currentSession}`] || currentSession).toUpperCase();
        let listContent = Object.keys(sessionData.reattempts).length === 0
            ? `<p>${translations[lang]?.no_attempts || translations['en'].no_attempts}</p>`
            : Object.entries(sessionData.reattempts).map(([id, time]) => `<div class="list-item"><span>${id}</span><span>${time}</span></div>`).join('');
        pages.reating.innerHTML = `
            <div class="list-container">
                <h2>${(translations[lang]?.reattempt_list_title || translations['en'].reattempt_list_title)} (${sessionName})</h2>
                <div class="list-header">
                    <span>${translations[lang]?.id_header || translations['en'].id_header}</span>
                    <span>${translations[lang]?.time_header || translations['en'].time_header}</span>
                </div>
                ${listContent}
            </div>`;
    }

    function renderRecentEntries() {
        const sessionData = appData[currentSession];
        const homeContainer = document.getElementById('home-recent-entries');
        const listContainer = document.getElementById('list-recent-entries');
        const lang = currentLang;
        const sessionName = (translations[lang]?.[`session_${currentSession}`] || currentSession).toUpperCase();
        const title = `${(translations[lang]?.recent_entries_title || translations['en'].recent_entries_title)} (${sessionName})`;
        let listHTML = `<h3>${title}</h3>`;
        if (!sessionData || sessionData.recent.length === 0) {
            listHTML = '';
        } else {
            sessionData.recent.forEach(entry => {
                listHTML += `<div class="recent-entry"><span>${entry.id}</span><span>${entry.time}</span></div>`;
            });
        }
        if(homeContainer) homeContainer.innerHTML = listHTML;
        if(listContainer) listContainer.innerHTML = listHTML;
    }

    function toggleTheme() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('bhuTheme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    function checkTheme() {
        const theme = localStorage.getItem('bhuTheme');
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        }
    }

    function startSnowAnimation() {
        if (!snowCanvas) return;
        const ctx = snowCanvas.getContext('2d');
        let snowflakes = [];
        function onResize() {
            snowCanvas.width = window.innerWidth;
            snowCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', onResize);
        onResize();
        const snowflakeCount = 200;
        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push({
                x: Math.random() * snowCanvas.width,
                y: Math.random() * snowCanvas.height,
                radius: Math.random() * 3 + 1,
                speedY: Math.random() * 2 + 1,
                speedX: Math.random() * 2 - 1
            });
        }
        function animateSnow() {
            ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
            snowflakes.forEach(flake => {
                flake.y += flake.speedY;
                flake.x += flake.speedX;
                if (flake.y > snowCanvas.height) {
                    flake.y = 0 - flake.radius;
                    flake.x = Math.random() * snowCanvas.width;
                }
                if (flake.x > snowCanvas.width + flake.radius || flake.x < -flake.radius) {
                    flake.x = Math.random() * snowCanvas.width;
                }
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
            });
            requestAnimationFrame(animateSnow);
        }
        animateSnow();
    }

    // --- RUN INITIALIZATION ---
    init();
});