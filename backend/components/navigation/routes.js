export const the_url = 'localhost:3000'
export const mobileApphost = the_url
export const websiteHost = the_url
//export const backendAppHost =(userId) = the_url + '/' + userId 
export const apiHost = the_url + '/api'

export const host_routes = {
    'bookings': 'bookings', 'drivers':'drivers', 'employees': 'employees',
    'expenses': 'expenses', 'fuel': 'fuel', 'reminders': 'reminders',
    'users':'users', 'vehicleGroups': 'vehicleGroups', 'vehicles': 'vehicles',
    'organisation': 'organisation'
}
export const post_url = (endpoint)=> apiHost + host_routes[Object.keys(host_routes).find(key => key === endpoint)] 
export const get_url = (endpoint)=> apiHost + endpoint