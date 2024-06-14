// import React from 'react';
// import styles from './list-footer.module.scss';
// import ChatIcon from '@/public/images/growth/chat-icon.svg';
// import EmptyHeart from '@/public/images/growth/empty-heart.svg';
// import FillHeart from '@/public/images/growth/fill-heart.svg';

// interface ListFooterProps {
//   chatCount: number;
//   heartCount: number;
// }

// export default function ListFooter({ chatCount, heartCount }: ListFooterProps) {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         <ChatIcon alt="댓글 아이콘" />
//         <div className={styles.count}>0</div>
//       </div>
//       <div className={styles.container}>
//         {heartCount === 0 ? <EmptyHeart alt="빈 하트 아이콘" /> : <FillHeart alt="채워진 하트 아이콘" />}
//         <div className={styles.count}>0</div>
//       </div>
//     </footer>
//   );
// }
