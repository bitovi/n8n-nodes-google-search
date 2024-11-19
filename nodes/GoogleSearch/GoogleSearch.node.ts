import type {
	DeclarativeRestApiSettings,
	IDataObject,
	IExecutePaginationFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class GoogleSearch implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Google Search',
		icon: 'file:google.svg',
		name: 'googleSearch',
		group: ['transform'],
		version: 1,
		description: 'Google Search Node',
		defaults: {
			name: 'GoogleSearch',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'googleSearchCredentialsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://www.googleapis.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Custom Search',
						value: 'customSearch',
						routing: {
							request: {
								url: '=/customsearch/v1',
							},
							send: {
								paginate: true,
							},
							operations: {
								pagination: handlePagination,
							},
						},
					},
				],
				default: 'customSearch',
			},
			{
				displayName: 'Search Query',
				name: 'searchQuery',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							q: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Return All',
				description: 'Whether to return all results or only up to a given limit',
				name: 'returnAll',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				displayOptions: {
					show: {
						returnAll: [false],
					},
				},
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				default: {},
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'File Type',
						name: 'fileType',
						type: 'string',
						default: '',
						routing: {
							request: {
								qs: {
									fileType: '={{ $value }}',
								},
							},
						},
					},
				],
			},
		],
	};
}

async function handlePagination(
	this: IExecutePaginationFunctions,
	resultOptions: DeclarativeRestApiSettings.ResultOptions,
): Promise<INodeExecutionData[]> {
	const aggregatedResult: IDataObject[] = [];
	let nextStartIndex: number | undefined = 1;
	const returnAll = this.getNodeParameter('returnAll') as boolean;
	let limit = 2;
	if (!returnAll) {
		limit = this.getNodeParameter('limit') as number;
		resultOptions.maxResults = limit;
	}
	resultOptions.paginate = true;

	while (nextStartIndex) {
		const responseData = await this.makeRoutingRequest(resultOptions);

		for (const page of responseData) {
			if (page.json.items) {
				const currentData = page.json.items as IDataObject[];
				aggregatedResult.push(...currentData);
			}

			if (!returnAll && aggregatedResult.length >= limit) {
				return aggregatedResult.slice(0, limit).map((item) => ({ json: item }));
			}

			resultOptions.options.qs!.startIndex =
				((page.json.queries as  IDataObject)?.nextPage as IDataObject[])?.[0]?.startIndex as number | undefined;
		}
	}

	return aggregatedResult.map((item) => ({ json: item }));
}
