import {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OnceHubApi implements ICredentialType {
	name = 'onceHubApi';
	displayName = 'OnceHub API';
	documentationUrl = 'https://developers.oncehub.com/';
	icon : Icon= {
		light: 'file:../nodes/OnceHub/oncehub.svg',
		dark: 'file:../nodes/OnceHub/oncehub.dark.svg',
	};
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description:
				'Your OnceHub API key. You can find it in your OnceHub integrations API & Webhooks settings.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.oncehub.com',
			url: '/v2/webhooks',
			method: 'GET',
		},
	};
}
