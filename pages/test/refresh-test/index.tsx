import MyFamilyApi from '@/apis/my/groups';

export default function RefreshTest() {
  const petsApi = new MyFamilyApi();
  const handleClick = async () => {
    try {
      const response = await petsApi.myFamilyCode();
      console.log(response);
    } catch {
      console.log('에러');
    }
  };
  return (
    <section style={{ padding: '126px 0' }}>
      <button type="button" onClick={handleClick}>
        클릭
      </button>
    </section>
  );
}
