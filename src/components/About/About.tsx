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
    },
    {
      title: "Senior Software Engineer",
      company: "Indra Philippines Inc",
      duration: "March 2022 - June 2024",
      responsibilities: [
        "Build and maintained web aplication of Air Asia Hotel and Snap LOB and using React, TypeScript, and Redux.",
        "Builld and maintained mobile application of  using React Native and Expo.",
      ],
    },
    {
      title: "Senior Analyst",
      company: "Accenture Inc.",
      duration: "Oct 2020 - Feb 2022",
      responsibilities: [
        "Successfully spearheaded the integration of a Udemy-like feature into the AICPA website, employing cutting-edge technologies such as React JS for frontend development, implementing strategic Redux actions for efficient state management, and orchestrating a robust NodeJS backend. Innovatively utilized Docker for seamless deployment.",
        "Demonstrated commitment to code excellence through daily Git utilization and rigorous code reviews before merging. Actively participated in daily SCRUM meetings to ensure project alignment and progress.",
      ],
    },
    {
      title: "Web Developer",
      company: "Venteny Inc .",
      duration: "Nov 2019 - May 2020",
      responsibilities: [
        "Enhanced and maintained features on the existing website, demonstrating proficiency in Ruby on Rails backend development and implementing RSpec for rigorous testing.",
        "Ensured code excellence through daily Git usage and meticulous code reviews before merging. Actively contributed to project success with daily SCRUM participation, comprehensive project documentation on Confluence, and efficient repository management on GitHub.",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Jump Digital Asia Pte. Ltd.",
      duration: "June 2018 - Oct 2019",
      responsibilities: [
        "Led frontend development using ReactJS, demonstrated expertise in integrating GraphQL with backend technology, and adeptly constructed web applications using Ruby on Rails, contributing to the overall advancement and innovation of projects.",
      ],
    },
  ];
  return (
    <div className="w-full" id="about">
      <div className="w-full flex p-20">
        <div className="flex flex-col p-[50px] gap-2 w-full md:w-[70%] justify-center">
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
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="HTML5"
                  className="w-16 h-16 grayscale"
                />
                <span>HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="CSS3"
                  className="w-16 h-16 grayscale"
                />
                <span>CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-16 h-16 grayscale"
                />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="React"
                  className="w-16 h-16 grayscale"
                />
                <span>React</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-16 h-16 grayscale"
                />
                <span>TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
                  alt="Git"
                  className="w-16 h-16 grayscale"
                />
                <span>Git</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                  className="w-16 h-16 grayscale"
                />
                <span>GraphQL</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="Redux"
                  className="w-16 h-16 grayscale"
                />
                <span>Redux</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Node.js"
                  className="w-16 h-16 grayscale"
                />
                <span>Node.js</span>
              </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
