import { useNavigate } from "react-router";
import "../components/CharacterCard.css";

const ComicsCard = ({ name, image, id }) => {
  let navigate = useNavigate();

  return (
    <a
      className="card character-card m-2"
      onClick={() => navigate(`/comics/${id}`)}
    >
      <img
        src={`${image}`}
        className="comics-card-image card-img-top"
        alt="..."
      ></img>
      <div className="comics-card-title card-body">
        <h6 className="comics-title">{name}</h6>
      </div>
    </a>
  );
};
export default ComicsCard;
