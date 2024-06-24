import React from 'react';
import styles from './content.module.scss';
import { GrowthDetailsContent } from '@/types/growth/details';

interface ContentProps {
  category: string;
  content: GrowthDetailsContent;
}

export default function Content({ category, content }: ContentProps) {
  const getTitleColor = (category: string) => {
    switch (category) {
      case '간식':
        return styles.snackTitle;
      case '이상 증상':
        return styles.abnormalSymptomTitle;
      case '병원 기록':
        return styles.hospitalTitle;
      default:
        return styles.foodTitle;
    }
  };
  const getContentColor = (category: string) => {
    switch (category) {
      case '간식':
        return styles.snackContent;
      case '이상 증상':
        return styles.abnormalSymptomContent;
      case '병원 기록':
        return styles.hospitalContent;
      default:
        return styles.foodContent;
    }
  };
  const getTitleAndContent = () => {
    switch (category) {
      case '간식':
        return { title: '간식', content: content.snack };
      case '이상 증상':
        return { title: '이상 증상', content: content.abnormalSymptom };
      default:
        return { title: '사료', content: content.food };
    }
  };

  const { title, content: displayContent } = getTitleAndContent();

  if (category === '병원 기록') {
    return (
      <div className={styles.contentContainer}>
        {content.hospitalName && (
          <div className={styles.wrapper}>
            <div className={`${styles.title} ${getTitleColor(category)}`}>병원명</div>
            <div className={`${styles.content} ${getContentColor(category)}`}>{content.hospitalName}</div>
          </div>
        )}
        {content.symptom && (
          <div className={styles.wrapper}>
            <div className={`${styles.title} ${getTitleColor(category)}`}>증상*</div>
            <div className={`${styles.content} ${getContentColor(category)}`}>{content.symptom}</div>
          </div>
        )}
        {content.diagnosis && (
          <div className={styles.wrapper}>
            <div className={`${styles.title} ${getTitleColor(category)}`}>진료 내용</div>
            <div className={`${styles.content} ${getContentColor(category)}`}>{content.diagnosis}</div>
          </div>
        )}
        {content.medicationMethod && (
          <div className={styles.wrapper}>
            <div className={`${styles.title} ${getTitleColor(category)}`}>복용 방법</div>
            <div className={`${styles.content} ${getContentColor(category)}`}>{content.medicationMethod}</div>
          </div>
        )}
        {content.price && (
          <div className={styles.wrapper}>
            <div className={`${styles.title} ${getTitleColor(category)}`}>가격</div>
            <div className={`${styles.content} ${getContentColor(category)}`}>{content.price}</div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.contentContainer}>
        <div className={styles.wrapper}>
          <div className={`${styles.title} ${getTitleColor(category)}`}>{title}</div>
          <div className={`${styles.content} ${getContentColor(category)}`}>{displayContent}</div>
        </div>
      </div>
    );
  }
}
