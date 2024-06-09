import Title from '@/components/common/title/title';
import SubTitle from '@/components/common/title/sub-title/sub-title';
import Form from '@/components/common/Form';
import Button from '@/components/common/button/button';
import styles from './index.module.scss';
import { createFamily, inquiryCode } from '@/apis/my';
import { getCookie } from 'cookies-next';

interface SubmitDataType {
  name: string;
  nickname: string;
}

export default function CreateFamily() {
  const token = getCookie('Authorization');
  const handleSubmit = async () => {
    try {
      const response = await inquiryCode(token!);
      console.log(response);
    } catch {
      console.log('에러');
    }
  };
  const onSubmit = (data: SubmitDataType) => {
    // handleSubmit(data);
  };
  return (
    <section style={{ padding: '126px 24px 0 24px' }}>
      <div>
        <SubTitle>가족등록하기</SubTitle>
        <Title>가족신청서</Title>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.MainInput name="name" label="가족의 이름을 알려주세요!" />
        <Form.MainInput name="nickname" label="가족 내 본인의 이름을 입력해주세요." />
        <div className={styles.buttonBox}>
          <Button type="submit" className="primary" round>
            가족 등록하기
          </Button>
        </div>
      </Form>
      <button type="button" onClick={handleSubmit}>
        초대코드
      </button>
    </section>
  );
}
