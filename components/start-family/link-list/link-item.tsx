import Hyperlink from '@/components/common/button/hyperlink';
import { LinkType } from './types/link-type';

export default function LinkItem({ text, href, className }: LinkType) {
  return (
    <li>
      <Hyperlink className={className} href={href} round>
        {text}
      </Hyperlink>
    </li>
  );
}
