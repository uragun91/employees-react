import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';

function App() {
  const [searchValue, setSearchValue] = useState('');

  console.log('AAAAAAAAAAAA');

  return (
    <div>
      It works
      <SearchBar
        onSearchClick={(searchBarValue: string) => {
          setSearchValue(searchBarValue);
        }}
      />
      <UsersList />
      <pre>{searchValue}</pre>
    </div>
  );
}

export default App;
