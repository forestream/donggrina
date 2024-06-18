export default function getQueryString(key: string, values: string[]) {
  return values.length ? values.map((value: string) => key + '=' + value).join('&') : key + '=';
}
