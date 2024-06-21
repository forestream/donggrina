export default function getQueryString(key: string, values: string | string[]) {
  const modifiedValues = typeof values === 'string' ? [values] : values;

  return modifiedValues.length ? modifiedValues.map((value: string) => key + '=' + value).join('&') : key + '=';
}
