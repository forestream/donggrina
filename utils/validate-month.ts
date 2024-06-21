export default function validateMonth(month: string | undefined) {
  const VALIDITY = !!month && Number(month) >= 1 && Number(month) <= 12;

  return VALIDITY;
}
