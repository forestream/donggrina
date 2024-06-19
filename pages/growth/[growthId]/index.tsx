import React from 'react';
import styles from './growth-detail.module.scss';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import { GetServerSidePropsContext } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useGetGrowthDetailQuery } from '@/hooks/queries/growth/use-get-growth-queries';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import { useDeleteGrowthMutation } from '@/hooks/queries/growth/use-post-growth-query';
import { useRouter } from 'next/router';
import useModal from '@/hooks/use-modal';
import Image from 'next/image';
import CompleteModal from '../create/complete-modal';
import { GrowthDetailsData } from '@/types/growth/details';

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
  const { data: growthDatas } = useGetGrowthDetailQuery(growthId);
  const deleteMutation = useDeleteGrowthMutation();
  const router = useRouter();
  const [Modal, handleModal] = useModal();

  const { category, nickname, writerProfileImageUrl, petProfileImageUrl, content, isMine, petName } =
    growthDatas?.data as GrowthDetailsData;

  const openModal = () => {
    handleModal(true);
  };
  const closeModal = () => {
    handleModal(false);
    router.push('/growth');
  };
  const handleEditClick = () => {
    router.push(`/growth/${growthId}/edit`);
  };
  const handleDeleteClick = () => {
    deleteMutation.mutate(growthId, {
      onSuccess: () => openModal(),
    });
  };
  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <div>
            <div className={styles.tempImg}></div>
          </div>
          <div className={styles.headerText}>
            <p className={styles.category}>{category}</p>
            <div className={styles.profiles}>
              <CalendarTodoProfile src={writerProfileImageUrl} name={nickname} />
              <CalendarTodoProfile src={petProfileImageUrl} name={petName} />
            </div>
          </div>
          {isMine ? (
            <div className={styles.kebab}>
              <DropdownMenu value={{ isOpen, onCloseToggle, onOpenToggle }}>
                <DropdownMenu.Kebab />
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={handleEditClick}>수정</DropdownMenu.Item>
                  <DropdownMenu.Item onClick={handleDeleteClick}>삭제</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </div>
          ) : null}
        </div>

        <div className={styles.memoContainer}>
          <Image src="/images/calendar/calendar.svg" alt="달력 아이콘" width={20} height={20} />
          <section className={styles.memo}>{content.memo}</section>
        </div>
      </div>
      <Modal>
        <CompleteModal closeModal={closeModal} text="성장 기록이 삭제되었습니다." />
      </Modal>
    </main>
  );
}
