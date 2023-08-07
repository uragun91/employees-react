import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models/user.model';

export interface RewardsState {
  usersToReward: User[];
}

const initialState: RewardsState = {
  usersToReward: [],
};

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<User>) => {
      if (!state.usersToReward.find((usr) => usr.id === action.payload.id)) {
        state.usersToReward = [...state.usersToReward, action.payload];
      }
    },
    remove: (state, action: PayloadAction<User>) => {
      state.usersToReward = state.usersToReward.filter(
        (usr) => usr.id !== action.payload.id
      );
    },
  },
});

export const { add, remove } = rewardsSlice.actions;

export default rewardsSlice;
