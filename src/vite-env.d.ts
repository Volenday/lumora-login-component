/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GOOGLE_CLIENT_ID?: string;
	readonly GOOGLE_CLIENT_ID?: string;
	readonly VITE_GOOGLE_CALLBACK_URL?: string;
	readonly GOOGLE_CALLBACK_URL?: string;
	readonly VITE_LUMORA_API_BASE_URL?: string;
	readonly FRONTEND_URL?: string;
	readonly VITE_API_KEY?: string;
	readonly API_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

