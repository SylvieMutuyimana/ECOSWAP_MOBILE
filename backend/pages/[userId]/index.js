// Index.js
import styles from '../../styles/allPages/Dashboard.module.css';
import React from 'react';
import Row1 from './dashboard/row1';
import Row2 from './dashboard/row2';
import FacilityLayout from './Layout';
const Index = ({appData}) => {
    const row1Data = {
        items: appData?.items?.length,  categories: appData?.categories?.length, 
        purchases: appData?.purchases?.length,  users: appData?.users?.length, 
    }
    const row2Data = {
        items: appData?.items,  categories: appData?.categories, 
        purchases: appData?.purchases,  users: appData?.users, 
    }
    return (
        <FacilityLayout page_name='Dashboard'>
            <div id={styles.Dashboard}>
                <Row1 row1Data={row1Data}/>
                <Row2 row2Data ={row2Data}/>
            </div>
        </FacilityLayout>
    );
};

export default Index;
