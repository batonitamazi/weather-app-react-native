import { Resource } from "../resource";
import { Serializer } from "../serializer";
import { Weather } from "./weather";


export class WeatherSerializer implements Serializer {
    fromJson(json: any): Resource {
        const weather = new Weather()
        weather.id = json.cod
        weather.main = json.weather[0].main
        weather.temperature = (json.main.temp - 273)
        weather.temperature_min = (json.main.temp_min -273)
        weather.temperature_max = (json.main.temp_max -273)
        weather.wind = json.wind.speed 
        weather.humidity = json.main.humidity 
        weather.country = json.sys.country 
        weather.city = json.name
        console.log(weather)
        return weather
    }
}