// Row1.js
import styles from '../../../styles/allPages/Dash_Content.module.css';
import React, {useEffect, useState} from 'react';

const Row1 = ({row1Data}) => {
    const items = {
        'one': {name:'All Items', value : row1Data.items, icon: 'fa fa-car'},
        'two': {name: 'All Categories', value : row1Data.categories,  icon: 'fa fa-user'},
        'three': {name: 'All Purchases', value : row1Data.purchases, icon: 'fa fa-users'},
        'four': {name:'All Users', value : row1Data.users, icon: 'fa fa-road'}
    }    

    const returnCard = (key, dict) =>{
        return(
            <div className={styles.card}>
                <article>
                    <div className={`${styles.icondiv} ${styles[key]}`}>
                        <i className={`fas ${dict.icon}`}/>
                    </div>
                </article>
                <aside>
                    <p>{dict.name}</p>
                    <p>{dict.value}</p>
                </aside>
            </div>
        )
    }
    return (
        <div className={styles.row1}>
            {
                Object.keys(items).map(key=>(
                    returnCard(key, items[key])
                ))
            }
        </div>
    );
};

export default Row1;
