import { uid } from "uid";
import { StyledLongWeather } from "./LongWeather.styled";

const LongWeather = ({ longWeather }) => {
  return (
    <StyledLongWeather>
      <ul className="days-list">
        {longWeather?.map(({ dayOfWeek, icon, tempmax, tempmin }) => {
          return (
            <li className="day-li" key={uid()}>
              <ul className="item-ul">
                <li className="day">{dayOfWeek}</li>
                <li>
                  <div className="img-container">
                    <img
                      className="icon"
                      src={`./images/weather-icons/${icon}.svg`}
                      alt={icon}
                    />
                  </div>
                </li>
                <li className="min-max">
                  {tempmin}°/{tempmax}°
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </StyledLongWeather>
  );
};

export default LongWeather;
