import { Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearchClick: (value: string) => void;
  initialValue?: string;
}

export default function SearchBar({
  onSearchClick,
  initialValue = '',
}: SearchBarProps) {
  const [text, setText] = useState(initialValue);

  return (
    <div className={styles['search-bar-wrapper']}>
      <TextField
        className={styles['search-bar']}
        label="Search field"
        type="search"
        value={text}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          onSearchClick(text);
        }}
      >
        Search
      </Button>
    </div>
  );
}
