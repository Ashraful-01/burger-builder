import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';


const Main = props => {
    return (
        <div className='App'>
            <Header />
            <BurgerBuilder />
        </div>
    )
}





export default Main;