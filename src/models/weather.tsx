export interface Weather {
  base?: string;
  weather?: WeatherElement[];
  main?: Main;
  visibility?: number;
  wind?: Wind;
  clouds?: Clouds;
  dt?: number;
  sys?: Sys;
  id?: number;
  name?: string;
  cod?: number;
  rain?: Fall;
  snow?: Fall;
}

export interface Fall {
  "1h": number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
