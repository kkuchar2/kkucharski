import {createContext, useContext, useState} from 'react';

const AppContext = createContext([]);

export const AppWrapper = ({ children }) => {
    const [navbarOpened, setNavbarOpened] = useState(false);

    return <AppContext.Provider value={[navbarOpened, setNavbarOpened]}>
        {children}
    </AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);