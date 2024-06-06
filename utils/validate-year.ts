export default function validateYear(year: string | undefined) {
  const today = new Date();
  const yearToday = today.getFullYear();

  const VALIDITY = !!year && Number(year) >= yearToday - 100 && Number(year) <= yearToday + 100;

  return VALIDITY;
}
