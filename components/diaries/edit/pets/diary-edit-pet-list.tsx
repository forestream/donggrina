import React from 'react';
import DiaryEditPetsItem from '@/components/diaries/edit/pets/diary-edit-pets-item';
import styles from './diary-edit-pet-list.module.scss';
import { Pet } from '@/api/calendar/request.type';

interface DiaryEditPetListProps {
  pets: Pet[];
  selectedPets: number[];
}

export default function DiaryEditPetList(props: DiaryEditPetListProps) {
  return (
    <ul className={styles['pet-list']}>
      {props.pets.map((pet) => {
        return props.selectedPets.map((selectedPet) =>
          +pet.petId === selectedPet ? (
            <DiaryEditPetsItem pet={pet} key={pet.petId} defaultPet={true} />
          ) : (
            <DiaryEditPetsItem pet={pet} key={pet.petId} />
          ),
        );
      })}
    </ul>
  );
}
