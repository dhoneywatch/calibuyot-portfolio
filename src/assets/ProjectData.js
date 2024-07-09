import portfolioHome from "../assets/portfolio/portfolio-homepage.png";
import predictedHome from "../assets/predicted/home-page-2.png";
import predictedInput from "../assets/predicted/sample-input.png";
import predictedOutput from "../assets/predicted/sample-output.png";
import radHome from "../assets/radappoint/home-page.png";
import radLogin from "../assets/radappoint/patient-login.png";
import radBook from "../assets/radappoint/booking-page.png";
import radPortal from "../assets/radappoint/internal-portal.png";
import radRegister from "../assets/radappoint/patient-register.png";
import radAppointments from "../assets/radappoint/patient-appointment-list.png";

const projects = [
    {
        title: "My Portfolio",
        text: "This portfolio website was built using React.js, marking my first project with this library. This site showcases my skills, projects, and experiences in web development and machine learning. It served as a valuable practice to deepen my understanding of React, demonstrating my ability to create dynamic and responsive web applications.",
        tags: ["React", "HTML", "CSS", "JavaScript", "Web Development"],
        img: [{
            src: portfolioHome,
            caption: "Dhone's portfolio - Home page"
        }]
    },

    {
        title: "PredictED",
        text: "PredictED is a web application developed as part of my thesis, PredictED: An Explainable ESI Level Classification and Length of Stay Prediction using Machine Learning. This tool deploys Machine Learning models to classify the Emergency Severity Index (ESI) level and predict the patient’s Length of Stay (LOS) in the Emergency Department (ED). Designed for medical and nursing students, PredictED aids in quick and accurate triage, decision-making, and resource preparation amidst ED overcrowding and bed shortages. It allows users to input relevant triage data and provides the predicted ESI level, explanations from Explainable AI, and the potential LOS.",
        tags: ["Machine Learning", "Python", "Flask", "HTML", "CSS", "JavaScript", "Web Development"],
        img: [{
            src: predictedHome,
            caption: "PredictED - Home page"
        },
        {
            src: predictedInput,
            caption: "PredictED - Sample Input"
        },
        {
            src: predictedOutput,
            caption: "PredictED - Sample Output"
        }
    ]
    },

    {
        title: "RadAppoint",
        text: "RadAppoint is a web-based booking solution tailored for scheduling laboratory appointments, particularly for Radiology services. Developed using the Laravel framework, this system ensures efficiency, security, and scalability. It features three internal user roles: Administrator for managing user accounts, Approver for validating appointment requests, and Radiologist for managing appointment statuses. Additionally, the system provides a user-friendly interface for patients to schedule their radiology appointments online.",
        tags: ["Web Development", "Laravel", "Blade", "HTML", "CSS", "JavaScript"],
        img: [{
            src: radHome,
            caption: "RadAppoint's Home page"
        },
        {
            src: radRegister,
            caption: "Patient Registration Form"
        },
        {
            src: radLogin,
            caption: "Patient Login Form"
        },
        {
            src: radBook,
            caption: "Booking Page"
        },
        {
            src: radAppointments,
            caption: "List of Patient's Appointments"
        },
        {
            src: radPortal,
            caption: "Login Portal for Internal Users"
        }
    ]
    },

    {
        title: "Parkinson's Disease",
        text: "The study entitled, \"Feature Selection Techniques Applied to Voice-Based Prediction of Parkinson's Disease\" is a machine learning project co-authored with Vincent Peter Magboo, M.Sc., M.D., Emmanuel Ednalan, and Nathaniel Ortega. This work is currently considered for the 2024 Fifteenth International Conference on Ubiquitous and Future Networks. The project focuses on enhancing the accuracy of Parkinson's Disease prediction through the application of feature selection techniques to vocal data, aiming to identify key vocal features that serve as reliable indicators for early diagnosis and intervention.",
        tags: ["Machine Learning", "Python"],
        img: [{
            src: portfolioHome,
            caption: "Dhone's portfolio - Home page"
        }]
    },
];

export default projects;