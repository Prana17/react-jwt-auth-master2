const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig);
export const API = publicRuntimeConfig.PRODUCTION
    ? 'https://cryptoblog.com'
    : 'http://localhost:3000';
export const APP_NAM