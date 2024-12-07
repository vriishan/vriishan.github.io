import GithubLogo from "../icons/socials/GithubLogo";
import YoutubeLogo from "../icons/socials/YoutubeLogo";

const projects = [
    {
      id: 4,
      title: "Snapville",
      img: "./projects/snapville/window.png",
      desc: "A distributed image server",
      text: ["Snapville is a distributed image server application. It offers a platform where users can upload, search, and view images efficiently.", "The application features both user and admin functionalities. Users can register, log in, upload images, search by title, tags, or user, and view images in full format. The admin has additional privileges, such as managing all users and their images, providing a higher level of control over the platform.", "Snapville's architecture includes a backend built with Django, which handles REST APIs and database interactions via PostgreSQL. The frontend, developed in React, manages user interactions and communicates with the backend to fetch and display images. The system utilizes a sharded database setup to ensure scalability, storing images locally for efficient access."],
      techStack: [
        "Django",
        "React",
        "PostgreSQL",
        "Shell",
        "HTML",
        "CSS",
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/snapville",
          logo: GithubLogo
        },
        {
          text: "View Demo",
          link: "https://youtu.be/U_wEC_3AXXA",
          logo: YoutubeLogo
        }
      ]
    },
    {
      id: 7,
      title: "CryptoBoard",
      img: "./projects/cryptoboard/cryptoboard.png",
      desc: "Real-time cryptocurrency dashboard to analyse crypto prices, trends and news",
      text: ["CryptoBoard is a real-time cryptocurrency dashboard built to track live data from various digital assets using a custom-built crawler. The crawler scrapes data from multiple sources, storing it in MongoDB for efficient querying and persistence. Docker containers for each type of service ensure a scalable and consistent deployment across environments, while React provides a dynamic user interface to display key metrics like prices, market trends, and trading volumes.", "The architecture is designed for flexibility, allowing for easy updates and maintenance. CryptoBoard offers a seamless experience for users to monitor cryptocurrency data and ingest crypto information to make better insights and decisions on their portfolio."],
      techStack: [
        "Django",
        "React",
        "MongoDB",
        "Python",
        "Docker"
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/CryptoBoard",
          logo: GithubLogo
        },
      ]
    },
    {
      id: 5,
      title: "Weenix",
      img: "./projects/weenix/weenix.png",
      desc: "A lightweight linux operating system kernel",
      text: ["This project involved designing and implementing key components of a Unix-like operating system kernel, focusing on essential functionalities such as process management, file systems, and virtual memory management.", "This foundational work included the development of process control blocks, handling inter-process communication, page tables, memory allocation strategies and implementing kernel threading, which are critical for enabling multitasking and process isolation within the kernel.", "Throughout the project, significant emphasis was placed on debugging using GDB and unit testing to ensure system stability and reliability. "],
      techStack: [
        "C",
        "Makefile",
        "Shell",
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/csci402-weenix-kernel",
          logo: GithubLogo
        }
      ]
    },
    {
      id: 6,
      title: "USC TPSRM - Data Sync",
      img: "./projects/tpsrm/tpsrm.jpg",
      desc: "A data sync solution for USC ITS' OCISO risk management platforms: Upgaurd, CyberGRX and Audtiboard",
      text: ["This project aims to automate the inventory synchronization within various TPSRM tools, including UpGuard, CyberGRX, and AuditBoard, using API based automation scripts.", "The scripts will pull data from the platforms, find matching entities, and update the necessary fields, leveraging Supplier ID as a unique identifier. These scripts can be run or set as a scheduled job every week, simplifying the process of keeping data consistent across UpGuard and AuditBoard.", "By automating these tasks, the project significantly reduces the labor-intensive process, saving approximately 40 hours per month. Work is currently underway to turn this into a web application to further streamline the process and reduce the technical barriers for managerial users."],
      techStack: [
        "Python",
        "React",
        "HTML",
        "CSS",
        "Cron"
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/tpsrm-automation",
          logo: GithubLogo
        }
      ]
    },
    {
      id: 7,
      title: "Overture",
      img: "./projects/overture/window.png",
      desc: "A web based music player",
      text: ["This project showcases the creation of an online music library using relational database management systems (RDBMS) and a robust front/back end setup. Users can access a database of music categorized by albums and artists, view top tracks, search across songs, albums, and artists, manage playlists and their profile.", "The backend uses MySQL for data management, while the front end employs HTML, CSS, and JavaScript for an interactive user interface. PHP handles server-side scripting to facilitate communication between the web server and the database. This setup ensures efficient data handling, secure interactions, and seamless music playback with no interruptions when navigating."],
      techStack: [
        "PHP",
        "JQuery",
        "Javascript",
        "MySQL",
        "HTML",
        "CSS",
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/Overture",
          logo: GithubLogo
        },
        {
          text: "View Demo",
          link: "https://youtu.be/J97Sz7gA2ZE",
          logo: YoutubeLogo
        }
      ]
    },
    {
      id: 1,
      title: "Screening of Paroxysmal Atrial Fibrillation",
      img: "./projects/classifier/classifier.png",
      desc: "A machine learning model to classify patients for atrial fibrillation (arrythmia) based on ECG samples",
      text: ["This project focuses on developing a screening system for Paroxysmal Atrial Fibrillation (PAF) using advanced machine learning techniques. PAF, a type of atrial fibrillation characterized by irregular atrial contractions, affects millions worldwide. Traditional detection methods rely on hand-crafted features from ECG signals, using algorithms like support vector machines (SVMs) and hidden Markov models (HMMs). These methods are often time-consuming, require deep domain expertise, and can be error-prone due to the subject-dependent nature of ECG signals.", "To address these limitations, the project employs Convolutional Neural Networks (CNNs) to automatically learn features directly from ECG time-series signals, reducing the dependency on expert knowledge and enhancing detection reliability", "The implementation involves a five-layer CNN architecture developed using Python and Theano, trained over 50 epochs. The CNN serves as a feature extractor, with its outputs used to train various classifiers, including SVM and Multilayer Perceptron (MLP) networks. The CNN achieved stable classification error after 50 epochs, and the SVM, using a Gaussian kernel, achieved training and testing classification errors of 0.83% and 10%, respectively. The MLP classifier, with one hidden layer, achieved the highest accuracy of 82%."],
      techStack: [
        "Python",
        "Keras",
        "Pandas",
        "Numpy",
        "Theano",
        "TensorFlow",
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/paf-classifier",
          logo: GithubLogo
        }
      ]
    },
    {
      id: 2,
      title: "Flappy Bird",
      img: "./projects/flappybird/game.png",
      desc: "The popular side scroller casual game made with .NET",
      text: ["This implementation of Flappy Bird is developed in C#, aiming to understand the mechanics and development of such simple yet engaging games using a robust and versatile language.", "The game is a side-scroller where the objective is to direct a flying bird through sets of Mario-like pipes without touching them. The bird flaps upward each time the player presses the up key and falls due to gravity when the key is not pressed. Each successfully navigated pair of pipes earns the player a point, with medals awarded based on the final score.", "Aside from the core gameplay, it includes a live score updater, a high score list, and a menu GUI. By leveraging various features of C#—such as events, GUI elements, and timers—the dynamic elements of the game come to life."],
      techStack: [
        "C#",
        ".NET Framework"
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/flappy-bird",
          logo: GithubLogo
        }
      ]
    },
    {
      id: 3,
      title: "Snake",
      img: "./projects/snake/snake.png",
      desc: "The classic snake game",
      text: ["This project involves designing and implementing a traditional Snake game in 2D using the GLUT toolkit within the OpenGL API for the Windows platform.", "This implementation features a modular approach to development, utilizing C++ with header files to declare and define the variables and functions used throughout the game. The main game screen displays the snake, the fruit, a bordered window, and a live score counter, which updates as the snake collects more fruits.", "The game includes a user-friendly GUI with a menu screen that offers options to start the game, view high scores, or quit. Additional screens indicate game over and provide options to return to the main menu or exit the game, enhancing the overall user experience."],
      techStack: [
        "C++",
        "OpenGL"
      ],
      links: [
        {
          text: "Source Code",
          link: "https://github.com/vriishan/Snake",
          logo: GithubLogo
        }
      ]
    }
  ];

export default projects;