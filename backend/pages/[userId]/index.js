// Index.js
import styles from '../../styles/allPages/Dashboard.module.css';
import React from 'react';
import Row1 from './dashboard/row1';
import Row2 from './dashboard/row2';
import Page_Layout from './Layout';
const Index = ({appData}) => {
    const row1Data = {
        items: appData?.all_items?.length,  categories: appData?.categories?.length, 
        sold_items: appData?.sold_items?.length,  users: appData?.users?.all?.length, 
    }
    const theCategories = () =>{
        let all_categories= appData?.categories
        all_categories?.map(the_category=>{
            the_category['items']=(appData?.all_items?.filter(item=> item.category === the_category.name)).length || 0
        })
        return all_categories
    }

    const recent = (theItems, by_) => {
        const split_item = (item) => {
            const dateString = item?.[by_];
            if (dateString) {
                const [day, month, year] = dateString.split('/');
                return new Date(`${year}-${month}-${day}`);
            }
            return null;
        };
        
        const sortedItems = theItems?.sort((a, b) => {
            const dateA = split_item(a);
            const dateB = split_item(b);
            return dateB - dateA; 
        });
        return sortedItems?.slice(0, 10);
    };
    
    const row2Data = {
        items: recent(appData?.new_items, 'added_date'),  categories: recent(theCategories(), 'doneOn'), 
        sold_items: recent(appData?.sold_items, 'sold_date'),  users: recent(appData?.users?.all, 'joining_date') 
    }
    return (
        <Page_Layout page_name='Dashboard'>
            <div id={styles.Dashboard}>
                <Row1 row1Data={row1Data}/>
                <Row2 row2Data ={row2Data} appData={appData}/>
            </div>
        </Page_Layout>
    );
};

export default Index;
