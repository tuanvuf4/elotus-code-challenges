import { useEffect } from 'react';

const useScript = (url: any) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    // script.async = true;
    script.async = false;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript