const diagnoses = [
    { name: "Common Cold", symptoms: ["cough", "fatigue", "sore throat", "runny nose"] },
    { name: "Flu", symptoms: ["fever", "cough", "fatigue", "muscle aches"] },
    { name: "Migraine", symptoms: ["headache", "nausea", "light sensitivity", "blurred vision"] },
    { name: "COVID-19", symptoms: ["fever", "cough", "fatigue", "headache", "loss of taste"] },
    { name: "Food Poisoning", symptoms: ["nausea", "vomiting", "diarrhea", "abdominal pain"] },
    { name: "Allergies", symptoms: ["runny nose", "sneezing", "itchy eyes", "rash"] },
    { name: "Pneumonia", symptoms: ["fever", "chest pain", "cough", "shortness of breath"] },
];

// List of all diseases for the bottom section
let allDiseases = diagnoses.map(diagnosis => diagnosis.name).sort();

function filterDiagnosis() {
    const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-checkbox:
