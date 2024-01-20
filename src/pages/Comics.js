import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import ComicsCard from "../components/ComicsCard";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { API_URL, TOKEN } from "../consts";
import "../pages/Comics.css";

const Comics = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { id } = useParams();

  const fetchComics = useCallback(async () => {
    try {
      setLoading(true);
      let url = `${API_URL}/characters/${id}/comics?${TOKEN}`;
      if (searchValue) {
        url = url + `&titleStartsWith=${searchValue}`;
      }
      const res = await axios.get(url);
      if (res.status === 200) {
        setData(res.data.data.results);
      }
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  }, [id, searchValue]);

  useEffect(() => {
    fetchComics();
  }, [fetchComics]);

  return (
    <div className="container-fluid">
      <div className="mt-5">
        <Search
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
          placeholder={"Search for comics"}
        ></Search>
      </div>
      <div className="comics-content container d-flex flex-wrap justify-content-between mt-5 justify-content-sm-center">
        {loading && <Loader />}
        {!!data &&
          data.map((item) => (
            <div className="col-sm-9 col-md-5 col-lg-3" key={item.id}>
              <ComicsCard
                id={item.id}
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                name={item.title}
              ></ComicsCard>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comics;
