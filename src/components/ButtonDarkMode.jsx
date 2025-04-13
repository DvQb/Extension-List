import { useEffect, useState } from 'react'
import moon from '../assets/img/icon-moon.svg'
import sun from '../assets/img/icon-sun.svg'

const ButtonDark = () => {

    const [darkMode, setDarkmode] = useState(() => {
        
        const theme = localStorage.getItem('theme');
        return theme ? theme === 'dark' : false;
      });

    useEffect(() => {

            const root = window.document.documentElement;

            if(darkMode){
                root.classList.add('dark')
                localStorage.setItem('theme' , 'dark')
            }else {
                root.classList.remove('dark')
                localStorage.setItem('theme' , 'light')
            }


    },[darkMode]);

    const handleDarkMode = ()  => {
        setDarkmode(!darkMode);
    }

    return(
        <section className='mx-4 my-3'>
               
                <div onClick={handleDarkMode} className='cursor-pointer w-fit p-3 rounded-xl bg-iconBgLight dark:bg-iconBgDark'>

                    {darkMode ? 
                    
                      (<img src={sun}/> )


                      : (<img src={moon}/>)
                    }

                </div>
        
        </section>
    )
}

export default ButtonDark