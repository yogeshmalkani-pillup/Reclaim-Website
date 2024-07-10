import { useState, useEffect } from 'react';

function useIntervalWithActive(callback, delay) {
    const [isIntervalActive, setIsIntervalActive] = useState(true);

    useEffect(() => {
        if (!isIntervalActive) return;

        const id = setInterval(callback, delay);

        return () => clearInterval(id);
    }, [isIntervalActive, delay]);

    return [isIntervalActive, setIsIntervalActive];
}
export default useIntervalWithActive
