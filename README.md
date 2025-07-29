# @bitovi/n8n-nodes-google-search

This is an n8n community node. It lets you use Google Search in your n8n workflows.

Google Search is a web search engine that allows you to find information on the internet. This node integrates with Google's Custom Search API to perform programmatic searches.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

Alternatively:
- Make sure to allow community nodes with `N8N_COMMUNITY_PACKAGES_ENABLED=true`
- Once logged in to your N8N web UI, go to `/settings/community-nodes` and type `@bitovi/n8n-nodes-google-search`

## Operations

The Google Search node supports the following operations:

### Custom Search
- **Search Query**: Perform searches using Google's Custom Search API
- **Return All**: Option to return all results or limit to a specific number
- **Limit**: Set maximum number of results to return (when Return All is disabled)

### Additional Search Parameters
- **Exact Terms**: Search for exact phrases
- **Exclude Terms**: Exclude specific terms from search results
- **File Type**: Filter results by file type (e.g., pdf, doc, etc.)
- **Filter**: Enable/disable duplicate content filter
- **HQ**: Search for pages that link to a specific URL
- **Image Color Type**: Filter images by color type (color, gray, black and white, transparent)
- **Image Dominant Color**: Filter images by dominant color
- **Image Size**: Filter images by size
- **Image Type**: Filter by image type (clipart, face, lineart, stock, photo)
- **Link Site**: Restrict results to pages linking to a specific site
- **Or Terms**: Search for pages containing any of the specified terms
- **Related Site**: Find pages related to a specific URL
- **Rights**: Filter by usage rights
- **Safe Search Level**: Enable safe search filtering
- **Search Type**: Specify search type (image search, etc.)
- **Site Search**: Restrict search to a specific site
- **Site Search Filter**: Include or exclude results from site search

## Credentials

To use this node, you need to authenticate with Google's Custom Search API. You'll need:

### Prerequisites
1. A Google Cloud Platform account
2. A Google Custom Search Engine set up

### Setting up credentials
1. **Create a Custom Search Engine**:
   - Go to [Google Programmable Search Engine](https://programmablesearchengine.google.com)
   - Create a new search engine
   - Note the Search Engine ID (cx parameter)

2. **Get API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com) or [Programmable Search Engine Guide](https://developers.google.com/custom-search/v1/introduction)
   - Enable the Custom Search API
   - Create an API key
   - Copy the API key

3. **Configure in n8n**:
   - Search Engine ID: Enter your Custom Search Engine ID
   - API Key: Enter your Google Cloud API key

## Compatibility

- **Minimum n8n version**: Compatible with n8n v0.198.0 and above
- **Node.js version**: Requires Node.js 18.10 or higher
- **n8n API version**: Uses n8n nodes API version 1

This node has been tested with the latest versions of n8n and should work with all current installations.

## Usage

### Basic Search
1. Add the Google Search node to your workflow
2. Configure your credentials (Search Engine ID and API Key)
3. Enter your search query
4. Set whether to return all results or limit the number
5. Execute the workflow

### Advanced Search Options
Use the "Additional Fields" section to:
- Filter results by file type, language, or site
- Search for exact phrases or exclude specific terms
- Filter images by size, color, or type
- Sort results by date or relevance

### Pagination
The node supports automatic pagination when "Return All" is enabled, allowing you to retrieve large result sets efficiently.

### Example Use Cases
- **Content Research**: Search for articles, papers, or resources on specific topics
- **Competitor Analysis**: Monitor mentions of your brand or competitors
- **Lead Generation**: Find contact information or company details
- **SEO Analysis**: Research keywords and analyze search results
- **Data Collection**: Gather information from web sources programmatically

## Need help or have questions?

Need guidance on leveraging AI agents or N8N for your business? Our [AI Agents workshop](https://hubs.ly/Q02X-9Qq0) will equip you with the knowledge and tools necessary to implement successful and valuable agentic workflows.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Google Custom Search API documentation](https://developers.google.com/custom-search/v1/overview)
- [Google Programmable Search Engine](https://programmablesearchengine.google.com)
- [Google Cloud Console](https://console.cloud.google.com)

## License

[MIT](./LICENSE.md)
