interface SerializedRules {
	providers: Record<string, SerializedProvider>;
}

interface SerializedProvider {
	urlPattern: string;
	exceptions?: Array<string>;
	rawRules?: Array<string>;
	redirections?: Array<string>;
	referralMarketing?: Array<string>;
	rules?: Array<string>;
	completeProvider?: boolean;
	forceRedirection?: boolean;
}

type SerializedServices = Array<SerializedService>;

interface SerializedService {
	type: string;
	test_url: string;
	fallback: string;
	instances: string[];
}

type InstancePickMode = 'random' | 'first';

interface Cleaned {
	url: string;
	changes: number;
	redirect: boolean;
	embed_url?: string;
	youtube_id?: string;
}

export type {
	Cleaned,
	InstancePickMode,
	SerializedProvider,
	SerializedRules,
	SerializedService,
	SerializedServices,
};
