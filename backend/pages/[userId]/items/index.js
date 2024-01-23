import { useEffect, useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import componentStyles from '../../../styles/components.module.css';
import Layout from './Layout';
import { setLocalStorageProp_ } from '../../../components/localStorage';
import Image from 'next/image';
import { ReturnItem } from './itemId';
const Home = ({appData , userId}) => {
    const [searchQuery, setSearchQuery] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [chosenItems, setChosenItems] = useState('all_items')
    const allItems = appData?.[chosenItems]
    const [theItems, setItems] = useState(allItems)
    const [selectedItem, setSelectedItem] = useState(null)
    const [error, setError] = useState(null);
    useEffect(() => {
        const to_be = appData?.[chosenItems] || []
        if(to_be !== theItems){
            setItems(to_be)
        }
    }, [chosenItems]);

    useEffect(() => {
        console.log('here')
        if(filteredItems){
            setItems(filteredItems)
            console.log('here1')
        }else{
            setItems(allItems)
        }
    }, [filteredItems]);

    useEffect(()=>{
        console.log('here2')
        if(searchQuery && searchQuery!==''){
            const filtered = allItems?.filter(item => 
                item?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
                || item?.seller?.toLowerCase()?.includes(searchQuery.toLowerCase())        
            )
            if (filtered && filtered.length > 0) {
                console.log('here4')
                setFilteredItems(filtered);
                setError(null);
            } else {
                setFilteredItems(null)
                setError("No matching items found");
                console.log('her5')
            }
        }
    },[searchQuery])

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleselected = (item)=>{
        setLocalStorageProp_('selectedItem', item)
        setSelectedItem(item)
    }
    const theBody = ()=>{
        return(
            <>
                {allItems && (
                    theItems && theItems.length >0?(
                        theItems.map((item, index) => (
                            <tr key={item._id} onClick={()=> handleselected(item)}>
                                <td>{index+1}</td>
                                <td>
                                    <span><Image src={item?.image} alt="item" width={50} height={50} /></span>
                                    <span> {item.name}</span>
                                </td>
                                <td>{item.amount}</td>
                                <td>{item.seller}</td>
                                {chosenItems==='sold_items'&&(<td>{item.buyer}</td>)}
                                <td>{item.status}</td>
                                <td>
                                    {chosenItems==='new_items'?item.added_date:item.doneOn}
                                </td>
                            </tr>
                        ))
                    ):(
                        <tr><td colSpan='11'>
                            {error? error : 'No items available'}
                        </td></tr>
                    )
                )}
            </>
        )
    }

    const returnAllItems = ()=>{
        return(
            <table>
                <thead>
                    <tr>
                        <th>S.No</th><th>Item</th>
                        <th>Amount</th><th>Seller</th>
                        {chosenItems==='sold_items'&&(<th>Buyer</th>)}
                        <th>Status</th>
                        <th>                            
                            {chosenItems==='new_items'?'Added Date':'Last Modified'}
                        </th>
                    </tr>
                    <tr><td colSpan='11'><hr/></td></tr>
                </thead>
                <tbody>{theBody()}</tbody>
            </table>
        )
    }
    const item_types = {
        'All':'all_items', 'In stock': 'unsold_items','New':'new_items', 'Sold':'sold_items'
    }

    return (
        <Layout userId={userId} add_route = '/items/add' main_page = 'true' page_name={selectedItem?'Items Details':'Items List'}>
            {
                <div className={styles.SearchBar}>
                    <article className={styles.button}>
                        {        
                            selectedItem?(
                                <button onClick={()=>setSelectedItem(null)}>back</button>
                            ):(
                                Object.keys(item_types).map((keey, index)=>(
                                    <div key={index} className={chosenItems===item_types?.[keey]?styles.active:''} onClick={()=>setChosenItems(item_types[keey])}>
                                        {keey}
                                    </div>
                                ))
                            )
                        }
                    </article>
                    {!selectedItem &&(
                        <>
                            <article>Number of items: {theItems?.length}</article>
                            <input
                                type="text"
                                placeholder="Search by vehicle, driver, date"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </>
                    )}
                </div>
            }
            <div className={`${styles.page} ${selectedItem ? styles.specific : styles.index}`}>
                    {selectedItem?ReturnItem(selectedItem):returnAllItems()}
            </div>
            {
                !selectedItem&&(
                    <div className={componentStyles.pageNav}>
                        <article>
                            Previous
                        </article>
                        <aside>
                            Next
                        </aside>
                    </div>
                )
            }
        </Layout>
    );
};

export default Home;
