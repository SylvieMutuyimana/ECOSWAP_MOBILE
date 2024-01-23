import { useEffect, useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import componentStyles from '../../../styles/components.module.css';
import { useRouter } from 'next/router';
import Layout from './Layout';
import { setLocalStorageProp_ } from '../../../components/localStorage';
import { AppPages } from '../../../components/navigation/page_links';
import Image from 'next/image';

const Home = ({ userType, appData , userId}) => {
    const allPurchases = appData?.sold_items
    console.log('allPurchases: ', allPurchases)
    const router = useRouter();
    const {pathname} = useRouter()
    const [searchQuery, setSearchQuery] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [theItems, setTheItems] = useState(allPurchases)
    const [purchaseId, setpurchaseId] = useState(null)
    const [error, setError] = useState(null);
    useEffect(()=>{
        if(purchaseId && purchaseId!='' && pathname.endsWith('items')){
            const item_page = AppPages.find(page=>page.name === 'Purchases').path
            const next_page = `${userId}${item_page}/${purchaseId}`
            console.log(next_page)
            router.push(next_page)
        }
    }, purchaseId)
    
    useEffect(() => {
        console.log('here')
        if(filteredItems){
            setTheItems(filteredItems)
            console.log('here1')
        }else{
            setTheItems(allPurchases)
        }
    }, [filteredItems]);
    useEffect(()=>{
        console.log('here2')
        if(searchQuery && searchQuery!==''){
            const filtered = allPurchases?.filter(item => 
                item?.vehicle?.toLowerCase().includes(searchQuery.toLowerCase())
                || item?.driver?.toLowerCase().includes(searchQuery.toLowerCase())
                || item?.date?.toLowerCase().includes(searchQuery.toLowerCase())        
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
        setpurchaseId(_id)
        console.log('clicked')
        console.log('_id:', _id)
    }
    return (
        <Layout userId={userId} add_route = '/items/add' main_page = 'true' page_name = 'Purchased Items List'>
            <div className={styles.SearchBar}>
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
                            <th>Buyer</th>
                            <th>Status</th>
                            <th>Last Modified</th>
                        </tr>
                        <tr><td colSpan='11'><hr/></td></tr>
                    </thead>
                    <tbody>
                        {allPurchases && (
                            theItems && theItems.length >0?(
                                theItems.map((item, index) => (
                                    <tr key={index} onClick={()=> handleselected(item._id)}>
                                        <td>{index+1}</td>
                                        <td>
                                            <span><Image src={item?.image} alt="item" width={50} height={50} /></span>
                                            <span> {item.name}</span>
                                        </td>
                                        <td>{item.amount}</td>
                                        <td>{item.seller}</td>
                                        <td>{item.buyer}</td>
                                        <td>{item.status}</td>
                                        <td>{item.doneOn}</td>
                                    </tr>
                                ))
                            ):(
                                <tr><td colSpan='5'>
                                    {error? error : 'No items available'}
                                </td></tr>
                            )
                        )}
                        
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
