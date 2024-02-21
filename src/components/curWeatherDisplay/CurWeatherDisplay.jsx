import { dayArr } from "../cities";
import { getDayOfWeek } from "../modal/form/dateChanger";
import StyleCurWeatherDisplay from "./CurWeatherDisplay.styled";

const CurWeatherDisplay = ({ curWeather }) => {
  const { address, icon, datetime, temp } = curWeather;
  const dayOfWeek = getDayOfWeek(datetime);

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
