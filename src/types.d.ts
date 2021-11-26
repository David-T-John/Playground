export interface ThemeContextType {
    darkMode: boolean,
    color: string,
    headerBg: string,
    pageBg: string,
    buttonHoverBg: string,
    updateTheme: function,
};
export interface UserContextType {
    username: string,
    email: string,
    isLoggedIn: boolean,
    updateLogInStatus: function,
    updateUsername: function,
};