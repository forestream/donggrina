import { ButtonClassType } from '@/utils/constants/button-class';

export interface LinkType extends ButtonClassType {
  text: string;
  href: string;
}
