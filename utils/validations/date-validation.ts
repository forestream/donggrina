export const dateValidation: { [key: string]: { min: number; max: number; errorMessage: string } } = {
  year: { min: 1900, max: 9999, errorMessage: '연도는 1900부터 9999 사이의 숫자여야 합니다.' },
  month: { min: 1, max: 12, errorMessage: '월은 1부터 12 사이의 숫자여야 합니다.' },
  day: { min: 1, max: 31, errorMessage: '일은 1부터 31 사이의 숫자여야 합니다.' },
};
