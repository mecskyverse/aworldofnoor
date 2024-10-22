import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storefrontClient = createStorefrontApiClient({
  storeDomain: 'worldofnoor.myshopify.com',
  apiVersion: '2024-10',  // Use the latest API version
  publicAccessToken: '82eb01d47fb7cdec049e67c769dbb894'
});

export default storefrontClient;