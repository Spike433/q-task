import React from "react";
import { Filters } from "src/services/types";

export const usePostSearch = () => {
  const [state, setState] = React.useState<Filters>(
    { query: '' }
  );

  const handleFiltersChange = React.useCallback((query: string): void => {
    setState((prevState) => ({ ... prevState, query }));
  },[]);

  return {
    state,
    handleFiltersChange
  }
};