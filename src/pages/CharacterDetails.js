import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "../components/Loader";
import { CHARACTERS_API_URL, TOKEN } from "../consts";

const CharacterDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchCharacterDetails = async (id) => {
    try {
      setLoading(true);
      const url = `${CHARACTERS_API_URL}/${id}?${TOKEN}`;
      const res = await axios.get(url);

      setItem(res.data.data.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacterDetails(id);
  }, [id]);

  return (
    <div className="d-flex justify-content-center  align-items-center h-100 mt-5">
      {loading && <Loader />}
      {item && (
        <div className="container mt-5 d-flex">
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt="Comic Cover"
            className="col-sm-6 col-md-4 "
          />
          <div className="col-sm-6 p-5">
            <h3 className="text-white">{item.name}</h3>
            <h5 className="text-white mt-5">{item.description}</h5>
            <button className="btn btn-success" onClick={() => navigate("/")}>
              Go Back
            </button>
            <button
              className="btn btn-success ms-5"
              onClick={() => navigate(`/characters/${id}/comics/`)}
            >
              Go To Comics
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
