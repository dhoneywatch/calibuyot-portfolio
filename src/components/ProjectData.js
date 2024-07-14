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
import confPaper from "../assets/conference/feature-names.png";
import confPublication from "../assets/conference/feature-conf.png";
import trackLogin from "../assets/tracker/login.jpg";
import trackLanding from "../assets/tracker/tracker.jpg";
import trackCreate from "../assets/tracker/create.jpg";
import trackEdit from "../assets/tracker/edit.jpg";
import trackView from "../assets/tracker/view.jpg";
import trackGenerate from "../assets/tracker/generate.jpg";
import deepLogin from "../assets/deepdr/login.jpg";
import deepLanding from "../assets/deepdr/landing.jpg";
import deepInput from "../assets/deepdr/input.jpg";
import deepOutput from "../assets/deepdr/output.jpg";
import deepRecords from "../assets/deepdr/records.jpg";

const projects = [
    {
        title: "My Portfolio",
        text: "This portfolio website was built using React.js, marking my first project with this library. This site showcases my skills, projects, and experiences in web development and machine learning. It served as a valuable practice to deepen my understanding of React, demonstrating my ability to create dynamic and responsive web applications.",
        tags: ["React", "HTML", "CSS", "JavaScript", "Web Development"],
        img: [
            {
                src: portfolioHome,
                caption: "Home section",
            },
        ],
    },

    {
        title: "PredictED",
        text: "PredictED is a web application developed as part of my thesis, PredictED: An Explainable ESI Level Classification and Length of Stay Prediction using Machine Learning. This tool deploys Machine Learning models to classify the Emergency Severity Index (ESI) level and predict the patient’s Length of Stay (LOS) in the Emergency Department (ED). Designed for medical and nursing students, PredictED aids in quick and accurate triage, decision-making, and resource preparation amidst ED overcrowding and bed shortages. It allows users to input relevant triage data and provides the predicted ESI level, explanations from Explainable AI, and the potential LOS.",
        tags: [
            "Machine Learning",
            "Python",
            "Flask",
            "HTML",
            "CSS",
            "JavaScript",
            "Web Development",
        ],
        img: [
            {
                src: predictedHome,
                caption: "Home page",
            },
            {
                src: predictedInput,
                caption: "Predict Page with sample input",
            },
            {
                src: predictedOutput,
                caption: "Results Page with sample output",
            },
        ],
    },

    {
        title: "RadAppoint",
        text: "RadAppoint is a web-based booking solution tailored for scheduling laboratory appointments, particularly for Radiology services. Developed using the Laravel framework, this system ensures efficiency, security, and scalability. It features three internal user roles: Administrator for managing user accounts, Approver for validating appointment requests, and Radiologist for managing appointment statuses. Additionally, the system provides a user-friendly interface for patients to schedule their radiology appointments online.",
        tags: [
            "Web Development",
            "Laravel",
            "Blade",
            "HTML",
            "CSS",
            "JavaScript",
        ],
        img: [
            {
                src: radHome,
                caption: "Home page",
            },
            {
                src: radRegister,
                caption: "Patient Registration Form",
            },
            {
                src: radLogin,
                caption: "Patient Login Form",
            },
            {
                src: radBook,
                caption: "Booking Page",
            },
            {
                src: radAppointments,
                caption: "List of Patient's Appointments",
            },
            {
                src: radPortal,
                caption: "Login Portal for Internal Users",
            },
        ],
    },

    {
        title: "Parkinson's Disease",
        text: "The study entitled, \"Feature Selection Techniques Applied to Voice-Based Prediction of Parkinson's Disease\" is a machine learning project co-authored with Vincent Peter Magboo, M.Sc., M.D., Emmanuel Ednalan, and Nathaniel Ortega. This work is currently considered for the 2024 Fifteenth International Conference on Ubiquitous and Future Networks. The project focuses on enhancing the accuracy of Parkinson's Disease prediction through the application of feature selection techniques to vocal data, aiming to identify key vocal features that serve as reliable indicators for early diagnosis and intervention.",
        tags: ["Machine Learning", "Python"],
        img: [
            {
                src: confPaper,
                caption: "Paper Title and Authors",
            },
            {
                src: confPublication,
                caption:
                    "2024 Fifteenth International Conference on Ubiquitous and Future Networks (ICUFN)",
            },
        ],
    },

    {
        title: "Ticket Tracker Mockup",
        text: "The ticket tracker mockup created using Figma is designed to provide an intuitive and organized interface for managing tasks. It includes a secure login page, ensuring each user can maintain their own set of ticket tasks. The mockup features four statuses: Newly Created, In Progress, Completed, and Expired/Cancelled, allowing users to easily track the progress of their tasks. This setup enables users to manage their tasks efficiently, stay organized, and remain well aware of their deadlines. Additionally, the mockup includes a layout for generating reports, helping users maintain a clear overview of their responsibilities and progress.",
        tags: ["Figma", "Mockup", "Web Designing"],
        img: [
            {
                src: trackLogin,
                caption: "Login Page Mockup",
            },
            {
                src: trackLanding,
                caption: "Landing Page/Ticket Tracker Page Mockup",
            },
            {
                src: trackCreate,
                caption: "Create Ticket Modal Mockup",
            },
            {
                src: trackView,
                caption: "View Ticket Modal Mockup",
            },
            {
                src: trackEdit,
                caption: "Edit Ticket Modal Mockup",
            },
            {
                src: trackGenerate,
                caption: "Generate Report Modal Mockup",
            },
        ],
    },

    {
        title: "DeepDR Mockup",
        text: "The DeepDR project is a collaborative effort to develop a web app that uses a deep learning model to detect and predict the presence of Diabetic Retinopathy from images. While the entire project involved teamwork, the mockup was specifically created by me. This mockup showcases an interface where users can upload retinal images to be analyzed by the model. The app aims to assist in early detection and diagnosis of Diabetic Retinopathy, potentially improving patient outcomes. Despite being a mockup, DeepDR demonstrates the practical application of deep learning in healthcare and highlights the potential for advanced medical diagnostics.",
        tags: ["Figma", "Mockup", "Web Designing"],
        img: [
            {
                src: deepLogin,
                caption: "Login Page Mockup",
            },
            {
                src: deepLanding,
                caption: "Landing Page Mockup",
            },
            {
                src: deepInput,
                caption: "Input Page Mockup",
            },
            {
                src: deepOutput,
                caption: "Output Page Mockup",
            },
            {
                src: deepRecords,
                caption: "Records Page Mockup",
            },
        ],
    },
];

export default projects;
