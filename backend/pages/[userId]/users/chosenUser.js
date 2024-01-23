import React, { useState } from 'react';
import componentStyles from '../../../styles/components.module.css';

const Chosen_User = ({ chosenUser, appData,typeName}) => {
    const [selectedCategory, setSelectedCategory] = useState(typeName==='sellers'?'sold_items': 'wishlist');
    const category_items = (category)=> chosenUser?.[category] || []
    const [categoryItems, setCategoryItems] = useState(category_items(selectedCategory));
    const the_categories=[
        {'name': 'wishlist', 'display': 'Wishlist'},
        {'name': 'cart', 'display': 'Cart'},
        {'name': 'purchases', 'display': 'Purchases'},
        {'name': 'sold_items', 'display': 'Sold Items'}
    ]

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCategoryItems(category_items(category));
    };
    console.log('chosenUser; ', chosenUser)

    return (
        <>
            <h2>{chosenUser?.firstName}{"'"}s Profile</h2>
            <div className={componentStyles.categoriesGrid}>
                {the_categories.map((category, index) => (
                    <div key={index}
                        className={`${componentStyles.card} ${componentStyles.four} ${selectedCategory === category.name ? componentStyles.selectedCategory : ''}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <h4>{category.display}</h4>
                        <p>No of items: {category_items(category.name).length ||0}</p>
                    </div>
                ))}
            </div>
            <br/>
            {selectedCategory && (
                <div style={{marginTop:'60px !important'}}>
                    <h5>Items in {the_categories.find(category=>category.name===selectedCategory).display} category:</h5>
                    <table>
                        <thead> 
                            <tr>
                                <th>No</th>
                                <th>Item</th>
                                <th>
                                    {selectedCategory==='sold_items'?<>Buyer</>:<>Seller</>}
                                </th>
                                <th>Date</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryItems && categoryItems.length > 0 ? (
                                categoryItems.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td> <td>{item.name}</td>
                                        <td>{selectedCategory==='sold_items'?item.buyer:item.seller}</td> 
                                        <td>{item.doneOn}</td><td>{item.description}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan='7'>
                                        No items available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Chosen_User;
