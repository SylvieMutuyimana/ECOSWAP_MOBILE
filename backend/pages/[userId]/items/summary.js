import styles from '../../../styles/allPages/app_pages.module.css';
import Layout from './Layout';
const Home = ({ userType, appData , userId}) => {
    const handlers = {
        'all_items': 'All uploaded items',
        'sold_items': 'All sold items',
        'unsold_items': 'All items in stock',
        'wishlist': 'All wishlist items',
        'cart': 'All items in cart',
    }
    const return_row =(handle)=>{
        return(
            <>
                <td style={{fontStyle: 'italic'}}>{handlers[handle]}</td>
                <td>{(handle==='wishlist'||handle==='cart')?appData?.[handle]?.len: appData?.[handle]?.length}</td>
            </>
        )
    }
    return (
        <Layout userId={userId} add_route = '/items/add' main_page = 'true' page_name = 'All Items'>
            <div className={`${styles.page} ${styles.index}`}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Total number of items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(handlers).map((handle, index)=>(
                                <tr key={index}>
                                    {return_row(handle)}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Home;
