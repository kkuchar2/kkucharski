import {ChakraProvider} from "@chakra-ui/provider";
import {extendTheme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

import {AppWrapper} from "../context/state";

import "../styles/globals.css";
import '../styles/main.css';

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    },
    styles: {
        global: (props) => ({
            body: {
                bg: "none",
                color: mode("gray.600", "whiteAlpha.900")(props),
            }
        })
    },
    fonts: {
        body: `'Inter', sans-serif`,
    },
    colors: {
        navbar: {
            bg_light: "rgba(255, 255, 255, 0.85)",
            bg_dark: "rgba(33, 33, 33, 0.85)",
        },
        institution: {
            work: {
                accentLight: "#6e97ff",
                accentDark: "#ff6e84",
            },
            education: {
                accentLight: "#11ab85",
                accentDark: "#0097a7",
            }
        }
    }
});

const App = function ({ Component, pageProps }) {
    return <AppWrapper>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    </AppWrapper>;
};

export default App;
