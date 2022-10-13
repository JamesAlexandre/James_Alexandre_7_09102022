import { useParams } from "react-router-dom";
import CollapseCSS from "../style/Collapse.module.css";
import Down from "../assets/down_arrow.svg";
import Up from "../assets/up_arrow.svg";
import { useState } from "react";

const Collapse = ({ title, content, i }) => {
  const { logementId } = useParams();
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div
      className={
        logementId ? CollapseCSS.accordionLogement : CollapseCSS.accordionAbout
      }
    >
      <div className={CollapseCSS.title} onClick={() => toggle(i)}>
        <h2 className={logementId ? CollapseCSS.titleText : null}>{title}</h2>
        <img src={selected === i ? Up : Down} alt="flèche" />
      </div>
      <div
        className={selected === i ? CollapseCSS.content : CollapseCSS.hidden}
      >
        <p className={logementId ? CollapseCSS.contentLogement : null}>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
