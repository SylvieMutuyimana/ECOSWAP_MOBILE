import { useEffect, useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import componentStyles from '../../../styles/components.module.css';
import { useRouter } from 'next/router';
import Layout from './Layout';

const Item = ({ userType, appData , userId}) => {
    const allCarts = appData?.cart
    console.log('allCarts: ', allCarts)
    const router = useRouter();
    const [itemDetails, setItemDetails] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setItemDetails(itemDetails);
    }, [itemDetails]);

    return (
        <Layout userId={userId} main_page = 'true' page_name = 'Items Details'>
            <div className={`${styles.page} ${styles.specific}`}>
                <table>
                    <tbody>
                        {
                            itemDetails && itemDetails.length >0?(
                                <>
                                    <tr>
                                        <td>Item</td>
                                        <td>{itemDetails.item}</td>
                                    </tr>
                                    <tr>
                                        <td>Seller</td>
                                        <td>{itemDetails.seller}</td>
                                    </tr>
                                    <tr>
                                        <td>Buyer</td>
                                        <td>{itemDetails.buyer}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>{itemDetails.date}</td>
                                    </tr>
                                    <tr>
                                        <td>Comment</td>
                                        <td>{itemDetails.comment}</td>
                                    </tr>
                                </>
                            ):(
                                <tr><td colSpan='2'>
                                    Error loading item details
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

export default Item;
