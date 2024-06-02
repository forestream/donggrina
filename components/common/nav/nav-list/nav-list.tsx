import Link from 'next/link';
import styles from './nav-list.module.scss';
import { useRouter } from 'next/router';

interface NavListProps {
  href: string;
  text: string;
  SvgValue: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export default function NavList({ href, text, SvgValue }: NavListProps) {
  const { pathname } = useRouter();
  return (
    <li className={pathname.includes(href) ? `${styles.on} ${styles.navList}` : styles.navList}>
      <Link href={href}>
        <div className={styles.imgBox} aria-label={text}>
          <SvgValue />
        </div>
        <span>{text}</span>
      </Link>
    </li>
  );
}
