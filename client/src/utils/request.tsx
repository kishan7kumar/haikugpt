import _ from "lodash";

const request = async <T = any,>(options: RequestInit | undefined) => {
  const fetchOptions = _.merge(
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
    options
  );

  const backendURL = "http://localhost:9000/haiku";
  return fetch(backendURL, fetchOptions).then(async (response) => {
    const body = (await response.json()) as Promise<T>;

    if (response.ok) {
      return body;
    } else {
      throw { status: response.status, ...body };
    }
  });
};

export default request;
