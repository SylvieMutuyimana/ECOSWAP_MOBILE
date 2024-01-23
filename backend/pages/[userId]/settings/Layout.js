import styles from '../../../styles/allPages/app_pages.module.css';
import pageStyles from '../../../styles/components.module.css';
import AddButton from '../../../components/pages/add_button';

export default function Layout({ children, add_route, userId, main_page }) {
    const name = 'Settings'
    const add_page = (route) => `${userId}/${route}`;

    return (
        <section id={pageStyles.PageLayout}>
            <div id={styles.Settings}>
                {main_page ? (
                    <>
                        {name && (
                            <>{AddButton(add_page(add_route), name, main_page)}</>
                        )}
                        <br />
                        {children}
                    </>
                ) : (
                    <>
                        <div className={styles.add}>
                            {AddButton(add_page(add_route), name)}
                            <br />
                            {children}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
