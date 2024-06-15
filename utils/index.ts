import { RefObject } from 'react';

export function isTargetIncludes<T extends HTMLElement>(event: Event, ref: RefObject<T>) {
  return ref.current && !ref.current.contains(event.target as Node);
}
