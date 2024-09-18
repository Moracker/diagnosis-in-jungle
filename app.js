// List of possible diagnoses with their associated symptoms
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
const allDiseases = diagnoses.map(diagnosis => diagnosis.name).sort();

// Function to filter diagnoses based on selected symptoms
function filterDiagnosis() {
    // Get selected symptoms from checkboxes
    const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-checkbox:checked')).map(checkbox => checkbox.value);

    // Arrays to store possible and ruled-out diagnoses
    const possibleDiagnoses = [];
    const ruledOutDiseases = [];

    // Classify diagnoses based on selected symptoms
    diagnoses.forEach(diagnosis => {
        const matchingSymptoms = selectedSymptoms.filter(symptom => diagnosis.symptoms.includes(symptom));
        if (matchingSymptoms.length === selectedSymptoms.length) {
            possibleDiagnoses.push(diagnosis.name);
        } else {
            ruledOutDiseases.push(diagnosis.name);
        }
    });

    // Display possible diagnoses
    const diagnosisList = document.getElementById('diagnosis-list');
    diagnosisList.innerHTML = ''; // Clear previous list
    possibleDiagnoses.sort().forEach(diagnosis => {
        const li = document.createElement('li');
        li.textContent = diagnosis;
        diagnosisList.appendChild(li);
    });

    // Display all diseases with ruled-out ones at the bottom
    const diseaseList = document.getElementById('disease-list');
    diseaseList.innerHTML = ''; // Clear previous list

    possibleDiagnoses.sort().forEach(disease => {
        const li = document.createElement('li');
        li.textContent = disease;
        li.style.color = 'green'; // Possible diagnoses in green
        diseaseList.appendChild(li);
    });

    ruledOutDiseases.sort().forEach(disease => {
        const li = document.createElement('li');
        li.textContent = disease;
        li.style.color = 'yellow'; // Ruled-out diagnoses in yellow
        diseaseList.appendChild(li);
    });
}

// Add event listener to the "Find Diagnosis" button
document.getElementById('diagnosis-button').addEventListener('click', filterDiagnosis);
