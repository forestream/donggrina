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
      imageUrl: 'https://donggrina.s3.ap-northeast-2.amazonaws.com/kakao-message.png',
      imageWidth: 800,
      imageHeight: 400,
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
