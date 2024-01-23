import { theItems_ } from "./all_items";
import { theCategories_ } from "./categories";
import { items_wish, theUsers_ } from "./users"; 

export const startComponents_ = {
    all_items: theItems_().all, sold_items: theItems_().sold, unsold_items: theItems_().unsold,
    new_items: theItems_().new , categories: theCategories_(), 
    users: {admins:theUsers_().admins, buyers:theUsers_().buyers,sellers:theUsers_().sellers, all:theUsers_().all},
    wishlist: items_wish().wishlist, cart: items_wish().cart, purchases: items_wish().purchases, 
    organisation : {
        name: 'EcoSWAP',
        email:'contact@eco-swap.com',
        social: {
            Instagram:{username:'eco-swap', link:'www.instagram.com/eco-swap'},
            Facebook:{username:'eco-swap', link:'www.facebook.com/eco-swap'},
            Whatsapp:{username:'0786405038', link:'www.whatsapp.com/0786405038'}
        }
    }
};

