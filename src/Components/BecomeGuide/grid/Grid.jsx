import React from 'react';

// COMPONENTS 
import Category from './category/Category';
import Place from './place/Place';
import Price from './price/Price';
// STYLE
import s from './Grid.module.scss'

const Grid = () => {
    return (
        <div className={s.grid}>
            <Category />

            <Place />

            <Price />
        </div>
    );
};

export default Grid;