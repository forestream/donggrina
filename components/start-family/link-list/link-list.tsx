import styles from './link-list.module.scss';
import LinkItem from './link-item';
import { LinkType } from './types/link-type';

const links: LinkType[] = [
  { href: '/create-family', text: '가족만들기', className: 'primary' },
  { href: '/', text: '가족에 참여하기', className: 'tertiary' },
];

export default function LinkList() {
  return (
    <ul className={styles.linkList}>
      {links.map((data, index) => (
        <LinkItem key={index} {...data} />
      ))}
    </ul>
  );
}
