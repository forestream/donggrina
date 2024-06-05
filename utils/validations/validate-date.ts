interface ValidateDateProps {
  value: string;
}

const validateYear = ({ value }: ValidateDateProps) => {
  return /^\d{4}$/.test(value) || '년도는 4자리 숫자여야 합니다.';
};

const validateMonth = ({ value }: ValidateDateProps) => {
  if (value.length === 1) {
    value = '0' + value;
  }
  return (
    (/^\d{2}$/.test(value) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 12) ||
    '월은 01부터 12 사이의 2자리 숫자여야 합니다.'
  );
};

const validateDay = ({ value }: ValidateDateProps) => {
  if (value.length === 1) {
    value = '0' + value;
  }
  return (
    (/^\d{2}$/.test(value) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 31) ||
    '일은 01부터 31 사이의 2자리 숫자여야 합니다.'
  );
};
export { validateYear, validateMonth, validateDay };
