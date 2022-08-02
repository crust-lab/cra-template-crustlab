import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../services/usersApi/types';
import { useAppSelector } from '../hooks';
import { TUserState } from './types';

const initialState: TUserState = {
  selectedUser: {} as User,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUser: (state, { payload }: PayloadAction<User>) => {
      state.selectedUser = payload;
    },
  },
});

export const usersReducerPath = usersSlice.name;
export const { setSelectedUser } = usersSlice.actions;

export const useSelectedUserSelector = () =>
  useAppSelector(({ users }) => users.selectedUser);

export default usersSlice.reducer;
