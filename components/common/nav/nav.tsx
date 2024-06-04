import styles from './nav.module.scss';
import Gooey from './gooey/gooey';
import { NAV_LIST_DATA } from '@/utils/constants/navData';
import { NavListProps } from './types/nav';
import NavListItem from './nav-list/nav-list-item';

export default function Nav() {
  return (
    <>
      <div className={styles.box}>
        <ul className={`${styles.nav}`}>
          {NAV_LIST_DATA.map((data: NavListProps, index) => {
            return <NavListItem key={index} {...data} />;
          })}
        </ul>
      </div>

      <Gooey />
    </>
  );
}
