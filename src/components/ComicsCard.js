import { useState } from "react";
import "../components/CharacterCard.css";
import ComicDetails from "./ComicDetails";

const ComicsCard = ({ name, image, id }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  return (
    <div className="card character-card m-2">
      <div onClick={() => setDetailsOpen(true)}>
        <img
          src={`${image}`}
          className="comics-card-image card-img-top"
          alt="..."
        ></img>
        <div className="comics-card-title card-body">
          <h6 className="comics-title">{name}</h6>
        </div>
      </div>

      <div
        class={`modal show ${detailsOpen && "show"}`}
        id="exampleModal"
        tabindex="-1"
        style={{ display: detailsOpen ? "block" : "none" }}
      >
        <div class="modal-dialog">
          <div class="modal-content comics-modal-content">
            <div class="modal-body bg-dark">
              {detailsOpen && <ComicDetails comicId={id} />}
            </div>
            <div class="modal-footer bg-dark">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setDetailsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComicsCard;
