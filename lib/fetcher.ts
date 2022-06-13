const fetcher = (url: RequestInfo | URL, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());
export default fetcher;
