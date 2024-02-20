import { dayArr } from "../cities";
import StyleCurWeatherDisplay from "./CurWeatherDisplay.styled";

const CurWeatherDisplay = ({ curWeather }) => {
  const { address, icon, datetime, temp } = curWeather;
  const day = new Date(datetime);
  const dayOfWeek = dayArr[day.getDay()];

  return (
    <StyleCurWeatherDisplay>
      <div>
        <p>{dayOfWeek}</p>
        <p>{temp}</p>
        <img
          className="icon"
          src={`./images/weather-icons/${icon}.svg`}
          alt={icon}
        />
        <p>{address}</p>
      </div>
    </StyleCurWeatherDisplay>
  );
};

export default CurWeatherDisplay;
