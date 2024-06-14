import Hyperlink from '@/components/common/button/hyperlink';
import Button from '@/components/common/button/button';

export default function PetsLinkList() {
  return (
    <>
      <li>
        <Hyperlink className="secondary" href="/start-pet" round>
          반려동물 추가하기
        </Hyperlink>
      </li>
      <li>
        <Button type="button" className="primary" round>
          가족 초대하기
        </Button>
      </li>
      <li>
        <Hyperlink className="tertiary" href="/family" round>
          다음에 초대하기
        </Hyperlink>
      </li>
    </>
  );
}
