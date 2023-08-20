export const query = async (
  url: string,
  options: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    headers?: Record<string, string>;
    params?: Record<string, any>;
  }
): Promise<any> => {
  try {
    const searchParams = new URLSearchParams(options.params);
    const res = await fetch(url + searchParams, {
      headers: options.headers,
      method: options.method,
    });
    if (res.status !== 200) {
      const errDetail = await res.text();
      throw new Error(`error response(status: ${res.status}): ${errDetail}`);
    }
    return res.json();
  } catch (err) {
    throw new Error(`Failed to get data: ${err}`);
  }
};
