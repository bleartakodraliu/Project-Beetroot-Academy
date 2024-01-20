import "../components/Search.css";

const Search = ({ value, onChange, placeholder }) => {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        className="search-characters ps-3 col-md-6 col-sm-12"
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </>
  );
};
export default Search;
