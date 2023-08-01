import Particles from "@/components/particles";
import Link from "next/link";

const IndexPage = async () => {
  return (
    <>
      <div className="div-animation">
        <section id="index">
          <div className="colorTitle">
            <span>H</span>
            <span>i</span>
            <p>....</p>
            <span>T</span>
            <span>h</span>
            <span>i</span>
            <span>s</span>
            <p>..</p>
            <span>i</span>
            <span>s</span>
            <p>..</p>
            <span>S</span>
            <span>a</span>
            <span>n</span>
            <span>t</span>
            <span>i</span>
            <span>!</span>
          </div>
          <h1>
            <span> &lt; </span>Full-stack developer<span> /&gt; </span>
          </h1>
          <p className="JS-title">Java Script</p>

          <Link className="button-generic" href="/about">
            About
          </Link>
        </section>
        <Particles />
      </div>
    </>
  );
};

export default IndexPage;
