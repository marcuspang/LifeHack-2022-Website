import { MutatorOptions, useSWRConfig } from 'swr';

const useMatchMutate = () => {
  const { cache, mutate } = useSWRConfig();
  return (matcher: RegExp, data?: any, opts?: boolean | MutatorOptions<any>) => {
    if (!(cache instanceof Map)) {
      throw new Error('matchMutate requires the cache provider to be a Map instance');
    }

    const keys = [];

    for (const key of cache.keys()) {
      if (matcher.test(key)) {
        keys.push(key);
      }
    }

    const mutations = keys.map((key) => mutate(key, data, opts));
    return Promise.all(mutations);
  };
};

export default useMatchMutate;
