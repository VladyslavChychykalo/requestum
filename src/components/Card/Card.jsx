import { useState } from "react";
import { card, descr } from "./Card.module.scss";

const Card = ({ result: { name, description, language } }) => {
  const [isOpen, setOpenValue] = useState(false);

  function fullDescription() {
    return (
      <span>
        {isOpen
          ? description
          : description.length >= 50
          ? description.slice(0, 40) + "..."
          : description}
      </span>
    );
  }

  return (
    <li className={card}>
      <h4>{name}</h4>
      <p>
        Language: <span>{language}</span>
      </p>
      <p onClick={() => setOpenValue(!isOpen)}>
        Description:
        <span>
          {fullDescription()}
        </span>
      </p>
    </li>
  );
};

export default Card;
