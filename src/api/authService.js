import config from '../config';
export const _login = async loginInfo => {
  try {
    const response = await fetch(`${config.backendServer}/api/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const _loginGoogle = async loginInfo => {
  try {
    const response = await fetch(
      `${config.backendServer}/api/auth/loginGoogle`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      },
    );
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

export const _getOffers = async (data, token) => {
  try {
    const response = await fetch(
      `${config.backendServer}/api/offers/getOffers`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(data),
      },
    );
    const offers = await response.json();
    return offers;
  } catch (error) {
    console.error(error);
  }
};

export const _register = async registerInfo => {
  try {
    const response = await fetch(`${config.backendServer}/api/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerInfo),
    });
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};
