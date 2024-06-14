// import PetRadio from '@/components/calendar-monthly/pet-radio';
// import React from 'react';
// import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
// import styles from './create.module.scss';

// export default function CreateGrowth() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit: SubmitHandler<FieldValues> = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className={styles.petSelector}>
//           반려동물 선택
//           <div className={styles.petLabelContainer}>
//             <PetRadio register={register} petName="dog" />
//             <PetRadio register={register} petName="cat" />
//           </div>
//           {errors.pet && <p className={styles.error}>{errors.pet.message}</p>}
//         </div>
//       </form>
//     </div>
//   );
// }
