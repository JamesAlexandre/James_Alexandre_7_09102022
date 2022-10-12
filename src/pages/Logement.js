import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Data from "../data/data.json";
import LogementCSS from "../style/Logement.module.css";

const Logement = () => {
  const { logementId } = useParams();
  const thisLogement = Data.find((logement) => logement.id === logementId);

  return (
    <div>
      <Header />
      <Slideshow thisLogement={thisLogement} />
      <h1>{thisLogement.title}</h1>
      <Footer />
    </div>
  );
};

export default Logement;
