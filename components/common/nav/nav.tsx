import styles from './nav.module.scss';
import Gooey from './gooey/gooey';
import { NAVVALUE } from './data/navData';
import NavList from './nav-list/nav-list';

interface NavListProps {
  href: string;
  text: string;
  SvgValue: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export default function Nav() {
  return (
    <>
      <ul className={`${styles.nav}`}>
        {NAVVALUE.map(({ href, text, SvgValue }: NavListProps, index) => {
          return <NavList key={index} href={href} text={text} SvgValue={SvgValue} />;
        })}
      </ul>

      <Gooey />
    </>
  );
}
