import { useState } from 'react';
import { User } from '../models/user.model';
import { users as usersList } from '../data';
import SearchBar from '../components/SearchBar';
import UsersList from '../components/UsersList';

export function Home() {
  const [searchValue, setSearchValue] = useState('ALEKSANDR');
  const [users, setUsers] = useState<User[]>(usersList);

  return (
    <div>
      <SearchBar
        initialValue={searchValue}
        onSearchClick={(searchBarValue: string) => {
          setSearchValue(searchBarValue);

          const newUsers: User[] = usersList.filter((user: User) =>
            user.name
              .toLowerCase()
              .includes((searchBarValue ?? '').toLowerCase())
          );

          setUsers(newUsers);
        }}
      />
      <UsersList users={users} />
    </div>
  );
}
