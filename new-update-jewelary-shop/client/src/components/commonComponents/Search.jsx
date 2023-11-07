import SearchIcon from "@mui/icons-material/Search";

const Search = ({ title, placeholder, setText }) => {
  return (
    <div className="search_container">
      <h4>{title}</h4>
      <div className="search_unit">
        <SearchIcon
          sx={{
            marginLeft: "7px",
          }}
        />
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Search;
