export const the_url = 'localhost:3000'
export const mobileApphost = the_url
export const websiteHost = the_url
//export const backendAppHost =(userId) = the_url + '/' + userId 
export const apiHost = the_url + '/api'

export const host_routes = {
    'items': 'items', 'categories': 'categories', 'users': 'users',
    'organisation': 'organisation'
}

export const post_url = (endpoint)=> apiHost + host_routes[Object.keys(host_routes).find(key => key === endpoint)] 
export const get_url = (endpoint)=> apiHost + endpoint

