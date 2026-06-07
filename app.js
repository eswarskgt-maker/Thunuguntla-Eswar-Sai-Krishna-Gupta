// Language translations - Complete
const translations = {
    en: {
        welcomeText: "Tell us about your health concerns, and we'll help you!",
        symptomsTitle: "Symptom Checker",
        medicinesTitle: "Medicine Database",
        hospitalsTitle: "Find Nearby Hospital",
        remindersTitle: "Medicine Reminders",
        profileTitle: "Profile",
        phoneLabel: "Phone Number:",
        locationLabel: "Location:",
        settingsLabel: "Settings",
        categoriesTitle: "Categories",
        searchPlaceholder: "Search medicine name...",
        usesLabel: "Uses",
        dosageLabel: "Dosage",
        sideEffectsLabel: "Side Effects",
        precautionsLabel: "Precautions",
        brandNamesLabel: "Brand Names",
        countryLabel: "Country"
    },
    hi: {
        welcomeText: "हमें अपनी स्वास्थ्य समस्याओं के बारे में बताएं!",
        symptomsTitle: "लक्षण जांचकर्ता",
        medicinesTitle: "दवाई डेटाबेस",
        hospitalsTitle: "पास के अस्पताल खोजें",
        remindersTitle: "दवाई रिमाइंडर",
        profileTitle: "प्रोफाइल",
        phoneLabel: "फोन नंबर:",
        locationLabel: "स्थान:",
        settingsLabel: "सेटिंग्स",
        categoriesTitle: "श्रेणियाँ",
        searchPlaceholder: "दवाई का नाम खोजें...",
        usesLabel: "उपयोग",
        dosageLabel: "खुराक",
        sideEffectsLabel: "दुष्प्रभाव",
        precautionsLabel: "सावधानियां",
        brandNamesLabel: "ब्रांड नाम",
        countryLabel: "देश"
    },
    ta: {
        welcomeText: "உங்கள் சுகாதார பிரச்சனைகளைப் பற்றி சொல்லுங்கள்!",
        symptomsTitle: "அறிகுறி சரிபார்ப்பான்",
        medicinesTitle: "மருந்து தரவுதளம்",
        hospitalsTitle: "அருகில் உள்ள மருத்துவமனைகளைக் கண்டறியவும்",
        remindersTitle: "மருந்து நினைவூட்டல்கள்",
        profileTitle: "சுயவிவரம்",
        phoneLabel: "ஃபோன் எண்:",
        locationLabel: "இருப்பிடம்:",
        settingsLabel: "அமைப்புகள்",
        categoriesTitle: "வகைகள்",
        searchPlaceholder: "மருந்து பெயர் தேடுக...",
        usesLabel: "பயன்கள்",
        dosageLabel: "அளவு",
        sideEffectsLabel: "பக்க விளைவுகள்",
        precautionsLabel: "எச்சரிக்கைகள்",
        brandNamesLabel: "ப்ராண்ட் பெயர்கள்",
        countryLabel: "நாடு"
    },
    te: {
        welcomeText: "మీ ఆరోగ్య సమస్యల గురించి మాకు చెప్పండి!",
        symptomsTitle: "లక్షణ చెకర్",
        medicinesTitle: "ఔషధ డేటాబేస్",
        hospitalsTitle: "సమీపంలో ఉన్న ఆసుపత్రిని కనుగొనండి",
        remindersTitle: "ఔషధ రిమైండర్‌లు",
        profileTitle: "ప్రొఫైల్",
        phoneLabel: "ఫోన్ నంబర్:",
        locationLabel: "స్థానం:",
        settingsLabel: "సెట్టింగ్‌లు",
        categoriesTitle: "విభాగాలు",
        searchPlaceholder: "ఔషధ పేరు సెర్చ్ చేయండి...",
        usesLabel: "ఉపయోగాలు",
        dosageLabel: "మోతాదు",
        sideEffectsLabel: "దుష్ప్రభావాలు",
        precautionsLabel: "జాగ్రత్తలు",
        brandNamesLabel: "బ్రాండ్ పేర్లు",
        countryLabel: "దేశం"
    },
    kn: {
        welcomeText: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ನಮಗೆ ಹೇಳಿ!",
        symptomsTitle: "ರೋಗಲಕ್ಷಣ ಪರಿಶೋಧಕ",
        medicinesTitle: "ಔಷಧ ಡೇಟಾಬೇಸ್",
        hospitalsTitle: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಯನ್ನು ಹುಡುಕಿ",
        remindersTitle: "ಔಷಧ ಸ್ಮರಣೆಗಳು",
        profileTitle: "ಪ್ರೊಫೈಲ್",
        phoneLabel: "ಫೋನ್ ನಿಂದ್ರಾ:",
        locationLabel: "ಸ್ಥಳ:",
        settingsLabel: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        categoriesTitle: "ವಿಭಾಗಗಳು",
        searchPlaceholder: "ಔಷಧ ಹೆಸರು ಹುಡುಕಿ...",
        usesLabel: "ಉಪಯೋಗಗಳು",
        dosageLabel: "ಮಾತ್ರೆ",
        sideEffectsLabel: "ಅಡ್ಡ ಪರಿಣಾಮಗಳು",
        precautionsLabel: "ಸಾವಧಾನತೆಗಳು",
        brandNamesLabel: "ಬ್ರಾಂಡ್ ಹೆಸರುಗಳು",
        countryLabel: "ದೇಶ"
    }
};

// Medicine translations
const medicineTranslations = {
    uses: {
        en: "Uses",
        hi: "उपयोग",
        ta: "பயன்கள்",
        te: "ఉపయోగాలు",
        kn: "ಉಪಯೋಗಗಳು"
    },
    dosage: {
        en: "Dosage",
        hi: "खुराक",
        ta: "அளவு",
        te: "మోతాదు",
        kn: "ಮಾತ್ರೆ"
    },
    sideEffects: {
        en: "Side Effects",
        hi: "दुष्प्रभाव",
        ta: "பக்க விளைவுகள்",
        te: "దుష్ప్రభావాలు",
        kn: "ಅಡ್ಡ ಪರಿಣಾಮಗಳು"
    },
    precautions: {
        en: "Precautions",
        hi: "सावधानियां",
        ta: "எச்சரிக்கைகள்",
        te: "జాగ్రత్తలు",
        kn: "ಸಾವಧಾನತೆಗಳು"
    },
    brandNames: {
        en: "Brand Names",
        hi: "ब्रांड नाम",
        ta: "ப்ராண்ட் பெயர்கள்",
        te: "బ్రాండ్ పేర్లు",
        kn: "ಬ್ರಾಂಡ್ ಹೆಸರುಗಳು"
    },
    country: {
        en: "Country",
        hi: "देश",
        ta: "நாடு",
        te: "దేశం",
        kn: "ದೇಶ"
    }
};

let currentLanguage = 'en';
let medicinesData = [];
let reminders = [];
let userProfile = {
    phoneNumber: localStorage.getItem('phoneNumber') || '',
    location: localStorage.getItem('location') || '',
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadMedicines();
    checkLogin();
    updateUI();
});

// Load medicines from JSON
async function loadMedicines() {
    try {
        const response = await fetch('medicines.json');
        const data = await response.json();
        medicinesData = data.medicines;
        displayMedicines(medicinesData);
    } catch (error) {
        console.error('Error loading medicines:', error);
    }
}

// Check login status
function checkLogin() {
    if (!userProfile.isLoggedIn) {
        const phone = prompt("Enter your phone number to login:");
        if (phone) {
            userProfile.phoneNumber = phone;
            userProfile.isLoggedIn = true;
            localStorage.setItem('phoneNumber', phone);
            localStorage.setItem('isLoggedIn', 'true');
        }
    }
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateUI();
    // Refresh medicines display with new language
    displayMedicines(medicinesData);
}

// Update UI with current language
function updateUI() {
    document.getElementById('welcomeText').textContent = translations[currentLanguage].welcomeText;
    document.getElementById('symptomsTitle').textContent = translations[currentLanguage].symptomsTitle;
    document.getElementById('medicinesTitle').textContent = translations[currentLanguage].medicinesTitle;
    document.getElementById('hospitalsTitle').textContent = translations[currentLanguage].hospitalsTitle;
    document.getElementById('remindersTitle').textContent = translations[currentLanguage].remindersTitle;
    document.getElementById('profileTitle').textContent = translations[currentLanguage].profileTitle;
    document.getElementById('phoneLabel').textContent = translations[currentLanguage].phoneLabel;
    document.getElementById('locationLabel').textContent = translations[currentLanguage].locationLabel;
    document.getElementById('settingsLabel').textContent = translations[currentLanguage].settingsLabel;
    document.getElementById('categoriesTitle').textContent = translations[currentLanguage].categoriesTitle;
    document.getElementById('medicineSearch').placeholder = translations[currentLanguage].searchPlaceholder;
}

// Toggle navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    // Close menu
    document.getElementById('navMenu').classList.remove('active');
}

// Symptom Analysis
async function analyzeSymptoms() {
    const symptomText = document.getElementById('symptomInput').value;
    if (!symptomText.trim()) {
        alert("Please describe your symptoms");
        return;
    }

    const resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML = '<p>Analyzing symptoms...</p>';

    try {
        const response = await fetch('/analyze-symptoms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ symptoms: symptomText })
        });
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error analyzing symptoms:', error);
        resultDiv.innerHTML = '<p>Error analyzing symptoms. Please try again.</p>';
    }
}

// Display symptom analysis results
function displayResults(data) {
    const resultDiv = document.getElementById('resultDiv');
    let html = '<div class="results">';
    
    if (data.diagnosis) {
        html += `<div class="result-item">
            <h4>💊 Possible Conditions:</h4>
            <p>${data.diagnosis}</p>
        </div>`;
    }
    
    if (data.recommendations) {
        html += `<div class="result-item">
            <h4>✅ Recommendations:</h4>
            <p>${data.recommendations}</p>
        </div>`;
    }
    
    if (data.medicines) {
        html += `<div class="result-item">
            <h4>💉 Suggested Medicines:</h4>
            <p>${data.medicines}</p>
        </div>`;
    }
    
    html += `<div class="result-item">
        <h4>⚠️ When to See Doctor:</h4>
        <p>Seek immediate medical attention if symptoms worsen or persist for more than 3 days.</p>
    </div>`;
    
    html += '</div>';
    resultDiv.innerHTML = html;
    
    // Text-to-speech for results
    if ('speechSynthesis' in window) {
        const text = `${data.diagnosis}. ${data.recommendations}. ${data.medicines}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = getLanguageCode();
        speechSynthesis.speak(utterance);
    }
}

// Voice command for symptoms
function startVoiceCommand() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Speech Recognition not supported in your browser");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = getLanguageCode();
    recognition.start();

    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        document.getElementById('symptomInput').value = transcript;
    };

    recognition.onerror = function(event) {
        alert('Error: ' + event.error);
    };
}

// Analyze symptoms via voice
function analyzeSymptomsVoice() {
    startVoiceCommand();
    setTimeout(() => analyzeSymptoms(), 2000);
}

// Get language code for speech
function getLanguageCode() {
    const codes = {
        'en': 'en-US',
        'hi': 'hi-IN',
        'ta': 'ta-IN',
        'te': 'te-IN',
        'kn': 'kn-IN'
    };
    return codes[currentLanguage] || 'en-US';
}

// Display medicines with language support
function displayMedicines(medicines) {
    const medicineList = document.getElementById('medicineList');
    medicineList.innerHTML = '';
    
    medicines.forEach(medicine => {
        const card = document.createElement('div');
        card.className = 'medicine-card';
        card.innerHTML = `
            <div>${medicine.images}</div>
            <h4>${medicine.name}</h4>
            <p><strong>${medicineTranslations.uses[currentLanguage]}:</strong> ${medicine.uses}</p>
            <p><strong>${medicineTranslations.dosage[currentLanguage]}:</strong> ${medicine.dosage}</p>
            <p><strong>${medicineTranslations.sideEffects[currentLanguage]}:</strong> ${medicine.sideEffects}</p>
            <p><strong>${medicineTranslations.precautions[currentLanguage]}:</strong> ${medicine.precautions}</p>
            <p><strong>${medicineTranslations.brandNames[currentLanguage]}:</strong> ${medicine.brand_names}</p>
            <p><strong>${medicineTranslations.country[currentLanguage]}:</strong> ${medicine.country}</p>
            <span class="category">${medicine.category}</span>
        `;
        medicineList.appendChild(card);
    });
}

// Search medicines
function searchMedicines() {
    const query = document.getElementById('medicineSearch').value.toLowerCase();
    const filtered = medicinesData.filter(m => 
        m.name.toLowerCase().includes(query) ||
        m.uses.toLowerCase().includes(query) ||
        m.brand_names.toLowerCase().includes(query)
    );
    displayMedicines(filtered);
}

// Filter by category
function filterByCategory(category) {
    const filtered = medicinesData.filter(m => m.category === category);
    displayMedicines(filtered);
    
    // Highlight active category button
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(category)) {
            btn.classList.add('active');
        }
    });
}

// Find hospitals
function findHospitals() {
    const location = document.getElementById('hospitalLocation').value;
    const hospitalList = document.getElementById('hospitalList');
    
    if (!location) {
        alert("Please enter your location");
        return;
    }

    // Sample hospital data (in real app, this would be from API)
    const hospitals = [
        {
            name: "City Medical Hospital",
            address: `Near ${location}`,
            phone: "04123456789",
            distance: "2.5 km",
            rating: "4.5/5"
        },
        {
            name: "Health Care Center",
            address: `Downtown ${location}`,
            phone: "04198765432",
            distance: "3.2 km",
            rating: "4.8/5"
        },
        {
            name: "Emergency Care Hospital",
            address: `Main Road ${location}`,
            phone: "04156789012",
            distance: "1.8 km",
            rating: "4.2/5"
        }
    ];

    hospitalList.innerHTML = '';
    hospitals.forEach(hospital => {
        const card = document.createElement('div');
        card.className = 'hospital-card';
        card.innerHTML = `
            <h4>🏥 ${hospital.name}</h4>
            <p><strong>Address:</strong> ${hospital.address}</p>
            <p><strong>Phone:</strong> <a href="tel:${hospital.phone}">${hospital.phone}</a></p>
            <p><strong>Distance:</strong> ${hospital.distance}</p>
            <p><strong>Rating:</strong> ${hospital.rating}</p>
            <button onclick="callHospital('${hospital.phone}')" class="btn btn-primary">Call Now</button>
        `;
        hospitalList.appendChild(card);
    });
}

// Call hospital
function callHospital(phone) {
    window.location.href = `tel:${phone}`;
}

// Add reminder
function addReminder() {
    const medicineName = document.getElementById('medicineName').value;
    const doseCount = document.getElementById('doseCount').value;
    const reminderTime = document.getElementById('reminderTime').value;

    if (!medicineName) {
        alert("Please enter medicine name");
        return;
    }

    const reminder = {
        id: Date.now(),
        medicine: medicineName,
        dose: doseCount,
        time: reminderTime
    };

    reminders.push(reminder);
    localStorage.setItem('reminders', JSON.stringify(reminders));
    
    displayReminders();
    document.getElementById('medicineName').value = '';
    document.getElementById('doseCount').value = '1';

    // Set browser notification
    setNotification(medicineName, reminderTime);
}

// Display reminders
function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = '';

    reminders.forEach(reminder => {
        const card = document.createElement('div');
        card.className = 'reminder-card';
        card.innerHTML = `
            <h4>⏰ ${reminder.medicine}</h4>
            <p><strong>Dose:</strong> ${reminder.dose} tablet(s)</p>
            <p><strong>Time:</strong> ${reminder.time}</p>
            <button onclick="deleteReminder(${reminder.id})">Delete</button>
        `;
        reminderList.appendChild(card);
    });
}

// Delete reminder
function deleteReminder(id) {
    reminders = reminders.filter(r => r.id !== id);
    localStorage.setItem('reminders', JSON.stringify(reminders));
    displayReminders();
}

// Set notification
function setNotification(medicine, time) {
    if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification(`Medicine Reminder: ${medicine}`, {
            icon: '💊',
            badge: '🏥'
        });
    }
}

// Request notification permission
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Save phone number
function savePhoneNumber() {
    const phone = document.getElementById('phoneNumber').value;
    if (phone) {
        userProfile.phoneNumber = phone;
        localStorage.setItem('phoneNumber', phone);
        alert("Phone number saved!");
    }
}

// Save location
function saveLocation() {
    const location = document.getElementById('location').value;
    if (location) {
        userProfile.location = location;
        localStorage.setItem('location', location);
        alert("Location saved!");
    }
}

// Logout
function logout() {
    localStorage.clear();
    window.location.reload();
}

// Load reminders on startup
function loadReminders() {
    const saved = localStorage.getItem('reminders');
    if (saved) {
        reminders = JSON.parse(saved);
        displayReminders();
    }
}

// Initialize reminders
window.addEventListener('load', loadReminders);
