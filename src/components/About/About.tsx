import { TypeAnimation } from "react-type-animation";

const About = () => {
  const experiences = [
    {
      title: "Application Development Team Lead",
      company: "Accenture Inc.",
      duration: "Aug 2024 - Present",
      responsibilities: [
        "Developed page from scratch using React and TypeScript.",
        "Collaborated with designers, CMS and backend developers to deliver high-quality products.",
        "Sub lead a team of 5 developers, providing guidance and support to ensure project success.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Indra Philippines Inc",
      duration: "March 2022 - June 2024",
      responsibilities: [
        "Built and maintained web application of Air Asia Hotel and Snap LOB using React, TypeScript, and Redux.",
        "Built and maintained mobile application using React Native and Expo.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Redux",
        "React Native",
        "Expo",
        "GCP",
      ],
    },
    {
      title: "Senior Analyst",
      company: "Accenture Inc.",
      duration: "Oct 2020 - Feb 2022",
      responsibilities: [
        "Successfully spearheaded the integration of a Udemy-like feature into the AICPA website.",
        "Utilized Docker for seamless deployment and implemented strategic Redux actions for efficient state management.",
      ],
      techStack: ["React", "Redux", "Node.js", "Docker", "GraphQL", "AWS"],
    },
    {
      title: "Web Developer",
      company: "Venteny Inc.",
      duration: "Nov 2019 - May 2020",
      responsibilities: [
        "Enhanced and maintained features on the existing website using Ruby on Rails.",
        "Implemented RSpec for rigorous testing and ensured code excellence through daily Git usage.",
      ],
      techStack: ["Ruby on Rails", "Ruby", "RSpec", "Git"],
    },
    {
      title: "Junior Web Developer",
      company: "Jump Digital Asia Pte. Ltd.",
      duration: "June 2018 - Oct 2019",
      responsibilities: [
        "Led frontend development using ReactJS and integrated GraphQL with backend technology.",
      ],
      techStack: ["React", "GraphQL", "Ruby on Rails"],
    },
  ];
  const skills = [
    {
      imagePath: "html5/html5-original-wordmark.svg",
      altText: "HTML5",
    },
    {
      imagePath: "css3/css3-original-wordmark.svg",
      altText: "CSS3",
    },
    {
      imagePath: "javascript/javascript-original.svg",
      altText: "JavaScript",
    },
    {
      imagePath: "react/react-original-wordmark.svg",
      altText: "React",
    },
    {
      imagePath: "typescript/typescript-original.svg",
      altText: "TypeScript",
    },
    {
      imagePath: "git/git-original-wordmark.svg",
      altText: "Git",
    },
    {
      imagePath: "graphql/graphql-plain.svg",
      altText: "GraphQL",
    },
    {
      imagePath: "redux/redux-original.svg",
      altText: "Redux",
    },

    {
      imagePath: "nodejs/nodejs-original-wordmark.svg",
      altText: "Node.js",
    },
  ];

  return (
    <div className="w-full" id="about">
      <div className="w-full p-[50px] flex md:p-20">
        <div className="flex flex-col gap-2 w-full md:w-[70%] justify-center">
          <TypeAnimation
            sequence={[
              "Front-End React Developer",
              2000,
              "Dog Lover",
              2000,
              "Gamer",
              2000,
              "Cat Lover",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-3xl"
          />

          <span className="max-w-[400px]">
            <TypeAnimation
              sequence={[
                "Hi, I'm Alejandro De Guzman, a passionate Front-End React Developer based in Manila, Philippines",
                1000,
              ]}
              cursor={true}
            />
          </span>
          <span className="mt-4">
            <a
              href="https://www.linkedin.com/in/alejandro-de-guzman-380568170/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-gray-400 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 filter grayscale hover:filter-none transition duration-300"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.57c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54v6.22z" />
              </svg>
            </a>
          </span>
        </div>
        <div className="w-[30%] hidden md:block">
          <img
            src="https://img.freepik.com/premium-photo/3d-model-animation-cartooninspired-pop-selfportrait-with-adobe-illustrator_899449-65646.jpg?semt=ais_incoming&w=740&q=80"
            alt="coding"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full flex p-[50px] md:px-20 md:py-10">
        <div className="flex w-full gap-y-4 flex-col">
          <h1 className="text-2xl underline underline-offset-8 self-center">
            Tech Stack
          </h1>
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Existing Tech Stack */}
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill.imagePath}`}
                    alt={skill.altText}
                    className="w-16 h-16 filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Working Experience Section */}
      <div className="w-full flex p-[50px] md:px-20 md:py-10">
        <div className="flex w-full gap-y-4 flex-col">
          <h1 className="text-2xl underline underline-offset-8 self-center">
            Working Experience
          </h1>
          <div className="flex flex-col gap-6 mt-4">
            {experiences.map((experience, index) => (
              <div key={index} className="border-l-4 border-gray-800 pl-4">
                <h2 className="text-xl font-semibold">{experience.title}</h2>
                <p className="text-gray-600">
                  {experience.company} | {experience.duration}
                </p>
                <p className="text-gray-500">
                  {experience.responsibilities.map((responsibility, i) => (
                    <span key={i}>
                      - {responsibility}
                      <br />
                    </span>
                  ))}
                </p>
                <p className="text-gray-500 mt-2">
                  <strong>Tech Stack:</strong> {experience.techStack.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
