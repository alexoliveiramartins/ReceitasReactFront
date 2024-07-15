import { NavLink } from "react-router-dom";
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <NavLink to={`/receitas/${result}`}><div
      className="search-result"
      
    >
      {result}
    </div></NavLink>
  );
};