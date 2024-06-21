import { PropsWithChildren } from 'react';

interface SuspensiveProps extends PropsWithChildren {
  isLoading: boolean;
  fallback?: JSX.Element;
}

export default function Suspensive(props: SuspensiveProps) {
  if (props.isLoading) return props.fallback || <p>로딩중</p>;
  return props.children;
}
