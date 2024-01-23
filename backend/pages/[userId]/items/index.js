import { useEffect, useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import componentStyles from '../../../styles/components.module.css';
import { useRouter } from 'next/router';
import Layout from './Layout';
import { setLocalStorageProp_ } from '../../../components/localStorage';
import { AppPages } from '../../../components/navigation/page_links';
import Image from 'next/image';
const Home = ({ userType, appData , userId}) => {
    const router = useRouter();
    const {pathname} = useRouter()
    const [searchQuery, setSearchQuery] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [chosenItems, setChosenItems] = useState('all_items')
    const allItems = appData?.[chosenItems]
    console.log('allItems: ', allItems)
    const [theItems, setItems] = useState(allItems)
    const [itemId, setitemId] = useState(null)
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        if(userId&&itemId && itemId!='' && pathname.endsWith('items')){
            const item_page = AppPages.find(page=>page.name === 'Items').path
            const next_page = `${userId}${item_page}/${itemId}`
            console.log(next_page)
            router.push(next_page)
        }
    }, [userId, itemId])
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

    const handleselected = (_id)=>{
        setLocalStorageProp_('selectedItem', _id)
        setitemId(_id)
        console.log('clicked')
        console.log('_id:', _id)
    }
    const theBody = ()=>{
        return(
            <>
                {allItems && (
                    theItems && theItems.length >0?(
                        theItems.map((item, index) => (
                            <tr key={item._id} onClick={()=> handleselected(item._id)}>
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

    const selectItems =()=>{
        const selection__ = {
            'All':'all_items', 'In stock': 'unsold_items','New':'new_items', 'Sold':'sold_items'
        }
        return(
            <>
                {
                    Object.keys(selection__).map((keey, index)=>(
                        <div key={index} className={chosenItems===selection__?.[keey]?styles.active:''} onClick={()=>setChosenItems(selection__[keey])}>
                            {keey}
                        </div>
                    ))
                }
            </>
        )
    }
    return (
        <Layout userId={userId} add_route = '/items/add' main_page = 'true' page_name = 'Items List'>
            <div className={styles.SearchBar}>
                <article className={styles.button}>
                    {selectItems()}
                </article>
                <article>Number of items: {theItems?.length}</article>
                <input
                    type="text"
                    placeholder="Search by vehicle, driver, date"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className={`${styles.page} ${styles.index}`}>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Seller</th>
                            {chosenItems==='sold_items'&&(<th>Buyer</th>)}
                            <th>Status</th>
                            <th>                            
                                {chosenItems==='new_items'?'Added Date':'Last Modified'}
                            </th>
                        </tr>
                        <tr><td colSpan='11'><hr/></td></tr>
                    </thead>
                    <tbody>
                        {theBody()}
                    </tbody>
                </table>
            </div>
            <div className={componentStyles.pageNav}>
                <article>
                    Previous
                </article>
                <aside>
                    Next
                </aside>
            </div>
        </Layout>
    );
};

export default Home;
