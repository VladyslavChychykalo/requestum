import { useState } from "react";
import { card, description } from "./Card.module.scss";

const Card = ({ result: { name, description, language } }) => {
  const [isOpen, setOpenValue] = useState(false);

  console.log(isOpen);

  return (
    <li className={card}>
      <h4>{name}</h4>
      <p>
        Language: <span>{language}</span>
      </p>
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: isOpen ? "normal" : "nowrap",
        }}
        onClick={() => setOpenValue(!isOpen)}
      >
        Description:
        <span>{description}</span>
      </p>
    </li>
  );
};

export default Card;
