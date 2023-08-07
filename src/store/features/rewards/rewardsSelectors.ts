import { RootState } from '../../store';

export const selectUsersToReward = (state: RootState) =>
  state.rewards.usersToReward;
