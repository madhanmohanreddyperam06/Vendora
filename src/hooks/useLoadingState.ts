import { useState, useEffect } from 'react';

interface LoadingState {
  isLoading: boolean;
  error: string | null;
  data: any;
}

export function useLoadingState<T>(
  asyncFunction: () => Promise<T>,
  dependencies: any[] = []
): LoadingState & { refetch: () => void } {
  const [state, setState] = useState<LoadingState>({
    isLoading: true,
    error: null,
    data: null,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await asyncFunction();
      setState({
        isLoading: false,
        error: null,
        data: result,
      });
    } catch (error) {
      setState({
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
        data: null,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    ...state,
    refetch: fetchData,
  };
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
