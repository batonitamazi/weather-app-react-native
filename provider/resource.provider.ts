import axios from "axios";
import { Resource } from "../models/resource";
import { Serializer } from "../models/serializer";
import { environment } from "../environment/environment";
import { QueryOptions } from "../helpers/query.options";


export class ResourceProvider<T extends Resource> {
    constructor(public endpoint: string, public serializer: Serializer) { }
    public list =  async (options: QueryOptions) => new Promise( (resolve, reject) => {
        console.log(`${environment.basePath}/${this.endpoint}?${options?.toQueryString()}`)
        axios.get(`${environment.basePath}/${this.endpoint}?${options?.toQueryString()}`)
            .then( (resp) =>
                resolve(this.convertList(resp.data)
                )
            )
            .catch((error) =>
                reject(error)
            )
    })
    
    private convertList(data: any) {
        return this.serializer.fromJson(data);
    }
}