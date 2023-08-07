import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user.model';
import { selectUsersToReward } from '../store/features/rewards/rewardsSelectors';
import { add, remove } from '../store/features/rewards/rewardsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users = [] }: UsersListProps) {
  const dispatch = useAppDispatch();
  const usersToReward: User[] = useAppSelector(selectUsersToReward);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {users.map((user: User) => {
        return (
          <React.Fragment key={user.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>

              <Link to={`/user-details/${user.id}`}>
                <ListItemText primary={user.name} secondary={user.jobTitle} />
              </Link>

              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  dispatch(add(user));
                }}
              >
                Add To Rewards List
              </Button>
              {Boolean(usersToReward.find((usr) => usr.id === user.id)) && (
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    dispatch(remove(user));
                  }}
                >
                  Remove from rewards list
                </Button>
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
