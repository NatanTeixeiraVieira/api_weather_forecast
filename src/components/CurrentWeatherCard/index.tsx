import { Weather } from '../../types/weather';
import { getDateInfo } from '../../utils/date';
import { capitalizeString } from '../../utils/formatter';

type CurrentWeatherCardProps = {
  currentWeather: Weather;
};

export default function CurrentWeatherCard({
  currentWeather,
}: CurrentWeatherCardProps) {
  return (
    <div className="w-fit min-w-96 p-4 mx-auto bg-blue-300 rounded text-center shadow-xl max-sm:min-w-full">
      <strong className="text-xl">
        {capitalizeString(getDateInfo({ weekday: 'long' }))} -{' '}
        {getDateInfo({ hour: '2-digit', minute: '2-digit' })}
      </strong>
      <div className="mt-4">
        <span className="text-xl">{currentWeather.condicao_desc}</span>
        <div className="flex justify-between mt-4 max-sm:flex-col max-sm:gap-4">
          <div className="flex flex-col">
            <h3 className="text-xl">Temperatura</h3>
            <span className="text-2xl text-red-700">
              {currentWeather.max} °C
            </span>
            <span className="text-xl text-blue-700">
              {currentWeather.min} °C
            </span>
          </div>
          <div>
            <h3 className="text-xl">Índice UV</h3>
            <span className="text-xl">{currentWeather.indice_uv}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
