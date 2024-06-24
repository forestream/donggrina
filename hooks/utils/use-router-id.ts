import { useRouter } from 'next/router';

export default function useRouterId(query: string) {
  const router = useRouter();
  const id = router.query[query];

  return id;
}
