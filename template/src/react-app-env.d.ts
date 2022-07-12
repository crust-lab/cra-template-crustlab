/// <reference types="react-scripts" />
interface ImportMetaEnv {
  readonly NODE_ENV: boolean;
  readonly REACT_APP_AUTH_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
