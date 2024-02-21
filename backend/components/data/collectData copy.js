import { appData, get_url, host_routes } from "./routes";
import axios from 'axios';

const recentItems= (theItems) => {
    const split_item = (item) => {
        if (item.added_date) {
            const [day, month, year] = item.added_date.split('/');
            return new Date(`${year}-${month}-${day}`);
        }return null;
    };
    const sortedItems = theItems.sort((a, b) => {
        return split_item(a) - split_item(b); 
    });
    return sortedItems;
};
const return_users = (users, type)=> users.filter(user=>user.type === type)

const setUserData = (hostedItems, users)=>{
    const the_buyers = return_users(users, 'buyer')
    const the_items = {
        wishlist: {buyers:the_buyers.length, len:0,items:[]},
        cart: {buyers:the_buyers.length, len:0, items:[]},
        purchases: {buyers:the_buyers.length, len:0,items:[]}
    }
    buyers.map(buyer=>{
        the_items.wishlist['len'] = the_items.wishlist['len'] + buyer?.wishlist.length
        the_items.cart['len'] = the_items.cart['len'] + buyer?.cart.length
        const buyer_purchases = hostedItems?.filter(item=>item.buyer === buyer._id)
        the_items.purchases['len'] = the_items.purchases['len'] + buyer_purchases.length
        buyer?.wishlist.map(item=>{
            const item___ = item; item___['user'] = buyer._id
            the_items.wishlist['items'].push(item___)
        })
        buyer?.cart.map(item=>{
            const item___ = item; item___['user'] = buyer._id
            the_items.cart['items'].push(item___)
        })
        buyer_purchases.map(item=>{
            const item___ = item; item___['user'] = buyer._id
            the_items.purchases['items'].push(item___)
        })
    })
    appData['wishlist'] = the_items.wishlist
    appData['cart'] = the_items.cart
    appData['purchases'] = the_items.purchases
}

const setEndpointData = async(endpoint)=>{
    try {
        const the_route = 'http:localhost:3000/api/' + endpoint
        const response = await axios.get(the_route);
        console.log('the_route: ', the_route)
        if (response.status === 200) {
            console.log('data: ', response.data)
            return response.data
        }
    } catch (error) {console.log(error);}
}
export const fetchData = () => {
    Object.keys(host_routes)?.map(route=>{
        console.log('route: ', route)
        const hostedData = setEndpointData(host_routes[route])
        console.log('hostedData: ', hostedData)
        let hostedItems; let hostedUsers
        if(hostedData){
            switch(host_routes[route]){
                case 'items':
                    hostedItems = hostedData ; 
                    appData['all_items'] = hostedItems
                    /*
                    appData['sold_items'] = hostedItems?.filter(items=>items.status === 'sold')
                    appData['unsold_items'] = hostedItems?.filter(items=>items.status === 'In stock')
                    appData['new_items'] = recentItems(hostedItems)
                    */
                    appData['sold_items'] = hostedItems
                    appData['unsold_items'] = hostedItems
                    appData['new_items'] = hostedItems
                    break;
                case 'categories':
                    appData['categories'] = hostedData; break
                case 'organisation':
                    appData['organisation'] = hostedData; break
                case 'users':
                    hostedUsers = hostedData; 
                    appData['all'] = hostedUsers
                    /*
                    appData['admins'] = return_users(hostedUsers, 'admin')
                    appData['buyers'] = return_users(hostedUsers, 'buyer')
                    appData['sellers'] = return_users(hostedUsers, 'seller')
                    */
                    appData['admins'] = hostedUsers
                    appData['buyers'] = hostedUsers
                    appData['sellers'] = hostedUsers
                    break
                default: break;
            }
        }
        if(hostedItems && hostedUsers && !(appData['wishlist'] && appData['cart'] && appData['purchases'])){
            setUserData(hostedItems, hostedUsers)
        }
    })
    console.log('appData: ', appData)
    return appData
};
