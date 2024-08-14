import { useEffect, useState } from 'react';
import { api } from './services/api';
import { CityWeather, Locality } from './types/weather';
import CircularProgress from '@mui/material/CircularProgress';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import NextWeatherCard from './components/NextWeatherCard';
import { toast } from 'react-toastify';

export default function App() {
  const [cityWeather, setCityWeather] = useState<CityWeather | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const localityGuarapuava = await api.get<Locality[]>(
          `/cptec/v1/cidade/guarapuava`,
        );

        const cityWeatherResponse = await api.get<CityWeather>(
          `/cptec/v1/clima/previsao/${localityGuarapuava.data[0].id}/6`,
        );
        setCityWeather(cityWeatherResponse.data);
      } catch (error) {
        toast.error(
          'Desculpe, houve um erro ao realizar a previsão. Tente novamente mais tarde',
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const getNextDaysWeather = () => {
    if (cityWeather) {
      const nextWeathers = [...cityWeather.clima];
      nextWeathers.shift();

      return nextWeathers;
    }
  };

  return (
    <>
      <header className="w-full px-8 bg-zinc-700 h-16 flex items-center">
        <h1 className="font-bold text-2xl text-zinc-100 max-sm:text-lg">
          Weather Forecast
        </h1>
      </header>
      <main className="bg-zinc-100 min-h-[calc(100vh-4rem)] p-8 max-sm:p-2">
        <div>
          {isLoading && (
            <div className="w-full text-center">
              <CircularProgress />
            </div>
          )}
          {!isLoading && (
            <>
              <h2 className="font-bold text-center text-2xl mb-8 max-sm:text-lg">
                Clima em {cityWeather?.cidade} - {cityWeather?.estado}
              </h2>
              {cityWeather?.clima[0] && (
                <CurrentWeatherCard currentWeather={cityWeather.clima[0]} />
              )}

              <div className="grid grid-cols-[repeat(auto-fill,_25rem)] justify-center gap-4 mt-4 max-sm:grid-cols-1">
                {getNextDaysWeather()?.map((weather) => (
                  <NextWeatherCard cityWeather={weather} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
