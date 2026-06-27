# 🏥 Health Diagnostic Web App

A comprehensive health diagnostic assistant web application that helps users identify health conditions, find medicines, locate hospitals, and manage medicine reminders.

## Features ✨

### Core Features
- ✅ **Symptom Checker** - Describe symptoms in natural language for AI-powered diagnosis suggestions
- ✅ **Medicine Database** - Comprehensive database of 25+ medicines with details (uses, dosage, side effects, precautions)
- ✅ **Medicine Search** - Search medicines by name or usage
- ✅ **Hospital Locator** - Find nearby hospitals with contact information
- ✅ **Medicine Reminders** - Set reminders for medicine intake with notifications
- ✅ **User Profile** - Save phone number and location for quick access
- ✅ **Multilingual Support** - English, Hindi, Tamil, Telugu, Kannada
- ✅ **Voice Commands** - Describe symptoms using voice input
- ✅ **Voice Output** - Results read aloud in selected language
- ✅ **Categories** - Medicine categories (General, Pain, Fever, Skin, ENT, Women, Baby)
- ✅ **Mobile Responsive** - Works perfectly on all devices

## Tech Stack 🛠️

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Storage**: JSON files, LocalStorage
- **APIs Used**: Web Speech API, Geolocation API
- **Features**: 
  - Real-time symptom analysis
  - Voice recognition and synthesis
  - Browser notifications for reminders
  - Responsive design for mobile and desktop

## Installation 📦

### Prerequisites
- Node.js (v12 or higher)
- npm
- Any modern web browser (Chrome, Firefox, Edge, Safari)

### Setup Steps

1. **Clone or download the repository**
   ```bash
   cd health-diagnostic-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   # or
   node server.js
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## How to Use 🚀

### 1. Login
- Enter your phone number on first launch
- Number is saved for future logins

### 2. Symptom Checker
- Describe your symptoms in natural language
- Use text input or voice commands (🎤 button)
- Get instant diagnosis suggestions and medicine recommendations

### 3. Medicine Database
- Browse all medicines by category
- Search for specific medicines
- View detailed information (uses, dosage, side effects, precautions)

### 4. Find Hospital
- Enter your city/location
- Get nearby hospitals with:
  - Address
  - Phone number (clickable to call)
  - Distance
  - Rating

### 5. Set Reminders
- Add medicine reminders with:
  - Medicine name
  - Dose count
  - Time (Morning, Afternoon, Evening, Night, Midnight)
- Get browser notifications at scheduled times
- Delete reminders when done

### 6. Profile Settings
- Save/update phone number
- Save/update location
- Change language
- Logout and clear data

## Languages Supported 🌍

- 🇬🇧 English
- 🇮🇳 हिंदी (Hindi)
- 🇮🇳 தமிழ் (Tamil)
- 🇮🇳 తెలుగు (Telugu)
- 🇮🇳 ಕನ್ನಡ (Kannada)

## Files Structure 📁

```
health-diagnostic-app/
├── index.html           # Main HTML structure
├── styles.css           # Complete styling
├── app.js              # Frontend JavaScript logic
├── server.js           # Express backend server
├── medicines.json      # Medicine database (25+ medicines)
├── package.json        # Dependencies
└── README.md           # This file
```

## Symptom Checker Database 🩺

Covers symptoms for:
- General illnesses (fever, cold, cough, headache)
- Digestive issues (stomach pain, diarrhea, constipation)
- Allergies and skin conditions
- ENT problems
- Women's health
- Baby care
- Mental health (anxiety, depression, insomnia)
- And more...

## Medicine Database 💊

**25+ Medicines Included:**
- Paracetamol, Ibuprofen, Aspirin
- Antihistamines (Cetirizine, Loratadine)
- Antibiotics (Amoxicillin)
- GI medications (Omeprazole, Loperamide)
- Women's health (Prenatal vitamins, Calcium supplements)
- Baby care products
- Skin treatments (Hydrocortisone, Clotrimazole, Calamine)
- ENT drops and sprays
- And more...

Each medicine includes:
- Name and category
- Uses and indications
- Dosage information
- Side effects
- Important precautions

## Features in Detail 🎯

### Voice Recognition
- Describe symptoms by speaking
- Supports multiple languages
- Real-time transcription

### Voice Output
- Symptom analysis results spoken aloud
- Language-specific pronunciation
- Clear, natural voice synthesis

### Notifications
- Browser notifications for medicine reminders
- Set multiple reminders per day
- Different times: Morning, Afternoon, Evening, Night, Midnight

### Data Persistence
- LocalStorage for user data
- Reminders saved automatically
- Language preference remembered
- Phone number and location saved

### Responsive Design
- Mobile-first approach
- Works on smartphones, tablets, desktops
- Touch-friendly interface
- Optimized for slow networks

## Deployment Options 🌐

### Deploy to Replit
1. Create account at replit.com
2. Click "New Repl"
3. Choose "Node.js"
4. Upload all files
5. Click "Run"

### Deploy to Heroku
```bash
heroku create your-app-name
git push heroku main
heroku open
```

### Deploy to Vercel/Netlify
- Use the frontend files (HTML, CSS, JS)
- Deploy to static hosting

## Browser Support 🌐

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Troubleshooting 🔧

### Port Already in Use
```bash
# Use different port
PORT=3001 node server.js
```

### Modules not found
```bash
npm install
```

### Voice Recognition Not Working
- Check browser compatibility (Chrome recommended)
- Grant microphone permission when prompted
- Ensure internet connection for speech APIs

### Medicines Not Loading
- Ensure medicines.json is in same directory as server.js
- Restart the server

## Security Considerations ⚠️

- Data stored locally (not sent to any external server)
- Phone numbers stored in browser LocalStorage
- No external API calls for sensitive data
- Always verify information with healthcare professionals

## Disclaimer ⚕️

**IMPORTANT:** This app is for educational purposes only and should NOT replace professional medical advice. Always consult with qualified healthcare professionals for diagnosis and treatment recommendations.

## Future Enhancements 🚀

- [ ] Real-time API integration with medical databases
- [ ] Integration with actual hospital databases
- [ ] SMS notifications for reminders
- [ ] Medicine interaction checker
- [ ] Allergy history tracking
- [ ] PDF report generation
- [ ] Integration with telemedicine services
- [ ] Video consultation features
- [ ] Advanced AI/ML for better diagnosis
- [ ] Offline mode support

## Contributing 🤝

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License 📄

This project is open source and available under the MIT License.

## Support 📞

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.
eswarskgt@gmail.com
---
## Developed By

T.Eswar Sai Krishna Gupta.

**Made with ❤️ for better healthcare accessibility**
