import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import { users as usersList } from '../data';
import { User } from '../models/user.model';

export default function UsersList() {
  const [users] = useState(usersList);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user: User) => {
        return (
          <React.Fragment key={user.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.jobTitle} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
