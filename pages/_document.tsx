import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.css"
          integrity="sha512-NzqTHTrO48HsIamogmIaVhTXoSgRF24Cn+ynrNYrFuKrY0AdDbmcNieiOHsQARS/r0Gax9VwV3/rVMHs3ipUlg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
