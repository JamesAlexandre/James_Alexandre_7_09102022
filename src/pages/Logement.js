import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Data from "../data/data.json";
import LogementCSS from "../style/Logement.module.css";
import Star from "../assets/star.svg";
import StarGrey from "../assets/star_grey.svg";
import Collapse from "../components/Collapse";

const Logement = () => {
  const { logementId } = useParams();
  const thisLogement = Data.find((logement) => logement.id === logementId);

  return (
    <div>
      <Header />
      <Slideshow thisLogement={thisLogement} />

      <section className={LogementCSS.infos}>
        <div className={LogementCSS.titleLocationHost}>
          <div className={LogementCSS.titleLocation}>
            <h1>{thisLogement.title}</h1>
            <p>{thisLogement.location}</p>
          </div>
          <div className={LogementCSS.host}>
            <p>{thisLogement.host.name}</p>
            <img src={thisLogement.host.picture} alt="profil propriétaire" />
          </div>
        </div>

        <div className={LogementCSS.tagsRating}>
          <div className={LogementCSS.tags}>
            {thisLogement.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <div className="rating">
            {[...Array(parseInt(thisLogement.rating))].map((e, i) => (
              <img src={Star} alt="" />
            ))}
            {[...Array(5 - parseInt(thisLogement.rating))].map((e, i) => (
              <img src={StarGrey} alt="" />
            ))}
          </div>
        </div>
      </section>
      <section className={LogementCSS.collapses}>
        <Collapse title="Description" content={thisLogement.description} />
        <Collapse
          title="Équipements"
          content={thisLogement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Logement;
