import GithubLogo from "../icons/socials/GithubLogo";
import YoutubeLogo from "../icons/socials/YoutubeLogo";

const projects = [
    {
      id: 4,
      title: "Snapville",
      img: "./projects/snapville/window.png",
      type: "featured",
      desc: "A distributed image server",
      text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."],
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
      id: 5,
      title: "Weenix",
      img: "./projects/weenix/weenix.png",
      desc: "A lightweight linux operating system kernel",
      text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."],
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
      text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."],
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
      type: "featured",
      desc: "A web based music player",
      text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."],
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
      text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."],
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
      text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."],
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
      text: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."],
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