import { useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import pageStyles from '../../../styles/allPages/specificPage.module.css';
import componentStyles from '../../../styles/components.module.css';
import Category from './category';
import Layout from './Layout';
const Home = ({appData , userId}) => {
    const theCategories= appData?.categories
    const [categoryItems, setItems] = useState(null)
    const [categoryId, setCategoryId] = useState(null)
    const [categoryName, setCategoryName] = useState(null)

    const category_items = ({category_name})=>{
        console.log('category_name: ', category_name)
        const the_items = appData?.items?.filter(item=> item.category === category_name) || []
        console.log('the_items: ', the_items)
        console.log('appData?.items: ', appData?.items)
        return the_items
    }

    const sold_items = ({category_name})=>{
        return appData?.sold_items?.filter(item=> item.category === category_name) || []
    }

    const handleselected = (_id, name)=>{
        setCategoryId(_id)
        setCategoryName(name)
        setItems(category_items(name))
    }
    const removeselected = ()=>{
        setCategoryId(null);setCategoryName(null);setItems(null)
    }
    return (
        <Layout userId={userId} add_route = '/categories/add' page_name = {categoryId? null : 'Categories List'}>
            {
                categoryId && (
                    <div>
                        <button onClick={()=>removeselected()} className={componentStyles.back}>back</button>
                    </div>
                )
            }
            <div className={`${styles.page} ${categoryId? styles.specific: styles.index}`}>
                {
                    categoryId?(
                        <div className={pageStyles.thePage}>
                            <div>
                                <h3>{categoryName}</h3>
                                <p>Number of items: {categoryItems?.length}</p>
                                <p>Sold items: {sold_items.length} <span onClick={()=>setItems(sold_items(categoryName))}><i>View</i></span></p> 
                            </div>
                            <Category categoryItems={categoryItems} categoryName={categoryName} />
                        </div>
                    ):(
                        <div className={componentStyles.categoriesGrid}>
                            {
                                theCategories && theCategories.length >0?(
                                    theCategories.map(category => (
                                        <div key={category._id} className={componentStyles.card} onClick={()=>handleselected(category._id, category.name)}>
                                            <h4>{category.name}</h4>
                                            <p>No of items: {category_items(category.name)}</p>
                                        </div>
                                    ))
                                ):(
                                    <div>
                                        No categories available
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </Layout>
    );
};

export default Home;
