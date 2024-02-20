import { dayArr } from "../cities";
import StyleCurWeatherDisplay from "./CurWeatherDisplay.styled";

const CurWeatherDisplay = ({ curWeather }) => {
  const { address, icon, datetime, temp } = curWeather;
  const day = new Date(datetime);
  const dayOfWeek = dayArr[day.getDay()];

  return (
    <StyleCurWeatherDisplay>
      <p className="day">{dayOfWeek}</p>
      <div className="temp-img-container">
        <img
          className="icon"
          src={`./images/weather-icons/${icon}.svg`}
          alt={icon}
        />
        <p className="temp">{temp}°C</p>
      </div>
      <p className="address">{address}</p>
    </StyleCurWeatherDisplay>
  );
};

export default CurWeatherDisplay;
