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

checked')).map(checkbox => checkbox.value);

    // Filter and categorize diseases based on symptoms
    const possibleDiagnoses = [];
    const ruledOutDiseases = [];

    diagnoses.forEach(diagnosis => {
        const matchSymptoms = selectedSymptoms.filter(symptom => diagnosis.symptoms.includes(symptom));
        if (matchSymptoms.length === selectedSymptoms.length) {
            possibleDiagnoses.push(diagnosis.name);
        } else {
            ruledOutDiseases.push(diagnosis.name);
        }
    });

    // Update the diagnosis list at the top
    const diagnosisList = document.getElementById('diagnosis-list');
    diagnosisList.innerHTML = '';
    possibleDiagnoses.sort().forEach(diagnosis => {
        const li = document.createElement('li');
        li.textContent = diagnosis;
        diagnosisList.appendChild(li);
    });

    // Update the list of all diseases at the bottom
    const diseaseList = document.getElementById('disease-list');
    diseaseList.innerHTML = '';
    
    // Move possible diagnoses to the top (in green) and ruled out to the bottom (in yellow)
    possibleDiagnoses.sort().forEach(disease => {
        const li = document.createElement('li');
        li.textContent = disease;
        li.classList.add('possible');
        diseaseList.appendChild(li);
    });

    const remainingDiseases = allDiseases.filter(disease => !possibleDiagnoses.includes(disease));
    ruledOutDiseases.sort().forEach(disease => {
        const li = document.createElement('li');
        li.textContent = disease;
        li.classList.add('ruled-out');
        diseaseList.appendChild(li);
    });
    
    remainingDiseases.sort().forEach(disease => {
        if (!ruledOutDiseases.includes(disease)) {
            const li = document.createElement('li');
            li.textContent = disease;
            diseaseList.appendChild(li);
        }
    });
}
                                                                
                                                                  
