import { useState } from 'react';
import styles from './search.module.scss';
import SearchForm from '@/components/search/search-form';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';
import { TodoByQueries } from '@/api/search/index.type';

export default function Search() {
  const [results, setResults] = useState<TodoByQueries[]>([]);

  const handleResults = (newResults: TodoByQueries[]) => setResults(() => newResults);

  return (
    <main className={styles.outer}>
      <SearchForm service="calendar" onSubmit={handleResults} />
      {results.map((result) => (
        <CalendarTodo key={result.id} todo={result} />
      ))}
    </main>
  );
}
