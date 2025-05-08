// src/features/theme/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import img from '../../assets/dark_mode.png';
import img2 from '../../assets/light_mode.png';

interface ThemeState {
  darkMode: boolean;
  modeLogo: string;
}

const initialState: ThemeState = {
  darkMode: true,
  modeLogo: img,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      state.modeLogo = state.darkMode ? img : img2;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      state.modeLogo = action.payload ? img : img2;
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
