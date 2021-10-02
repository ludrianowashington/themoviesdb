import { createContext, useState } from "react";

import api from "../services/api";

export const SearchContext = createContext({});

export function SearchProvider({ children, ...rest }) {
  const [searchResults, setSearchResults] = useState([]);

  async function search(input){
    const response = await api.get(`search/multi`, {
      params: {
        api_key:"786b9a46aa4a85bcb9938a204bbe76a5",
        query: input,
        language: "pt-BR",
        page:1,
        include_adult:false
    }});
    setSearchResults(response.data.results);
  }
  
  console.log(searchResults)

  return (
    <SearchContext.Provider
      value={{
        search, 
        searchResults
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
