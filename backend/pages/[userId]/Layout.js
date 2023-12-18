import styles from '../../styles/allPages/app_pages.module.css';
import pageStyles from '../../styles/components.module.css';
export default function FacilityLayout({ children, main_page, page_name}) {
    return (
        <section id={pageStyles.PageLayout}>
            {page_name && (<h2>{page_name}</h2>)}
            <div id={styles.thePage} className={page_name!=='Dashboard' && page_name!=='Vehicle Details'? styles.thePage : ''}>
                {
                    main_page ? (
                        <>
                            <br/>
                            {children}
                        </>
                    ):(
                        <>
                            <div className={styles.add}>
                                <br/>
                                {children}
                            </div>
                        </>
                    )
                }
            </div>
        </section>
    );
};