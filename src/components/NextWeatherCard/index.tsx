import { Weather } from '../../types/weather';
import { getDateInfo } from '../../utils/date';
import { capitalizeString } from '../../utils/formatter';

type NextWeatherCardProps = {
  cityWeather: Weather;
};

export default function NextWeatherCard({ cityWeather }: NextWeatherCardProps) {
  return (
    <div
      key={JSON.stringify(cityWeather)}
      className="w-fit min-w-96 p-4 mx-auto bg-zinc-300 rounded text-center shadow-lg mt-4 max-sm:min-w-full"
    >
      <strong className="text-lg">
        {capitalizeString(
          getDateInfo({ weekday: 'long', timeZone: 'UTC' }, cityWeather.data),
        )}{' '}
        - {getDateInfo({ timeZone: 'UTC' }, cityWeather.data)}
      </strong>
      <div className="mt-2">
        <span>{cityWeather.condicao_desc}</span>
        <div className="flex justify-between mt-2 max-sm:flex-col max-sm:gap-4">
          <div className="flex flex-col">
            <h3>Temperatura</h3>
            <span>{cityWeather.max} °C</span>
            <span>{cityWeather.min} °C</span>
          </div>
          <div>
            <h3>Índice UV</h3>
            <span>{cityWeather.indice_uv}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
