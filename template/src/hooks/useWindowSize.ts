import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

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
    const debouncedUpdateSize = debounce(updateSize, 100);
    window.addEventListener('resize', debouncedUpdateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

export default useWindowSize;
