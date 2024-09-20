import React from 'react';
import DiaryEditPetsItem from '@/components/diaries/edit/pets/diary-edit-pets-item';
import styles from './diary-edit-pet-list.module.scss';
import { Pet } from '@/apis/calendar/request.type';

interface DiaryEditPetListProps {
  pets: Pet[];
  selectedPets: number[];
}

export default function DiaryEditPetList(props: DiaryEditPetListProps) {
  console.log(props.pets);

  const selectedPetSet = new Set(props.selectedPets);
  // defaultPet={selectedPetSet.has(pet.petId)}

  // 펫에 관련된 모든 펫. => fetchPet [2] 구찌, 블랑
  // 선택된 펫을 반복하는거 => DiaryDataPet [2] 구찌, 블랑
  // return (
  //   <ul className={styles['pet-list']}>
  //     {props.pets.map((pet) => {
  //       return props.selectedPets.map((selectedPet) =>
  //         +pet.petId === selectedPet ? (
  //           <DiaryEditPetsItem pet={pet} key={pet.petId} defaultPet={pet.petId === selectedPet} />
  //         ) : (
  //           <DiaryEditPetsItem pet={pet} key={pet.petId} />
  //         ),
  //       );
  //     })}
  //   </ul>
  // );
  return (
    <ul className={styles['pet-list']}>
      {props.pets.map((pet) => (
        <DiaryEditPetsItem pet={pet} key={pet.petId} defaultPet={selectedPetSet.has(pet.petId)} />
      ))}
    </ul>
  );
}
