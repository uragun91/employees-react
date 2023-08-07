import { useEffect, useState } from 'react';
import { User } from '../models/user.model';
import SearchBar from '../components/SearchBar';
import UsersList from '../components/UsersList';
import { getEmployees } from '../services/employees.service';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getEmployees(searchValue).then((usersResponse: User[]) => {
      setUsers(usersResponse);
    });
  }, [searchValue]);

  return (
    <div>
      <SearchBar
        initialValue={searchValue}
        onSearchClick={(searchBarValue: string) => {
          setSearchValue(searchBarValue);
        }}
      />

      <Button size="small" component={Link} to="/add-user">
        Add Employee
      </Button>
      <Button size="small" component={Link} to="/rewards">
        Rewards
      </Button>
      <UsersList users={users} />
    </div>
  );
}
