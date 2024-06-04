import Link from 'next/link';
import styles from './nav-list-item.module.scss';
import { useRouter } from 'next/router';
import { NavListProps } from '../types/nav';

export default function NavListItem({ href, text, RenderSvgComponent }: NavListProps) {
  const { pathname } = useRouter();
  return (
    <li className={pathname.includes(href) ? `${styles.on} ${styles.navList}` : styles.navList}>
      <Link href={href}>
        <div className={styles.imgBox} aria-label={text}>
          <RenderSvgComponent />
        </div>
        <span>{text}</span>
      </Link>
    </li>
  );
}
