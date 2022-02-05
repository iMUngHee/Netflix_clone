import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useSearchParams();
  const keyword = search.get("keyword");
  return (
    <div>
      
    </div>
  );
};

export default Search;