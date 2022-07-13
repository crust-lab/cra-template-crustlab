import { cleanup } from '@testing-library/react';

global.beforeEach(() => {
  cleanup();
});
