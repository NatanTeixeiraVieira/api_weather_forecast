export type Locality = {
  nome: string;
  estado: string;
  id: number;
};

export type Weather = {
  data: string;
  condicao: string;
  condicao_desc: string;
  min: number;
  max: number;
  indice_uv: number;
};

export type CityWeather = {
  cidade: string;
  estado: string;
  atualizado_em: string;
  clima: Weather[];
};
