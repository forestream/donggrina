import Title from '@/components/common/title/title';
import SubTitle from '@/components/common/title/sub-title/sub-title';
import Form from '@/components/common/Form';
import Button from '@/components/common/button/button';
import styles from './index.module.scss';
import { createFamily } from '@/apis/my';
import axios from 'axios';
import { useRouter } from 'next/router';

interface SubmitDataType {
  name: string;
  nickname: string;
}

export default function CreateFamily() {
  const router = useRouter();
  const handleSubmit = async (data: SubmitDataType) => {
    try {
      const response = await createFamily(data);
      console.log(response);
      router.replace('/start-family/entry-info/finish');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response!.data);
      }
    }
  };
  const onSubmit = (data: SubmitDataType) => {
    handleSubmit(data);
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
    </section>
  );
}
