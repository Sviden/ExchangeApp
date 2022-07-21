import React, { useState} from 'react';
import Select from 'react-select'
import styles from '../../styles/topBar.module.scss'
import { Gold } from './Gold';
import { EurUsd } from './EurUsdRAtes';
import {Btc} from './Btc'
import { CurrencyContextTopBarProvider } from './CurrContext';
import { GoldSilverTopBarProvider } from './CurrContext';
import { Silver } from './Silver';
import { Menu } from '../Menu/Menu';
import { Squash as Hamburger } from 'hamburger-react'
import { useNavigate } from 'react-router-dom';
import { theme } from '../MainSection/themeForSelect';

export const TopBar =()=>{
  
  const [showMenu, setshowMenu] = useState(false);
  const [base, setBase] = useState(JSON.parse(localStorage.getItem('base')));
  const navigate = useNavigate();
  const options = [        
        { value: 'EUR', label: 'EUR' },
        { value: 'USD', label: 'USD' }, ]


  const onSelect = (base) => {
       setBase(base.value)
         localStorage.setItem('base', JSON.stringify(base.value));
   }
  
    return (
        <>
        <nav className={styles.NavContainer}>
            <div className={styles.compNameMenu} ><div onClick={()=>{setshowMenu(!showMenu); navigate('/')}}><Hamburger /></div><h5 onClick={()=>navigate('/')} className={styles.compName}>COMPNAME</h5></div>  
          <CurrencyContextTopBarProvider base={base}> 
            <div className={`${styles.navEl}  `}><EurUsd/></div>  
            <div className={styles.navEl}><Btc/></div>  
             </CurrencyContextTopBarProvider>
             <GoldSilverTopBarProvider base={base}>
             <div className={styles.navEl}><Gold/></div>  
             <div className={styles.navEl}><Silver/></div>  
            </GoldSilverTopBarProvider>
            <div className={styles.navSelect} style={{color: "black"}}>
            <Select value={base} options={options} onChange={onSelect} placeholder={base?base:'EUR'} theme={theme}/>
           </div>

        </nav> 
            {showMenu &&
            <>
             <CurrencyContextTopBarProvider base={base}> 
             <div className={`${styles.navElInMenu}  `}><EurUsd/></div>  
             <div className={styles.navElInMenu}><Btc/></div>  
              </CurrencyContextTopBarProvider>
              <GoldSilverTopBarProvider base={base}>
              <div className={styles.navElInMenu}><Gold/></div>  
              <div className={styles.navElInMenu}><Silver/></div>  
             </GoldSilverTopBarProvider>
             <Menu/>

             </>
           }

</>
    )
}

