import Image from "next/image";
import Link from "next/link";

/* import Image from "/public"; */

function Education() {
  return (
    <>
      <div className="div-animation">
        <section id="certificate">
          <h2>8 Certificates</h2>
          <div className="containerSlide">
            <div
              id="carouselExampleDark"
              className="carousel carousel-light slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                {/* <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="6"
                  aria-label="Slide 7"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="7"
                  aria-label="Slide 8"
                ></button> */}
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                  <Image
                    src="https://i.ibb.co/4jPJSMd/carrera-De-Desarrollo-Full-Stack-INGTop10.png"
                    className="d-block w-100 certificado"
                    alt="carreraDesarrolloDeAplicacione-certificado"
                    width={600}
                    height={550}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <Image
                    src="https://i.ibb.co/zN2mLnJ/carrera-Desarrollo-Front-End-ing.png"
                    className="d-block w-100 certificado"
                    alt="carreraFullStack-certificado"
                    width={600}
                    height={550}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <Image
                    src="https://i.ibb.co/GtXjbtc/636bccb78ae889000efd915d-ing.png"
                    className="d-block w-100 certificado"
                    alt="carreraDesarrolloFront-certificado"
                    width={600}
                    height={550}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <Link className="button-white" href="/skills">
            Skills
          </Link>
          {/* <Particles /> */}
        </section>
      </div>
    </>
  );
}

export default Education;
