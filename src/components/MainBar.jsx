import { useState, useEffect } from "react";

import ButtonDark from "./ButtonDarkMode";
import logoDark from '../assets/img/logo.svg'
import logoLight from '../assets/img/logo-light.svg'






const MainBar = ()  => {


        const [isDarkMode, setIsDarkMode] = useState(false);
      
        // Sincroniza el estado 'isDarkMode' con el tema almacenado en localStorage al montar el componente
        useEffect(() => {
          const theme = localStorage.getItem('theme');
          if (theme === 'dark') {
            setIsDarkMode(true);
          }
        }, []);

    
    return(

        <div className="bg-elementLight dark:bg-elementDark flex justify-between rounded-[20px] mx-auto mt-12">

            <img src={logoDark} alt="" className="dark:hidden block w-1/8 my-3 mx-4" />
            <img src={logoLight} alt="" className="dark:block hidden w-1/8 mx-4"/>

            
            <ButtonDark/>
        </div>
    )
};

export default MainBar;