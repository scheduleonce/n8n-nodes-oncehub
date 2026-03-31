import { IDataObject, IHttpRequestMethods, IHookFunctions, NodeApiError, JsonObject } from 'n8n-workflow';

export async function onceHubApiRequest(
	this: IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body?: IDataObject,
): Promise<IDataObject> {
	const options = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body,
		url: `https://api.oncehub.com/v2/${endpoint}`,
		json: true,
	};

	try {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'onceHubApi', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export function areEventsEqual(events1: string[], events2: string[]): boolean {
	return events1.length === events2.length && events1.every((event) => events2.includes(event));
}
