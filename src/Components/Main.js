import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';


const Main = props => {
    return (
        <div>
            <Header />
            <div className='container'>
                <BurgerBuilder />
            </div>

        </div>
    )
}





export default Main;