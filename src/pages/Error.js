import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ErrorCSS from "../style/Error.module.css";

const Error = () => {
  return (
    <div>
      <Header />
      <div className={ErrorCSS.container}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
