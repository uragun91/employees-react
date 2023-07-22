import { Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearchClick: (value: string) => void;
}

export default function SearchBar({ onSearchClick }: SearchBarProps) {
  const [text, setText] = useState('');

  return (
    <div className="search-bar-wrapper">
      <TextField
        className="search-bar"
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
