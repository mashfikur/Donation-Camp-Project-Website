import { useLoaderData } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";

function App() {
  const cards = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <Cards cards={cards}></Cards>
    </>
  );
}

export default App;
