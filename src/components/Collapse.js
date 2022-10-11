import CollapseCSS from "../style/Collapse.module.css";
import Down from "../assets/down_arrow.svg";
import Up from "../assets/up_arrow.svg";
import { useState } from "react";

const Collapse = ({ title, content, i }) => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={CollapseCSS.accordion}>
      <div className={CollapseCSS.title} onClick={() => toggle(i)}>
        <h2>{title}</h2>
        <img src={selected === i ? Down : Up} alt="flèche bas" />
      </div>
      <div
        className={selected === i ? CollapseCSS.content : CollapseCSS.hidden}
      >
        {content}
      </div>
    </div>
  );
};

export default Collapse;
