export interface QueryBuilder {
	toQueryMap: () => Map<string, string>
	toQueryString: () => string
}

export class QueryOptions implements QueryBuilder {
	public city: string | undefined
	public lat: string | undefined
	public lon: string | undefined
	public appid: string | undefined
	constructor() { }

	toQueryMap() {
		const queryMap = new Map<string, string>()
		if(this.city !==undefined){
			queryMap.set('q', `${this.city}`)
		}
		if (this.lat !== undefined) {
			queryMap.set('lat', `${this.lat}`);
		}
		if (this.lat !== undefined) {
			queryMap.set('lon', `${this.lon}`);
		}
		if (this.appid !== undefined) {
			queryMap.set('appid', `${this.appid}`);
		}
		return queryMap
	}

	toQueryString() {
		let queryString = ''

		this.toQueryMap().forEach((value: string, key: string) => {
			queryString = queryString.concat(`${key}=${value}&`)
		})

		return queryString.substring(0, queryString.length - 1)
	}
}