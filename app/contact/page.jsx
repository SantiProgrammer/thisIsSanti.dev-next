import Particles from "@/components/particles";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="div-animation">
        <section id="contacto">
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/santidev/" target="_black">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png"
                alt="Linkedin logo"
                width={50}
                height={50}
                title="Linkedin"
              />
            </a>
          </div>
          <Link href="/" className="button-generic back-home">
            🔙 Home
          </Link>
        </section>
        <Particles />
      </div>
    </>
  );
};

export default Contact;
