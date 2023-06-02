import { createTheme } from '@mui/material/styles';

export const palette = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#0d0d0f',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#782abb',
                    color: '#ffffff'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0f0811',
                    height: '100%',
                    overflowY: 'hidden',
                    color: '#FFFFF',
                    border: 'none',
                },
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: 'none'
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#ffffff'
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#0f0811'
                }
            }
        }
    }
})