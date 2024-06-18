import styles from './family-util-buttons.module.scss';
import FamilyAddButton from './family-add-button/family-add-button';
import FamilyDeleteButton from './family-delete-button/family-delete-button';
import FamilyRenameButton from './family-rename-button/family-rename-button';
import { useGetFamilyAllQuery } from '@/hooks/queries/my/family/useGetFamilyQueries';

export default function FamilyUtilButtons() {
  const { data } = useGetFamilyAllQuery();
  if (!data) return null;
  const renameData = {
    id: data.id,
    name: data.name,
  };
  return (
    <ul className={styles.buttonList}>
      <li>
        <FamilyAddButton />
      </li>
      <li>
        <FamilyRenameButton renameData={renameData} />
      </li>
      <li>
        <FamilyDeleteButton groupId={data.id} />
      </li>
    </ul>
  );
}
