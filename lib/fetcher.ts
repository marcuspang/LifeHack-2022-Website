const fetcher = (...params: Parameters<typeof fetch>) => fetch(...params).then((res) => res.json());

export default fetcher;
