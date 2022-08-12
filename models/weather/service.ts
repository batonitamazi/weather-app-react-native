import { ResourceProvider } from "../../provider/resource.provider";
import { WeatherSerializer } from "./serializer";
import { Weather } from "./weather";

export class WeatherProvider extends ResourceProvider<Weather> {
    constructor(){
        super("weather", new WeatherSerializer())
    }
}

export const weatherService = new WeatherProvider();