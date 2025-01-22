import patient1 from "../assets/Doctor-Patients/Patient-1.avif";
import patient2 from "../assets/Doctor-Patients/Patient-2.avif";
import patient3 from "../assets/Doctor-Patients/Patient-3.avif";
import patient4 from "../assets/Doctor-Patients/Patient-4.avif";
import patient5 from "../assets/Doctor-Patients/Patient-5.avif";

const patientsData = [
    {
        id: 1,
        name: "Ashish",
        age: 45,
        gender: "Male",
        disease: "Heart Failure",
        detailedDisease: "Congestive Heart Failure with reduced ejection fraction",
        treatments: [
            "Beta-blockers",
            "ACE inhibitors",
            "Lifestyle changes"
        ],
        form: "Chronic",
        tests: [
            "Echocardiogram",
            "Chest X-Ray",
            "Blood testss (BNP levels)"
        ],
        pic: patient1,
        date: "10/01/25",
    },
    {
        id: 2,
        name: "Pooja",
        age: 32,
        gender: "Female",
        disease: "Diabetes",
        detailedDisease: "Type 2 Diabetes Mellitus",
        treatments: [
            "Metformin",
            "Insulin therapy",
            "Diet and exercise"
        ],
        form: "Chronic",
        tests: [
            "HbA1c",
            "Fasting Blood Glucose",
            "Lipid Profile"
        ],
        pic: patient2,
        date: "12/01/25",
    },
    {
        id: 3,
        name: "Ravi",
        age: 50,
        gender: "Male",
        disease: "Hypertension",
        detailedDisease: "Chronic high blood pressure with risk of heart disease",
        treatments: [
            "Calcium channel blockers",
            "Lifestyle changes"
        ],
        form: "Remission",
        tests: [
            "Blood Pressure Monitoring",
            "ECG",
            "Kidney Function tests"
        ],
        pic: patient3,
        date: "15/01/25",
    },
    {
        id: 4,
        name: "Sakshi",
        age: 28,
        gender: "Female",
        disease: "Asthma",
        detailedDisease: "Allergic asthma triggered by environmental allergens",
        treatments: [
            "Inhalers (Bronchodilators)",
            "Steroids",
            "Avoiding triggers"
        ],
        form: "Acute",
        tests: [
            "Pulmonary Function tests",
            "Allergy testsing",
            "Peak Flow Meter"
        ],
        pic: patient4,
        date: "18/01/25",
    },
    {
        id: 5,
        name: "Vikram",
        age: 60,
        gender: "Male",
        disease: "Arthritis",
        detailedDisease: "Osteoarthritis in knees causing severe pain",
        treatments: [
            "Pain relief medications",
            "Physical therapy",
            "Joint replacement"
        ],
        form: "Chronic",
        tests: [
            "X-Ray",
            "MRI",
            "Joint Aspiration tests"
        ],
        pic: patient5,
        date: "20/01/25",
    },
    {
        id: 6,
        name: "Nisha",
        age: 38,
        gender: "Female",
        disease: "Migraine",
        detailedDisease: "Chronic migraine with aura",
        treatments: [
            "Pain relievers",
            "Preventive medication",
            "Avoiding triggers"
        ],
        form: "Remission",
        tests: [
            "MRI",
            "CT Scan",
            "Neurological Exam"
        ],
        pic: patient1,
        date: "22/01/25",
    },
    {
        id: 7,
        name: "Rahul",
        age: 29,
        gender: "Male",
        disease: "Anxiety",
        detailedDisease: "Generalized Anxiety Disorder with panic episodes",
        treatments: [
            "Cognitive Behavioral Therapy (CBT)",
            "SSRIs"
        ],
        form: "Chronic",
        tests: [
            "Psychiatric Evaluation",
            "Anxiety Scales"
        ],
        pic: patient2,
        date: "25/01/25",
    },
    {
        id: 8,
        name: "Aman",
        age: 33,
        gender: "Male",
        disease: "Depression",
        detailedDisease: "Major depressive disorder with insomnia",
        treatments: [
            "Psychotherapy",
            "Antidepressants"
        ],
        form: "Acute",
        tests: [
            "Depression Scales",
            "Sleep Study"
        ],
        pic: patient3,
        date: "28/01/25",
    },
    {
        id: 9,
        name: "Kavya",
        age: 40,
        gender: "Female",
        disease: "Thyroid Disorder",
        detailedDisease: "Hypothyroidism caused by Hashimoto's Thyroiditis",
        treatments: [
            "Hormone replacement therapy",
            "Regular monitoring"
        ],
        form: "Chronic",
        tests: [
            "TSH",
            "T3",
            "Thyroid Antibodies"
        ],
        pic: patient4,
        date: "30/01/25",
    },
    {
        id: 10,
        name: "Sneha",
        age: 52,
        gender: "Female",
        disease: "Back Pain",
        detailedDisease: "Lower back pain caused by degenerative disc disease",
        treatments: [
            "Physical therapy",
            "Pain relief medication",
            "Surgery if necessary"
        ],
        form: "Chronic",
        tests: [
            "X-Ray",
            "MRI",
            "Nerve Conduction Study"
        ],
        pic: patient5,
        date: "02/02/25",
    },
    {
        id: 11,
        name: "Arjun",
        age: 47,
        gender: "Male",
        disease: "Fatigue Syndrome",
        detailedDisease: "Severe fatigue not alleviated by rest",
        treatments: [
            "Graded exercise therapy",
            "Symptom management"
        ],
        form: "Chronic",
        tests: [
            "Sleep Study",
            "Complete Blood Count (CBC)",
            "Thyroid Function tests"
        ],
        pic: patient1,
        date: "05/02/25",
    },
    {
        id: 12,
        name: "Meera",
        age: 35,
        gender: "Female",
        disease: "COPD",
        detailedDisease: "Chronic Obstructive Pulmonary Disease caused by smoking",
        treatments: [
            "Inhalers",
            "Oxygen therapy",
            "Pulmonary rehabilitation"
        ],
        form: "Chronic",
        tests: [
            "Spirometry",
            "Chest X-Ray",
            "Arterial Blood Gas"
        ],
        pic: patient2,
        date: "08/02/25",
    },
    {
        id: 13,
        name: "Tarun",
        age: 60,
        gender: "Male",
        disease: "Parkinson’s Disease",
        detailedDisease: "Neurodegenerative disorder causing tremors and rigidity",
        treatments: [
            "Levodopa",
            "Physical therapy"
        ],
        form: "Chronic",
        tests: [
            "Neurological Exam",
            "MRI",
            "Dopamine Transporter Scan"
        ],
        pic: patient3,
        date: "10/02/25",
    },
    {
        id: 14,
        name: "Ritika",
        age: 42,
        gender: "Female",
        disease: "Osteoporosis",
        detailedDisease: "Severe bone density loss causing fractures",
        treatments: [
            "Calcium and vitamin D supplements",
            "Bone density medications"
        ],
        form: "Chronic",
        tests: [
            "Bone Density Scan (DEXA)",
            "Vitamin D Level tests"
        ],
        pic: patient4,
        date: "15/02/25",
    },
    {
        id: 15,
        name: "Deepak",
        age: 55,
        gender: "Male",
        disease: "Kidney Disease",
        detailedDisease: "Stage 3 CKD caused by diabetes and hypertension",
        treatments: [
            "Dietary changes",
            "Medication to manage blood pressure",
            "Dialysis if required"
        ],
        form: "Remission",
        tests: [
            "Blood Urea",
            "Creatinine",
            "Urinalysis"
        ],
        pic: patient5,
        date: "20/02/25",
    },
];

export default patientsData;
