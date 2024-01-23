import Image from 'next/image';
import styles from '../../../styles/allPages/app_pages.module.css';
import Layout from './Layout';

const Home = ({ userId }) => {
    const org_details = {}
    return (
        <Layout userId={userId} add_route = '/settings/edit' main_page = 'true'>
            <div className={styles.all_settings}>
                <div className={`${styles.theDetails} ${styles.index} ${styles.settings}`}>
                    <form>
                        <h3>ecoSWAP Settings</h3>
                        <article>
                            <label>
                                <p>Location</p>
                            </label>
                            <label>
                                <p>Address</p>
                                <p>Province: </p>
                                <p>District: </p>
                                <p>Sector: </p>
                                <p>Street</p>
                            </label>
                            <label>
                                <p>Postal Code: </p>
                            </label>
                        </article>
                        <aside>
                            <label>
                                <p>Email: </p>
                            </label>
                            <label>
                                <p>Phone Number: </p>
                            </label>
                            <label >
                                <p>Website Url: </p>
                            </label>
                        </aside>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
