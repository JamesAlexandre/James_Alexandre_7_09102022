import Data from "../data/about.json";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutCSS from "../style/About.module.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className={AboutCSS.banner}></div>

      <div className={AboutCSS.container}>
        {Data.map((info, index) => (
          <Collapse title={info.title} content={info.content} key={index}/>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
