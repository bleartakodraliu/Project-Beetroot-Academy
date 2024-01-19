import axios from "axios";
import { useEffect, useState } from "react";
import CharactersCard from "../components/CharacterCard";
import Search from "../components/Search";
import "../pages/Characters.css";

const Characters = () => {
  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=54bc359c27d0ea30d6723af60c41c516&hash=6e68004fea84442155577e14a8fc0f12"
  );
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      return setData(res.data.data.results);
    };
    fetch();
  }, [url]);

  return (
    <div className="container-fluid">
      <div className="mt-5">
        <Search></Search>
      </div>
      <div className="characters-content container d-flex flex-wrap justify-content-between mt-5">
        {data
          ? data.map((item, index) => (
              <CharactersCard
                key={index}
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                name={item.title}
              ></CharactersCard>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Characters;
