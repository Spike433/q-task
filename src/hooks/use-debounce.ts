import React from "react";
import { useMounted } from "./use-mounted";

export const useDebounce = (value:string | undefined, delay = 500) =>
{
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    const isMounted = useMounted();
    
    React.useEffect(() => {
        const handler = setTimeout(() => {
        if(isMounted()){
            setDebouncedValue(value);
        }
        }, delay);
    
        return () => {
        clearTimeout(handler);
        };
    }, [value, delay, isMounted]);
    
    return debouncedValue;
}