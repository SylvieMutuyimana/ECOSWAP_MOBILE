import { get_url, host_routes } from "../navigation/routes";
const all_data= {}

const setEndpointData = async(endpoint)=>{
    try {
        const response = await axios.get(`${get_url(endpoint)}`);
        if (response.status === 200) {
            const the_data = response.data
            all_data[endpoint] = the_data
        }
    } catch (error) {
        console.error(error);
    }
}

export const fetchData = () => {
    return Object.keys(host_routes)?.map(route=>{
        setEndpointData(host_routes[route])
    })
};
