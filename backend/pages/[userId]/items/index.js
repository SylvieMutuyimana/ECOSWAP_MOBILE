import { useEffect, useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import componentStyles from '../../../styles/components.module.css';
import { useRouter } from 'next/router';
import Layout from './Layout';
import { setLocalStorageProp_ } from '../../../components/localStorage';
import { AppPages } from '../../../components/navigation/page_links';
const Home = ({ userType, facilityData , userId}) => {
    const facilityBookings = facilityData.bookings
    console.log('facilityBookings: ', facilityBookings)
    const router = useRouter();
    const {pathname} = useRouter()
    const [searchQuery, setSearchQuery] = useState(null);
    const [filteredBookings, setFilteredBookings] = useState(null);
    const [theBookings, setTheBookings] = useState(facilityBookings)
    const [bookingId, setbookingId] = useState(null)
    const [error, setError] = useState(null);
    useEffect(()=>{
        if(bookingId && bookingId!='' && pathname.endsWith('bookings')){
            const booking_page = AppPages.find(page=>page.name === 'Bookings').path
            const next_page = `${userId}${booking_page}/${bookingId}`
            console.log(next_page)
            router.push(next_page)
        }
    }, bookingId)
    
    useEffect(() => {
        console.log('here')
        if(filteredBookings){
            setTheBookings(filteredBookings)
            console.log('here1')
        }else{
            setTheBookings(facilityBookings)
        }
    }, [filteredBookings]);
    useEffect(()=>{
        console.log('here2')
        if(searchQuery && searchQuery!==''){
            const filtered = facilityBookings?.filter(booking => 
                booking?.vehicle?.toLowerCase().includes(searchQuery.toLowerCase())
                || booking?.driver?.toLowerCase().includes(searchQuery.toLowerCase())
                || booking?.date?.toLowerCase().includes(searchQuery.toLowerCase())        
            )
            if (filtered && filtered.length > 0) {
                console.log('here4')
                setFilteredBookings(filtered);
                setError(null);
            } else {
                setFilteredBookings(null)
                setError("No matching bookings found");
                console.log('her5')
            }
        }
    },[searchQuery])

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleselected = (_id)=>{
        setLocalStorageProp_('selectedBooking', _id)
        setbookingId(_id)
        console.log('clicked')
        console.log('_id:', _id)
    }
    return (
        <Layout userId={userId} add_route = '/bookings/add' main_page = 'true' page_name = 'Bookings List'>
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
                            <th>Buyer</th>
                            <th>Seller</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                        <tr><td colSpan='11'><hr/></td></tr>
                    </thead>
                    <tbody>
                        {facilityBookings && (
                            theBookings && theBookings.length >0?(
                                theBookings.map((booking, index) => (
                                    <tr key={booking._id} onClick={()=> handleselected(booking._id)}>
                                        <td>{index+1}</td>
                                        <td>{booking.item}</td>
                                        <td>{booking.buyer}</td>
                                        <td>{booking.seller}</td>
                                        <td>{booking.state}</td>
                                        <td>{booking.action}</td>
                                        <td>
                                            <article>see |</article>
                                            <aside>edit</aside>
                                        </td>
                                    </tr>
                                ))
                            ):(
                                <tr><td colSpan='5'>
                                    {error? error : 'No bookings available'}
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
