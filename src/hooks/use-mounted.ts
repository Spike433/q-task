import { useCallback, useEffect, useRef } from 'react';

/**
 * `Use case` Prevent memory leaks when fetching data, timers, etc. 
 * @returns A function that returns a boolean value indicating if the component is mounted.
 */
export const useMounted = (): (() => boolean) => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback((): boolean => isMounted.current, []);
};
