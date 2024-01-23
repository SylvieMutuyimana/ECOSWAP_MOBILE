import Page_Layout from '../Layout';
export default function Layout({ children, add_route, userId, main_page, page_name}) {
    const pageName = 'Items'
    return (
        <Page_Layout name={pageName} add_route={add_route}
            pageName = {pageName} userId={userId} main_page={main_page}
            page_name ={page_name}
        >
            {children}
        </Page_Layout>
    );
};