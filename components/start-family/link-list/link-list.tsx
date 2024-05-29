import styles from './link-list.module.scss';
import LinkItem from './link-item';

const links = [
  { href: '/', text: '가족만들기' },
  { href: '/', text: '가족에 참여하기' },
];

export default function LinkList() {
  return (
    <ul className={styles.linkList}>
      {links.map((link, index) => (
        <LinkItem key={index} text={link.text} href={link.href} />
      ))}
    </ul>
  );
}
