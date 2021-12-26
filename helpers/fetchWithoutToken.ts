const baseURL = process.env.NEXT_APP_API_URL;

export const fetchWithoutToken = (endpoint: string, data?: any, method = 'GET') => {

  const url = `${baseURL}/${endpoint}`;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
    });
  }

};
