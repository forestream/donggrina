import { ButtonClassType } from '@/components/common/button/types/button-type';

export interface LinkType extends ButtonClassType {
  text: string;
  href: string;
}
