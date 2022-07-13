import React, { ComponentType, lazy, Suspense } from 'react';
import { Spin } from 'antd';

type LazyRouteProps = {
  component(): Promise<{ default: ComponentType<unknown> }>;
};

const Lazy = ({ component }: LazyRouteProps) => {
  const Component = lazy(component);

  return (
    <Suspense fallback={<Spin />}>
      <Component />
    </Suspense>
  );
};

export default Lazy;
