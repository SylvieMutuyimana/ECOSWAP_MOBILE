import axios from 'axios';
export const host_routes = {
    'items': 'items', 'categories': 'categories', 'users': 'users',
    'organisation': 'organisation'
}
const appData = {    
    all_items: [], categories: [], 
    users: [], organisation : {}
}

const setEndpointData = async(endpoint)=>{
    try {
        const the_route = 'http:localhost:3000/api/' + endpoint
        console.log('the_route: ', the_route)
        const response = await axios.get(the_route);
        if (response.status === 200) {
            console.log('data: ', response.data)
            return response.data
        }
    } catch (error) {console.log(error);}
}
export const fetchData = () => {
    Object.keys(host_routes)?.map(route=>{
        const hostedData = setEndpointData(host_routes[route])
        console.log('hostedData: ', hostedData)
        let hostedItems; let hostedUsers
        if(hostedData){
            switch(host_routes[route]){
                case 'items':
                    hostedItems = hostedData ; 
                    appData['all_items'] = hostedItems
                    break;
                case 'categories':
                    appData['categories'] = hostedData; break
                case 'organisation':
                    appData['organisation'] = hostedData; break
                case 'users':
                    hostedUsers = hostedData; 
                    appData['users']['all'] = hostedUsers
                    break
                default: break;
            }
        }
    })
    console.log('appData: ', appData)
    return appData
};
