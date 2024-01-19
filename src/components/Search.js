import "../components/Search.css";

const Search = ({ value, onChange, placeholder }) => {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        className="search-characters ms-5 ps-3"
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </>
  );
};
export default Search;
