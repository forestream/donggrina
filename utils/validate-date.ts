export default function validateDate(date: string | undefined) {
  const VALIDITY = !!date && Number(date) >= 1 && Number(date) <= 31;

  return VALIDITY;
}
