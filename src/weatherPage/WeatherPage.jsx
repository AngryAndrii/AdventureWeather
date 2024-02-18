import { uid } from "uid";
import Card from "../components/cityCard/CityCard";

const WeatherPage = () => {
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
      {cities.map((el) => {
        return <Card data={el} key={uid()} />;
      })}
      <div className="current-weather"></div>
    </>
  );
};

export default WeatherPage;