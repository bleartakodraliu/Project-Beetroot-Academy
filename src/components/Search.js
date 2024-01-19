import "../components/Search.css";
const Search = ({ value, onChange }) => {
  return (
    <>
      <input
        value={value}
        placeholder="Search for charachters"
        className="sesarch-characters ms-5 ps-3"
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </>
  );
};
export default Search;
