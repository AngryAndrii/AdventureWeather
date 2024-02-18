import Card from "./components/cityCard/CityCard";
import { uid } from "uid";

function App() {
  // console.log(import.meta.env.VITE_API_KEY);

  const cities = [
    {
      name: "paris",
      image: "parisImage",
      date: null,
    },
    {
      name: "california",
      image: "californiaimage",
      date: null,
    },
    {
      name: "poltava",
      image: "poltavaimgae",
      date: null,
    },
    {
      name: "antalya",
      image: "antalyaimage",
      date: null,
    },
    {
      name: "bern",
      image: "bernimage",
      date: null,
    },
    {
      name: "berlin",
      image: "berlinimage",
      date: null,
    },
  ];

  return (
    <>
      hello
      {cities.map((el) => {
        return <Card data={el} key={uid()} />;
      })}
    </>
  );
}

export default App;
