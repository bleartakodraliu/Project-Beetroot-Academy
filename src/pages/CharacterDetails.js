import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const CharacterDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchCharacterDetails = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=54bc359c27d0ea30d6723af60c41c516&hash=6e68004fea84442155577e14a8fc0f12`
      );

      setItem(res.data.data.results[0]);
      console.log(res.data.data.results[0]);
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
      {loading && <div class="spinner-border text-white " role="status"></div>}
      {item && (
        <div className="container mt-5 d-flex">
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt="Comic Cover"
            className="col-sm-6 col-md-4 "
          />
          <div className="col-sm-6 p-5">
            <h3 className="text-white">{item.title}</h3>
            <h5 className="text-white mt-5">{item.textObjects?.[0]?.text}</h5>
            <button className="btn btn-success" onClick={() => navigate("/")}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
