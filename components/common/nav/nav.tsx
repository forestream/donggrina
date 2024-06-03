import styles from './nav.module.scss';
import Gooey from './gooey/gooey';
import { NAVVALUE } from '@/utils/constants/navData';
import NavList from './nav-list/nav-list';
import { NavListProps } from './types/nav';

export default function Nav() {
  return (
    <>
      <div className={styles.box}>
        <ul className={`${styles.nav}`}>
          {NAVVALUE.map(({ href, text, SvgValue }: NavListProps, index) => {
            return <NavList key={index} href={href} text={text} SvgValue={SvgValue} />;
          })}
        </ul>
      </div>

      <Gooey />
    </>
  );
}
