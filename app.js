const diagnoses = [
    { name: "Common Cold", symptoms: ["cough", "fatigue", "sore throat", "runny nose"] },
    { name: "Flu", symptoms: ["fever", "cough", "fatigue", "muscle aches"] },
    { name: "Migraine", symptoms: ["headache", "nausea", "light sensitivity", "blurred vision"] },
    { name: "COVID-19", symptoms: ["fever", "cough", "fatigue", "headache", "loss of taste"] },
    { name: "Food Poisoning", symptoms: ["nausea", "vomiting", "diarrhea", "abdominal pain"] },
    { name: "Allergies", symptoms: ["runny nose", "sneezing", "itchy eyes", "rash"] },
    { name: "Pneumonia", symptoms: ["fever", "chest pain", "cough", "shortness of breath"] },
];

function filterDiagnosis() {
    const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-checkbox:checked'))
                                   .map(cb => cb.value);
    const selectedAge = document.getElementById('age').value;
    const selectedGender = document.getElementById('gender').value;

    const matchedDiagnoses = diagnoses.filter(diagnosis => {
        if (selectedAge === 'child' && diagnosis.name === "Migraine") {
            return false; 
        }
        if (selectedGender === 'male' && diagnosis.name === "Ovarian Cancer") {
            return false; 
        }

        return selectedSymptoms.every(symptom => diagnosis.symptoms.includes(symptom));
    });

    const resultsList = document.getElementById('diagnosis-list');
    resultsList.innerHTML = ''; 

    if (matchedDiagnoses.length > 0) {
        matchedDiagnoses.forEach(diagnosis => {
            const listItem = document.createElement('li');
            listItem.textContent = diagnosis.name;
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.innerHTML = '<li>No matching diagnoses found. Try adjusting your symptoms.</li>';
    }
}
