import { useNavigate } from "react-router";
import "../components/CharacterCard.css";

const CharactersCard = ({ name, image, id }) => {
  let navigate = useNavigate();

  return (
    <a
      className="card character-card m-2"
      onClick={() => navigate(`character/${id}`)}
    >
      <img
        src={`${image}`}
        class="character-card-image card-img-top"
        alt="..."
      ></img>
      <div class="character-card-title card-body">
        <h6 class="card-title">{name}</h6>
      </div>
    </a>
  );
};
export default CharactersCard;
