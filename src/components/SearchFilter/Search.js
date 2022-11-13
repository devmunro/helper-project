import "./Search.css";

const Search = ({ word, update }) => {
  return (
    <div className="bg-blue-300 p-4">
      <input
        type="text"
        ref={word}
        onChange={update}
        className="p-2 rounded-m m-2 w-1/2"
        placeholder="Search Jobs"
      />
      <select  id="location" name="location" className="p-2 rounded-m m-2">
        <option value="london">london</option>
        <option value="paris">paris</option>
        <option value="barcelona">barcelona</option>
        <option value="rome">rome</option>
      </select>
      <select id="catergory" name="catergory" className="p-2 rounded-m m-2">
        <option value="transport">transport</option>
        <option value="delivery">delivery</option>
        <option value="cooking">cooking</option>
      </select>
      <select id="role" name="role" className="p-2 rounded-m m-2">
        <option value="temp">temp</option>
        <option value="perm">perm</option>
      </select>
    </div>
  );
};

export default Search;
