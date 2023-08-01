import Image from "next/image";
import Link from "next/link";
import avatarPic from "/public/img/avatar.webp";
import EducationModule from "@/components/education";

const About = () => {
  return (
    <>
      <div className="div-animation">
        <section id="about">
          {/* <h2>Materializing ideas</h2> */}
          <div className="about-wrapper container-md">
            <Image
              src={avatarPic}
              alt="Santi Avatar"
              width={150}
              title="Santi Avatar"
            />
            <p className="about-text">
              Hi! i´m Santiago , 30 years old , born in México City, full stack
              developer JavaScript, programmer who loves code and technology,
              taste for experience and user interface design, constantly focused
              on learning new technologies, comitted to developing specialized
              and scalable technology in new projects.
              <Link className="button-generic" href="/about/#education">
                Education
              </Link>
            </p>
          </div>
        </section>
        <EducationModule id="education" />
      </div>
    </>
  );
};

export default About;
