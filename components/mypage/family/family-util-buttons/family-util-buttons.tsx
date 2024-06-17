import Button from '@/components/common/button/button';
import styles from './family-util-buttons.module.scss';
import FamilyAddButton from './family-add-button/family-add-button';

export default function FamilyUtilButtons() {
  return (
    <ul className={styles.buttonList}>
      <li>
        <FamilyAddButton />
      </li>
      <li>
        <Button type="button" className="secondary" round>
          가족 이름 변경
        </Button>
      </li>
      <li>
        <Button type="button" className="tertiary" round>
          가족 페쇄
        </Button>
      </li>
    </ul>
  );
}
