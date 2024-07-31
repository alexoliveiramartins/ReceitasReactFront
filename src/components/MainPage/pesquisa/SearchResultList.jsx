import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="flex flex-col results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.nome} key={id}/>;
      })}
    </div>
  );
};