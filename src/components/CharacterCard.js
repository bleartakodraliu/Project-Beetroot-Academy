import { Link } from "react-router-dom";
import "../components/CharacterCard.css";

const CharactersCard = ({ name, image, id }) => {
  return (
    <Link className="card character-card m-2" to={`characters/${id}`}>
      <img
        src={`${image}`}
        className="character-card-image card-img-top"
        alt={name}
        loading="lazy"
        width={"auto"}
        height={400}
      ></img>
      <div className="character-card-title card-body">
        <h6 className="card-title">{name}</h6>
      </div>
    </Link>
  );
};
export default CharactersCard;
