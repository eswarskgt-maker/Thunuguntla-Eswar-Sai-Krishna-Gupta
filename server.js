const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Symptom analysis data
const symptomDatabase = {
    'fever': {
        diagnosis: 'Possible conditions: Common Cold, Flu, Viral Fever',
        recommendations: 'Rest well, drink plenty of water, avoid strenuous activities',
        medicines: 'Paracetamol (500mg), Ibuprofen (400mg), stay hydrated'
    },
    'headache': {
        diagnosis: 'Possible conditions: Tension headache, Migraine, Sinusitis',
        recommendations: 'Rest in a dark room, apply cold/warm compress, avoid screen time',
        medicines: 'Paracetamol (500mg), Ibuprofen (400mg), caffeine drinks'
    },
    'cough': {
        diagnosis: 'Possible conditions: Common Cold, Bronchitis, Asthma',
        recommendations: 'Drink warm liquids, use humidifier, avoid smoke and pollution',
        medicines: 'Cough syrup, Honey, Lozenges, Steam inhalation'
    },
    'cold': {
        diagnosis: 'Possible conditions: Common Cold, Allergic Rhinitis',
        recommendations: 'Stay hydrated, use saline nasal drops, get adequate sleep',
        medicines: 'Antihistamines, Saline nasal spray, Vitamin C'
    },
    'sore throat': {
        diagnosis: 'Possible conditions: Pharyngitis, Tonsillitis, Laryngitis',
        recommendations: 'Gargle with salt water, drink warm liquids, use throat lozenges',
        medicines: 'Throat lozenges, Honey, Antibiotic throat spray'
    },
    'stomach pain': {
        diagnosis: 'Possible conditions: Indigestion, Gastritis, Food poisoning',
        recommendations: 'Eat light foods, avoid spicy food, drink ginger tea',
        medicines: 'Antacid tablets, Omeprazole, Probiotics'
    },
    'diarrhea': {
        diagnosis: 'Possible conditions: Food poisoning, Viral infection, Lactose intolerance',
        recommendations: 'Stay hydrated with ORS, eat bland foods, rest',
        medicines: 'Loperamide (Imodium), ORS solution, Probiotics'
    },
    'constipation': {
        diagnosis: 'Possible conditions: Low fiber diet, Dehydration',
        recommendations: 'Increase fiber intake, drink water, exercise regularly',
        medicines: 'Laxatives, Fiber supplements, Probiotic yogurt'
    },
    'allergy': {
        diagnosis: 'Possible conditions: Allergic Rhinitis, Dermatitis, Food allergy',
        recommendations: 'Identify trigger, avoid exposure, use antihistamines',
        medicines: 'Cetirizine (10mg), Loratadine, Antihistamine cream'
    },
    'eye pain': {
        diagnosis: 'Possible conditions: Conjunctivitis, Strain, Dry eyes',
        recommendations: 'Rest eyes, avoid screens, use eye drops',
        medicines: 'Eye drops, Lubricating eye ointment'
    },
    'skin rash': {
        diagnosis: 'Possible conditions: Dermatitis, Eczema, Fungal infection',
        recommendations: 'Keep area clean and dry, avoid irritants, use steroid cream',
        medicines: 'Hydrocortisone cream, Clotrimazole, Calamine lotion'
    },
    'body pain': {
        diagnosis: 'Possible conditions: Muscle strain, Flu, Arthritis',
        recommendations: 'Rest, apply heat/ice, gentle stretching',
        medicines: 'Ibuprofen (400mg), Diclofenac, Muscle relaxants'
    },
    'nausea': {
        diagnosis: 'Possible conditions: Food poisoning, Migraine, Pregnancy',
        recommendations: 'Eat light meals, stay hydrated, rest',
        medicines: 'Ginger, Domperidone, Anti-nausea medication'
    },
    'dizziness': {
        diagnosis: 'Possible conditions: Low blood pressure, Dehydration, Inner ear problem',
        recommendations: 'Lie down, stay hydrated, move slowly',
        medicines: 'Ginger tea, Electrolyte solution'
    },
    'fatigue': {
        diagnosis: 'Possible conditions: Anemia, Thyroid disorder, Sleep deprivation',
        recommendations: 'Get adequate sleep, eat nutritious food, exercise',
        medicines: 'Iron supplement, Vitamin B12, Energy drinks'
    },
    'insomnia': {
        diagnosis: 'Possible conditions: Sleep disorder, Stress, Caffeine intake',
        recommendations: 'Maintain sleep schedule, relax before bed, avoid screens',
        medicines: 'Melatonin, Valerian root, Chamomile tea'
    },
    'anxiety': {
        diagnosis: 'Possible conditions: Anxiety disorder, Stress',
        recommendations: 'Practice meditation, deep breathing, yoga',
        medicines: 'Consult psychiatrist, Anti-anxiety medication if needed'
    },
    'depression': {
        diagnosis: 'Possible conditions: Depression, Mood disorder',
        recommendations: 'Seek professional help, exercise, social support',
        medicines: 'Consult mental health professional'
    },
    'bleeding': {
        diagnosis: 'URGENT: Possible serious condition',
        recommendations: 'SEEK IMMEDIATE MEDICAL ATTENTION!',
        medicines: 'Go to nearest hospital immediately'
    }
};

// Analyze symptoms endpoint
app.post('/analyze-symptoms', (req, res) => {
    const { symptoms } = req.body;
    const lowerSymptoms = symptoms.toLowerCase();
    
    let result = {
        diagnosis: 'Please consult with a healthcare professional',
        recommendations: 'Visit a nearby hospital for proper diagnosis',
        medicines: 'Cannot recommend without proper examination'
    };

    // Check symptoms database
    for (let key in symptomDatabase) {
        if (lowerSymptoms.includes(key)) {
            result = symptomDatabase[key];
            break;
        }
    }

    res.json(result);
});

// Medicines endpoint
app.get('/medicines', (req, res) => {
    const medicines = require('./medicines.json');
    res.json(medicines);
});

// Search medicines
app.get('/search-medicines', (req, res) => {
    const { query } = req.query;
    const medicines = require('./medicines.json');
    
    const results = medicines.medicines.filter(m => 
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.uses.toLowerCase().includes(query.toLowerCase())
    );
    
    res.json(results);
});

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🏥 Health Diagnostic App running on http://localhost:${PORT}`);
    console.log('Make sure medicines.json is in the same directory as server.js');
});
