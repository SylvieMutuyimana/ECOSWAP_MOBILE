// Row2.js
import styles from '../../../styles/allPages/Dash_Content.module.css';
import React, {useState} from 'react';

const Row2 = ({row2Data}) => {
    const allValues = row2Data 
    const items = {
        'one': {name:'Items', variable: 'items'},
        'two': {name: 'Categories', variable: 'categories'},
        'three': {name: 'Purchases', variable: 'purchases'},
        'four': {name:'Users', variable: 'users'}
    }  
    const fields = {
        'items':{'image': 'Image', 'name':'Name', 'seller':'Seller','amount': 'Amount', 'doneOn':'Posted On'},
        'categories':{'name':'Category', 'doneOn':'Modified On'},
        'purchases':{'item': 'Item', 'seller': 'Seller', 'buyer':'Buyer', 'doneOn':'Done On'},
        'users':{'name':'Name','type':'Account', 'doneOn':'Modified On'},
    }  
    return (
        <div className={styles.row2}>
            {
                Object.entries(items).map(([key, item])=>(
                    <div className={`${styles.col} ${styles[key]}`} key={key}>
                        <div className={styles.h4}>
                            <h4>{item?.name}</h4>
                        </div>
                        <div className={styles.theBlock}>
                        <table>
                            <thead>
                                <tr> 
                                    {
                                        Object.keys(fields[item.variable]).map((field, index)=>(
                                                <td key={index}>
                                                    {field}
                                                </td>
                                        ))
                                    }
                                </tr>
                                <tr className={styles.hr}>
                                    <td colSpan={Object.keys(fields[item.variable])?.length}>
                                        <hr/>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {allValues && allValues[item.variable]?
                                    allValues[item.variable].map((dict, thekey)=>(
                                        <tr key={thekey}>
                                            {
                                                Object.keys(fields[item.variable]).map((field, index)=>(
                                                    <td key={index}>
                                                        {dict[field]} {field==='amount'? 'rwf': ''}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    )
                                ):(
                                    <tr>
                                        <td colSpan='4'>
                                            No {item.name} found
                                        </td>
                                    </tr>
                                )}                            
                            </tbody>
                        </table>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Row2;
