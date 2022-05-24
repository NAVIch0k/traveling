import React from 'react';

//  COMPONENTS
import Grid from './grid/Grid';
// STYLE
import s from './BecomeGuide.module.scss'

const BecomeGuide = () => {
    return (
        <div className={s.becomeGuide}>
            <h2 className={s.becomeGuide__header}>Становитесь гидом по родному городу вместе с
            <span className={s.becomeGuide__title}> Loctravel</span></h2>

            <Grid />
        </div>
    );
};

export default BecomeGuide;