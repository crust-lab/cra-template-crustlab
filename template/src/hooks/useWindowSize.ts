import { useLayoutEffect, useState } from 'react';

type WindowSize = {
  height: number;
  width: number;
};

const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>({} as WindowSize);

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

export default useWindowSize;
