import { useState } from "react";
import PropTypes from "prop-types";
import { card } from "./Card.module.scss";

const Card = ({ result: { name, description, language } }) => {
  const [isOpen, setOpenValue] = useState(false);

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

Card.protoType = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Card;
