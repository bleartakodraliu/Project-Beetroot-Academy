import axios from "axios";
import { useEffect, useState } from "react";
import CharactersCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { CHARACTERS_API_URL, TOKEN } from "../consts";
import "../pages/Characters.css";

const Characters = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      let url = `${CHARACTERS_API_URL}?${TOKEN}`;
      if (searchValue) {
        url = url + `&nameStartsWith=${searchValue}`;
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
  };

  useEffect(() => {
    fetchCharacters();
  }, [searchValue]);

  return (
    <div className="container-fluid">
      <div className="mt-5">
        <Search
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        ></Search>
      </div>
      <p>{searchValue}</p>
      <div className="characters-content container d-flex flex-wrap justify-content-between mt-5 justify-content-sm-center">
        {loading && <Loader />}
        {!!data &&
          data.map((item) => (
            <div className="col-sm-9 col-md-5 col-lg-3" key={item.id}>
              <CharactersCard
                id={item.id}
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                name={item.name}
              ></CharactersCard>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Characters;
