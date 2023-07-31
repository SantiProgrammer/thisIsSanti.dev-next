import Image from "next/image";
import Link from "next/link";

import avatarPic from "/public/img/avatar.webp";

const About = () => {
  return (
    <>
      <div className="div-animation">
        <section id="about">
          {/* <h2>Materializing ideas</h2> */}
          <div className="about-wrapper">
            <Image
              src={avatarPic}
              alt="Picture of the author"
              width={150}
              title="Santi Avatar"
            />
            <p className="about-text">
              Hi! i´m Santiago , 30 years old , born in México City, full stack
              developer JavaScript, programmer who loves code and technology,
              taste for experience and user interface design, constantly focused
              on learning new technologies, comitted to developing specialized
              and scalable technology in new projects.
              <Link className="button-about" href="/education">
                Education
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
