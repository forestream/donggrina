export const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren', // 부모의 애니메이션이 시작 후 자식 애니메이션 진행
      staggerChildren: 0.2, // 자식들이 0.4초 주기로 애니메이션 실행 ex) 0.4 -> 0.8 -> 1.2
    },
  },
};

export const childrenHorizontalVariants = {
  hidden: {
    opacity: 0,
    x: '-80px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.8, // 질량을 뜻함. 질량이 클 수록 애니매이션이 느리고, 작을수록 빠름
      damping: 13, // 진동을 줄이는 데 사용. damping이 없다면 요소가 계속 진동을 함
      duration: 0.5,
    },
  },
};
