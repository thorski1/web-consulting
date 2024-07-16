import {
	createClient,
	type ClientConfig,
} from "@sanity/client";

const config: ClientConfig = {
	projectId: "h629tul7",
	dataset: "production",
	apiVersion: "2024-07-12",
	useCdn: false,
};

const client = createClient(config);

export default client;
