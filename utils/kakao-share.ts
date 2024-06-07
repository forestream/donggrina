interface KakaoShareType {
  url: string;
  description: string;
  title: string;
}

export const onKakaoShare = ({ url, description, title }: KakaoShareType) => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'donggrina',
      description: description,
      imageUrl: '이미지 넣기',
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons: [
      {
        title: title,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
};
