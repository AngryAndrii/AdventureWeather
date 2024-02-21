import { uid } from "uid";
import { StyledLongWeather } from "./LongWeather.styled";

const LongWeather = ({ longWeather }) => {
  return (
    <StyledLongWeather>
      <ul>
        {longWeather?.map(({ dayOfWeek, icon, tempmax, tempmin }) => {
          return (
            <li key={uid()}>
              <ul>
                <li>{dayOfWeek}</li>
                <li>
                  <img
                    className="icon"
                    src={`./images/weather-icons/${icon}.svg`}
                    alt="lol"
                  />
                </li>
                <li>{tempmin}</li>
                <li>{tempmax}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </StyledLongWeather>
  );
};

export default LongWeather;
