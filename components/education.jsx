import Image from "next/image";
import Link from "next/link";

const certificates = [
  {
    url: "https://i.ibb.co/4jPJSMd/carrera-De-Desarrollo-Full-Stack-INGTop10.png",
  },
  {
    url: "https://i.ibb.co/zN2mLnJ/carrera-Desarrollo-Front-End-ing.png",
  },
  {
    url: "https://i.ibb.co/GtXjbtc/636bccb78ae889000efd915d-ing.png",
  },
  {
    url: "https://i.ibb.co/4jPJSMd/carrera-De-Desarrollo-Full-Stack-INGTop10.png",
  },
  {
    url: "https://i.ibb.co/zN2mLnJ/carrera-Desarrollo-Front-End-ing.png",
  },
  {
    url: "https://i.ibb.co/GtXjbtc/636bccb78ae889000efd915d-ing.png",
  },
  {
    url: "https://i.ibb.co/zN2mLnJ/carrera-Desarrollo-Front-End-ing.png",
  },
  {
    url: "https://i.ibb.co/GtXjbtc/636bccb78ae889000efd915d-ing.png",
  },
];

function EducationModule() {
  return (
    <>
      <div className="div-animation">
        <section id="certificate">
          <h2>Certificates</h2>
          <div className="certificates-container ">
            {certificates.map((e) => (
              <div className="certificate-item">
                <Image src={e.url} height={200} width={300}></Image>
              </div>
            ))}
          </div>
          <Link className="button-generic education" href="/skills">
            Skills
          </Link>
        </section>
      </div>
    </>
  );
}

export default EducationModule;
