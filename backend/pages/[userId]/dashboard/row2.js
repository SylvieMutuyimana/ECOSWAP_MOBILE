// Row2.js
import styles from '../../../styles/allPages/Dash_Content.module.css';
import React, {useState} from 'react';

const Row2 = ({row2Data}) => {
    const allValues = row2Data 
    const items = {
        'one': {name:'New Items', variable: 'items'},
        'two': {name: 'Categories', variable: 'categories'},
        'three': {name: 'Recently Sold Items', variable: 'sold_items'},
        'four': {name:'New Users', variable: 'users'}
    }  

    const fields = {
        'items':{'image': 'Image', 'name':'Name', 'seller':'Seller','amount': 'Amount', 'doneOn':'Posted On'},
        'categories':{'name':'Category', 'doneOn':'Modified On', 'items': 'No items'},
        'sold_items':{'name': 'Item', 'seller': 'Seller', 'buyer':'Buyer', 'sold_date':'Sold On'},
        'users':{'name':'Name','type':'Account', 'joining_date':'Joining Date'},
    }  
    const returnTable = (variable) =>{
        const theData= allValues[variable]
        return(
            <>
                {theData?.map((dict, thekey)=>(
                    <tr key={thekey}>
                        {
                            Object.keys(fields[variable]).map((field, index)=>(
                                <td key={index}>
                                    {
                                        field === 'name' && variable==='users'? (
                                            <>{dict?.firstName} {dict?.lastName}</>
                                        ):(<>
                                            {dict?.[field]} {field==='amount'? 'rwf': ''}
                                        </>)
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </>
        )
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
                                                {fields?.[item.variable]?.[field]}
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
                                {allValues && allValues[item.variable]?(
                                    <>{returnTable(item.variable)}</>
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
