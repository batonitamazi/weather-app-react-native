import { Resource } from "../resource";

export class Weather extends Resource {
    temperature: number | any 
    main: string | any
    temperature_min: number | undefined
    temperature_max: number | undefined
    wind: number | undefined 
    humidity: number | undefined
    country: string | undefined
    city: string | undefined 
}