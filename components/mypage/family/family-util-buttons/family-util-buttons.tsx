import styles from './family-util-buttons.module.scss';
import FamilyAddButton from './family-add-button/family-add-button';
import FamilyDeleteButton from './family-delete-button/family-delete-button';
import FamilyRenameButton from './family-rename-button/family-rename-button';
import { MyPageDetails } from '@/types/my-page/family';

export default function FamilyUtilButtons({ data }: MyPageDetails) {
  return (
    <ul className={styles.buttonList}>
      <li>
        <FamilyAddButton />
      </li>
      <li>
        <FamilyRenameButton name={data.name} />
      </li>
      <li>
        <FamilyDeleteButton />
      </li>
    </ul>
  );
}
