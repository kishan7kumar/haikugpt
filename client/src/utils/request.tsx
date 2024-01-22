import _ from "lodash";
import { API_URL } from "./constants";

const request = async <T = any,>(options: RequestInit | undefined) => {
  const fetchOptions = _.merge(
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
    options
  );

  return fetch(API_URL, fetchOptions).then(async (response) => {
    const body = (await response.json()) as Promise<T>;

    if (response.ok) {
      return body;
    } else {
      throw { status: response.status, ...body };
    }
  });
};

export default request;
