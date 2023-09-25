import { useLoaderData } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import { useRef, useState } from "react";

function App() {
  const cards = useLoaderData();
  const [searchText, setSearchText] = useState(null);

  const searchBtn = useRef();

  const handleSearch = () => {
    const inputValue = searchBtn.current.value;
    const searchText = inputValue.toLowerCase();
    setSearchText(searchText);
  };

  return (
    <>
      <Banner searchBtn={searchBtn} handleSearch={handleSearch}></Banner>
      <Cards cards={cards} searchText={searchText}></Cards>
    </>
  );
}

export default App;
