/* "use client"; */

import Particles from "@/components/particles";
import BootstrapLogo from "@/public/img/bootstrap.webp";
import NextLogo from "@/public/img/next.png";
import NodeLogo from "@/public/img/nodejs.webp";
import Image from "next/image";
import ReactLogo from "/public/img/react.webp";
import ReduxLogo from "/public/img/redux.png";
import SassLogo from "@/public/img/sass.webp";
import Link from "next/link";
import MaterialLogo from "@/public/img/Material UI.png";

const skills = [
  {
    id: 0,
    name: "HTML5",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    experience: 5,
    unite: "Years",
    progress: 85,
  },
  {
    id: 1,
    name: "CSS3",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    experience: 5,
    unite: "Years",
    progress: 85,
  },
  {
    id: 2,
    name: "JavaScript",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    experience: 4,
    unite: "Years",
    progress: 60,
  },
  {
    id: 3,
    name: "TypeScript",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    experience: 4,
    unite: "Years",
    progress: 60,
  },
  {
    id: 4,
    name: "React",
    imageSrc: ReactLogo,
    experience: 2,
    unite: "Years",
    progress: 65,
  },
  {
    id: 5,
    name: "Next.js",
    imageSrc: NextLogo,
    experience: 2,
    unite: "Years",
    progress: 65,
  },
  {
    id: 6,
    name: "Node.js",
    imageSrc: NodeLogo,
    experience: 2,
    unite: "Years",
    progress: 65,
  },
  {
    id: 7,
    name: "Nest.js",
    imageSrc:
      "https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg",
    experience: 2,
    unite: "Years",
    progress: 65,
  },
  {
    id: 8,
    name: "React Native",
    imageSrc: ReactLogo,
    experience: 1,
    unite: "Years",
    progress: 40,
  },
  {
    id: 9,
    name: "Bootstrap",
    imageSrc: BootstrapLogo,
    experience: 2,
    unite: "Years",
    progress: 65,
  },
  {
    id: 10,
    name: "Redux",
    imageSrc: ReduxLogo,
    experience: 1,
    unite: "Year",
    progress: 50,
  },
  {
    id: 11,
    name: "Sass",
    imageSrc: SassLogo,
    experience: 3,
    unite: "Years",
    progress: 90,
  },
  {
    id: 12,
    name: "Material UI",
    imageSrc: MaterialLogo,
    experience: 3,
    unite: "Years",
    progress: 90,
  },
];

function Skills() {
  return (
    <div className="div-animation">
      <section id="skills">
        <h2 className="skills-h2">Skills</h2>
        <p className="hover-me">Hover the cubes</p>
        <div className="skills-container">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`skill-item transition menuitem-${skill.id}`}
            >
              <div className="imageContainer">
                <Image src={skill.imageSrc} alt={`${skill.name}-image`} fill />
              </div>
              <p>{skill.name}</p>
              <div className="skill-hover-card">
                <label htmlFor="skill">
                  {skill.experience} {skill.unite}
                </label>
                <progress id="file" max="100" value={skill.progress}></progress>
                <label htmlFor="skill">{skill.progress}%</label>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="button-generic transition menuitem-13"
        >
          Portfolio
        </Link>

        {/*  <Particles /> */}
      </section>
    </div>
  );
}

export default Skills;
