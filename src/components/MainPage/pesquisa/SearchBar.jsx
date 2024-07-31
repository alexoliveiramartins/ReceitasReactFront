import { useEffect, useState } from "react";
import "./SearchBar.css";
import { useParams, useSearchParams } from "react-router-dom";


export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const params = useParams()

  useEffect(() => {
    handleChange("")
  }, [params.nome])
  
  const fetchData = (value) => {
    fetch('http://localhost:8080/api/receitas')
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((receita) => {
        return (
          value &&
          receita &&
          receita.nome &&
          (receita.nome.toLowerCase().includes(value) ||
          receita.nome.includes(value) ||
          receita.nome.toUpperCase().includes(value))
          );
        });
        setResults(results);
      });
    };
    
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  

  return (
    <div className="input-wrapper">
      <input
        placeholder="Pesquisar receitas"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};