import { IAuthenticateGeneric, Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class GoogleSearchCredentialsApi implements ICredentialType {
	name = 'googleSearchCredentialsApi';
	displayName = 'Google Search Credentials API';
	icon: Icon = 'file:google.svg';

	properties: INodeProperties[] = [
		{
			displayName: 'Search Engine ID',
			name: 'searchEngineId',
			type: 'string',
			default: '',
			required: true,
			hint: 'https://programmablesearchengine.google.com',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			hint: 'https://console.cloud.google.com',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				cx: '={{ $credentials.searchEngineId }}',
				key: '={{ $credentials.apiKey }}',
			},
		},
	};
}
