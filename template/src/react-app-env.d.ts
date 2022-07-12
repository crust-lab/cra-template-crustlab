/// <reference types="react-scripts" />
interface ImportMetaEnv {
  readonly NODE_ENV: boolean;
  readonly MOVIES_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
  