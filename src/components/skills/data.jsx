import AngularLogo from "../icons/tech/AngularLogo";
import ReactLogo from "../icons/tech/ReactLogo";
import JsLogo from "../icons/tech/JsLogo";
import DockerLogo from "../icons/tech/DockerLogo";
import KafkaLogo from "../icons/tech/KafkaLogo";
import MongoDBLogo from "../icons/tech/MongoDBLogo";
import PostgreLogo from "../icons/tech/PostgreLogo";
import SpringLogo from "../icons/tech/SpringLogo";
import JavaLogo from "../icons/tech/JavaLogo";
import K8sLogo from "../icons/tech/K8sLogo";
import AwsLogo from "../icons/tech/AwsLogo";
import PythonLogo from "../icons/tech/PythonLogo";
import RedisLogo from "../icons/tech/RedisLogo";
import DjangoLogo from "../icons/tech/DjangoLogo";
import ShellScriptLogo from "../icons/tech/ShellScriptLogo";


const skills = [
    {
      id: 2,
      title: "Backend",
      image: [SpringLogo, DjangoLogo, JavaLogo],
      description: "Experienced in developing scalable and efficient microservices exposing RESTful APIs and services. Extended backend applications into an event-driven environment spanning integrations with multiple tools and third party APIs."
    },
    {
      id: 1,
      title: "Frontend",
      image: [ReactLogo, AngularLogo, JsLogo],
      description: "Passionate about building clean interfaces and dashboards. Over 3 years of experience developing in HTML, CSS, JS, React and Angular frameworks. Built dynamic web forms and optimized performance of web applications."
    },
    {
      id: 6,
      title: "Scripting/Automation",
      image: [PythonLogo, ShellScriptLogo],
      description: "Automated various workflows and manual processes involving language translation, build processes, data provisioning, solution tenant creation and container configuration using Python and Shell scripts."
    },
    {
      id: 3,
      title: "Infra/Cloud",
      image: [AwsLogo, DockerLogo, K8sLogo],
      description: "Skilled in managing infrastructure with over 3 years of experience using AWS, Docker, and Kubernetes. Proficient in deploying applications to cloud environments, containerizing applications for consistency and portability, and orchestrating containerized workloads."
    },
    {
      id: 4,
      title: "Databases",
      image: [PostgreLogo, MongoDBLogo],
      description: "Handled database management and data design using PostgreSQL and MongoDB. Proficient in writing complex queries, optimizing database operations, and managing both relational and NoSQL databases to support various application needs."
    },
    {
      id: 5,
      title: "Pub/Sub",
      image: [KafkaLogo, RedisLogo],
      description: "Engineered performance with an event driven architecture brought by Kafka and Redis. Designed message schemas with Schema Registry and event workflow across multiple teams."
    }
  ];

export default skills;