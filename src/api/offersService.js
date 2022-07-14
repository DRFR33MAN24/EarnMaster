import config from '../config';
export const _getOffers = async fetchData => {
  try {
    console.log('_getOffers', fetchData.token);
    const response = await fetch(
      `${config.backendServer}/api/offers/getOffers?offset=${fetchData.offset}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': fetchData.token,
        },
      },
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
