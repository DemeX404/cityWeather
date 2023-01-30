export interface infoCity {
    id: Number,
    name: String,
    coord: {
        lat: number,
        lon: number
    }
}

export interface coord {
    lat: number,
    lon: number
}

export interface infoWeather {
    id: Number,
    description: String,
    icon: String,
    main: String,
    temp: Number
}