import { useRouter } from 'next/router';

export default function useRouterId(query: string) {
  const router = useRouter();
  const id = router.query[query];

  console.log(router.query);

  // if (!id) {
  //   throw new Error('query 값을 다시 입력해주세요');
  // }

  return id;
}
