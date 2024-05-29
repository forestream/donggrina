import Link from 'next/link';

interface LinkType {
  text: string;
  href: string;
}

export default function LinkItem({ text, href }: LinkType) {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  );
}
