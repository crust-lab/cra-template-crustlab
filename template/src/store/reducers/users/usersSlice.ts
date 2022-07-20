import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../services/usersApi/usersType';
import { RootState } from '../../store';
import { TUserState } from './userSliceTypes';

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

export const getSelectedUser = ({ users }: RootState) => users.selectedUser;

export default usersSlice.reducer;
