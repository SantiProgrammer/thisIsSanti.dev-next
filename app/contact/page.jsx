import Particles from "@/components/particles";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="div-animation">
        <section id="contacto">
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/santidev/" target="_black">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png"
                alt="Linkedin logo"
                title="Linkedin"
              />
            </a>
          </div>
          <Link href="/" className="button-about transition menuitem-8">
            🔙 Home
          </Link>
        </section>
      </div>
    </>
  );
};

export default Contact;
