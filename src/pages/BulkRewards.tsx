import { Stack, Paper } from '@mui/material';
import { selectUsersToReward } from '../store/features/rewards/rewardsSelectors';
import { useAppSelector } from '../store/hooks';

export const BulkRewards = () => {
  const users = useAppSelector(selectUsersToReward);

  return (
    <>
      {!users.length ? (
        <h1>No users to reward</h1>
      ) : (
        <Stack spacing={2}>
          {users.map((user) => {
            return (
              <Paper key={user.id}>
                {user.name}, {user.email}, {user.jobTitle}
              </Paper>
            );
          })}
        </Stack>
      )}
    </>
  );
};
