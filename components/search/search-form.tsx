import SearchBar from '@/components/search/search-bar';
import styles from './search-form.module.scss';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SERVICE_CONFIGS } from '@/utils/constants/search';
import useMembersQuery from '@/hooks/queries/search/use-members-query';
import SearchMemberFilter from '@/components/search/search-member-filter';
import SearchSection from '@/components/search/search-section';
import SearchPetCheckbox from '@/components/search/search-pet-checkbox';
import getQueryString from '@/utils/search/get-query-string';
import { SearchFormProps } from '@/types/search';
import useResultsQuery from '@/hooks/queries/search/use-results-query';
import { PropsWithChildren, useEffect, useState } from 'react';
import { DiaryByQueries, GrowthByQueries, TodoByQueries } from '@/api/search/index.type';
import Calendar from '../calendar-compound/calendar';
import useSelect from '@/hooks/use-select';
import CalendarInstance from '@/utils/date/date.utils';

export default function SearchForm({ service, onSubmit: handleResults, children }: PropsWithChildren<SearchFormProps>) {
  const [searchParams, setSearchParams] = useState('');

  const resultsQuery = useResultsQuery(
    SERVICE_CONFIGS[service].get as (
      searchParams: string,
    ) => Promise<TodoByQueries[] & DiaryByQueries[] & GrowthByQueries[]>,
    searchParams,
  );
  const petsQuery = usePetsQuery();
  const membersQuery = useMembersQuery();

  useEffect(() => {
    resultsQuery.refetch();
  }, [searchParams]);

  useEffect(() => {
    resultsQuery.data && handleResults(resultsQuery.data);
  }, [resultsQuery.data]);

  const { register, handleSubmit, watch, setValue, getValues, resetField } = useForm<FieldValues>({
    defaultValues: {
      keyword: '',
      filter: '',
      pets: [],
      members: [],
    },
  });

  const ALL_SELECTED: { [key: string]: (string | number)[] } = {
    pets: petsQuery.data.map((pet) => pet.name),
    members: membersQuery.data.members.map((member) => member.nickname),
  };

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const keyword = getQueryString(SERVICE_CONFIGS[service].queries[0], [formData.keyword]);
    const petNames = getQueryString(SERVICE_CONFIGS[service].queries[1], formData.pets);
    const writerNames = getQueryString(SERVICE_CONFIGS[service].queries[2], formData.members);
    const date = getQueryString(SERVICE_CONFIGS['diary'].queries[3], [yearMonthDate]);

    setSearchParams(`?${keyword}&${petNames}&${writerNames}` + (service === 'diary' ? `&${date}` : ''));
  };

  const handleClickAll = (fieldName: string) => {
    if (getValues(fieldName).length === ALL_SELECTED[fieldName].length) {
      resetField(fieldName);
      return;
    }
    setValue(fieldName, ALL_SELECTED[fieldName]);
  };

  const { selectedItem: selectedYear, handleSelectedItem: onSelectedYear } = useSelect<number>(
    CalendarInstance.currentYear,
  );
  const { selectedItem: selectedMonth, handleSelectedItem: onSelectedMonth } = useSelect<number>(
    CalendarInstance.currentMonth,
  );
  const { selectedItem: selectedDate, handleSelectedItem: onSelectedDate } = useSelect<number>(
    CalendarInstance.currentDate,
  );

  const onResetToday = () => {
    onSelectedYear(CalendarInstance.currentYear);
    onSelectedMonth(CalendarInstance.currentMonth);
    onSelectedDate(CalendarInstance.currentDate);
  };

  const yearMonthDate = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`;

  if (membersQuery.isPending || petsQuery.isPending) return <p>loading</p>;
  if (membersQuery.isError) return <p>Error: {membersQuery.error.message}</p>;
  if (petsQuery.isError) return <p>Error: {petsQuery.error.message}</p>;

  return (
    <form className={styles.inner} onSubmit={handleSubmit(onSubmit)}>
      <SearchBar register={register} />

      {children}

      {SERVICE_CONFIGS[service].hasCalendar && (
        <SearchSection title="날짜">
          <div className={styles.dateContainer}>
            <Calendar
              value={{
                year: selectedYear,
                month: selectedMonth,
                date: selectedDate,
                onSelectedYear,
                onSelectedMonth,
                onSelectedDate,
                onResetToday,
              }}
            >
              <Calendar.Year />
              <Calendar.Month />
              <Calendar.Weekly />
            </Calendar>
          </div>
        </SearchSection>
      )}

      <SearchSection selectAll={handleClickAll.bind(null, 'pets')} title="반려동물">
        <div className={styles.pets}>
          {petsQuery.data.map((pet) => (
            <SearchPetCheckbox
              register={register}
              service={service}
              pet={pet}
              selected={watch('pets')}
              key={pet.petId}
            />
          ))}
        </div>
      </SearchSection>

      <SearchSection selectAll={handleClickAll.bind(null, 'members')} title="작성자 필터">
        <div className={styles.members}>
          {membersQuery.data.members.map((member) => (
            <SearchMemberFilter key={member.id} member={member} register={register} selected={watch('members')} />
          ))}
        </div>
      </SearchSection>
    </form>
  );
}
