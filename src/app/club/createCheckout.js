import storefrontClient from '@/lib/shopify';

const createCheckout = async (variantId=0, quantity=1) => {
  const { data, errors } = await storefrontClient.request({
    query: `
      mutation createCheckout($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
          }
          checkoutUserErrors {
            message
            field
          }
        }
      }
    `,
    variables: {
      input: {
        lineItems: [{ variantId, quantity }],
      },
    },
  });

  if (errors) {
    throw new Error(errors[0].message);
  }

  return data.checkoutCreate.checkout;
};

export default createCheckout;