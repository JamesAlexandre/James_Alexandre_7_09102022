import Card from "../components/Card";
import Header from "../components/Header";
import HomeCSS from "../style/Home.module.css";
import Data from "../data/data.json";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={HomeCSS.banner}>
        <h1 className={HomeCSS.title}>Chez vous, partout et ailleurs</h1>
      </div>

      <div className={HomeCSS.gallery}>
        {Data.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
