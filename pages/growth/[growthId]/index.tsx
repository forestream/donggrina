import React from 'react';
import styles from './growth-detail.module.scss';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import { GetServerSidePropsContext } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useGetGrowthDetailQuery } from '@/hooks/queries/growth/use-get-growth-queries';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    params: { growthId },
  } = context as Params;

  return { props: { growthId } };
}

interface GrowthDetailPageProps {
  growthId: number;
}

export default function GrowthDetailPage({ growthId }: GrowthDetailPageProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const { data: growthData } = useGetGrowthDetailQuery(growthId);
  console.log(growthData?.data);
  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <div>
            <div className={styles.tempImg}></div>
          </div>
          <div className={styles.headerText}>
            <p className={styles.category}>{todo.category}</p>
            <p>{todo.title}</p>
            <div className={styles.profiles}>
              <CalendarTodoProfile src={todo.writerProfileImageUrl} name={todo.writerNickName} />
              <CalendarTodoProfile src={todo.petProfileImageUrl} name={todo.petName} />
            </div>
          </div>
          <div className={styles.kebab}>
            <DropdownMenu value={{ isOpen, onCloseToggle, onOpenToggle }}>
              <DropdownMenu.Kebab />
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={handleClickEdit}>수정</DropdownMenu.Item>
                <DropdownMenu.Item onClick={handleClickDelete}>삭제</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </div>

        <div className={styles.memoContainer}>
          <Image src="/images/calendar/calendar.svg" alt="달력 아이콘" width={20} height={20} />
          <section className={styles.memo}>{todo.memo}</section>
        </div>

        <div className={styles.button}>
          <Button onClick={handleClickFinished} round className={todo.isFinished ? 'disabled' : 'primary'}>
            {todo.isFinished ? '완료 해제하기' : '완료로 표시하기'}
          </Button>
        </div>
      </div>
    </main>
  );
}
