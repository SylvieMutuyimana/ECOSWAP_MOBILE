import { useEffect, useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import componentStyles from '../../../styles/components.module.css';
import { useRouter } from 'next/router';
import Layout from './Layout';

const Booking = ({ userType, appData , userId}) => {
    const facilityBookings = appData.bookings
    console.log('facilityBookings: ', facilityBookings)
    const router = useRouter();
    const [bookingDetails, setBookingDetails] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setBookingDetails(bookingDetails);
    }, [bookingDetails]);

    return (
        <Layout userId={userId} main_page = 'true' page_name = 'Bookings Details'>
            <div className={`${styles.page} ${styles.specific}`}>
                <table>
                    <tbody>
                        {
                            bookingDetails && bookingDetails.length >0?(
                                <>
                                    <tr>
                                        <td>Item</td>
                                        <td>{bookingDetails.item}</td>
                                    </tr>
                                    <tr>
                                        <td>Seller</td>
                                        <td>{bookingDetails.seller}</td>
                                    </tr>
                                    <tr>
                                        <td>Buyer</td>
                                        <td>{bookingDetails.buyer}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>{bookingDetails.date}</td>
                                    </tr>
                                    <tr>
                                        <td>Comment</td>
                                        <td>{bookingDetails.comment}</td>
                                    </tr>
                                </>
                            ):(
                                <tr><td colSpan='2'>
                                    Error loading booking details
                                </td></tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div  className={styles.otherbuttons}>
                {error && (<p> Error generating report</p>)}
                <button className={componentStyles.download}> Download </button>
            </div>
        </Layout>
    );
};

export default Booking;
