const fetch = require('node-fetch');

export const apiVersion = process.env.API_VERSION || 'v1_0';
export const baseUrl = process.env.BASE_URL || 'https://api.claya.com';

export async function callApi({ method, endpoint, body = null, token = null }) {
  // setup request
  const options = {
    method: method,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      token: token,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
    options.json = true;
  }

  // call promise?
  try {
    const response = await fetch(
      `${baseUrl}/${apiVersion}/${endpoint}`,
      options
    );

    // get body
    let json = {};
    try {
      json = await response.json();
    } catch (error) {
      // console.log(error);
    }

    return {
      statusCode: response.status,
      ...json,
    };
  } catch (error) {
    throw new Error(error);
  }
}
