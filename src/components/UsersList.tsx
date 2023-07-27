import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user.model';

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users = [] }: UsersListProps) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
