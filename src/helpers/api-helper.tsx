export async function api<T = object>(
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<T> {
  return fetch(input, init)
    .then(async (response: Response) => {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        return data;
      });
    })
    .then((response) => response as T);
}
