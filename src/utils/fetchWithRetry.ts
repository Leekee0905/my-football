const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries = 3,
  minDelay = 500,
  maxDelay = 2000
): Promise<Response> => {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, options);
    if (res.ok) return res;

    if (res.status === 429) {
      const retryAfter = res.headers.get("Retry-After");
      if (retryAfter) {
        console.warn(
          `Rate limited (429). Retrying in ${retryAfter} seconds...`
        );
        await new Promise((resolve) =>
          setTimeout(resolve, Number(retryAfter) * 1000)
        );
      } else {
        const waitTime = Math.min(minDelay * Math.pow(2, i), maxDelay);
        console.warn(`Rate limited (429). Retrying in ${waitTime}ms...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    } else {
      return res;
    }
  }
  throw new Error("Too many requests - retry limit reached");
};

export default fetchWithRetry;
