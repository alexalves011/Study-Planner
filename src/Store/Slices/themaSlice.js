import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thema: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.thema = action.payload;
    },

    toggleTheme: (state) => {
      state.thema = state.thema.thema === "dark" ? "light" : "dark";
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export const selectThema = (state) => {
  const isDarKTheme = state.thema.thema === "dark";
  return {
    isDark: isDarkTheme,
    background: isDarkTheme
      ? "url('/src/assets/bg-dark.png')"
      : "url('/src/assets/bg-light.png')",
    backgroundColor: isDarkTheme ? "#1f2937" : "#f3f4f6",
    cardBg: isDarkTheme ? "bg-card-dark" : "bg-white",
    textPrimary: isDarkTheme ? "text-white" : "text-gray-800",
    textSecondary: isDarkTheme ? "text-gray-300" : "text-gray-700",
    textMuted: isDarkTheme ? "text-gray-400" : "text-gray-600",
    inputBg: isDarkTheme ? "bg-gray-700" : "bg-white",
    inputBorder: isDarkTheme ? "border-gray-600" : "border-gray-400",
    dividerColor: isDarkTheme ? "border-gray-600" : "border-gray-300",
    dividerPurple: isDarkTheme ? "border-purple-header" : "border-purple-600",
  };
};

export default themeSlice.reducer;
