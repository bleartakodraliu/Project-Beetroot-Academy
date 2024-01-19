import "/Users/blearta/Desktop/Project-Beetroot-Academy/src/components/CharacterCard.css";

const CharactersCard = ({ name, image }) => {
  return (
    <>
      <a href="#" className="card character-card mt-3">
        <img
          src={`${image}`}
          class="character-card-image card-img-top"
          alt="..."
        ></img>
        <div class="character-card-title card-body">
          <h6 class="card-title">{name}</h6>
        </div>
      </a>
    </>
  );
};
export default CharactersCard;
