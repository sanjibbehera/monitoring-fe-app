// src/store/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  role: string;
  isEmailVerified: boolean;
  name: string;
  email: string;
  id: string;
}

const initialState: UserState = {
  role: '',
  isEmailVerified: false,
  name: '',
  email: '',
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
