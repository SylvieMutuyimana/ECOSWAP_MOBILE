export const getPropsFromLocalStorage = (type) => typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(type)) : null;

export const setLocalStorageProp_ = (type, value) => localStorage.setItem(type, JSON.stringify(value));

const user_holder = 'logged_ECOSWAP_admin'

export const Localstorage_login = (user_details) => {
    setLocalStorageProp_(user_holder, user_details)
}
export const Localstorage_logout = () => {
    localStorage.setItem(user_holder, JSON.stringify(null));
}

export const getUserFromLocalStorage = () => typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(user_holder)) : null;