import axios from "axios";
import { Resource } from "../models/resource";
import { Serializer } from "../models/serializer";
import { environment } from "../environment/environment";
import { QueryOptions } from "../helpers/query.options";
import { resolvePath } from "react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation";


export class ResourceProvider<T extends Resource> {
    constructor(public endpoint: string, public serializer: Serializer) { }

    public list = async (options: QueryOptions) => new Promise((resolve, reject) => {
        axios.get(`${environment.basePath}/${this.endpoint}?${options?.toQueryString()}`)
            .then((resp) =>
                resolve(this.convertList(resp.data)
                )
            )
            .catch((error) =>
                reject(error)
            )
    })
    public forecastList = async (options: QueryOptions) => new Promise((resolve, reject) => {
        axios.get(`${environment.basePath}/forecast?${options?.toQueryString()}`)
            .then((resp) => {
                resolve(this.forecastConvertList(resp.data)
                )
            })
            .catch((error) =>
                reject(error)
            )
    })

    private convertList(data: any) {
        return this.serializer.fromJson(data);
    }
    private forecastConvertList(data: any) {
        
        return data.list.map((element: any) => {
            return this.serializer.fromJson(element)
        })
        
    }
}