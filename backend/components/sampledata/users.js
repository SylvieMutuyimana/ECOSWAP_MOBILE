import { randomDate } from "./randomdate";

const user= {
    _id: '',  type: '', firstName: 'name', lastName: 'last', 
    joining_date:'', email: 'user', phoneNum: '', password: 'password', doneOn: '', 
    wishlist: {
        _id: '', item_id_: '', doneOn: '23/01/2022'
    },
    cart: {
        _id: '', item_id_: '', doneOn: '23/01/2022'
    },
    purchases: {
        _id: '', item_id_: '', doneOn: '23/01/2022'
    },
}

export const theUsers_ =()=>{
    const the_users = {admins:[], buyers:[], sellers:[], all:[]}
    Object.keys(the_users).map(user_type=>{
        const the_l = user_type==='admins'? 2 : user_type==='buyers'? 4 : 5
        for (let count = 0; count <= the_l; count++) {
            const user_ = {};
            user_['_id'] = 'USER' + ((count + 12) * 304) + '3F23' + ((count + 9) * 694) + '03G3';
            user_['type'] = (count === 0 || count === 1 || count === 3 || count === 8 || count === 10) ? 'Buyer'
                : (count === 2 || count === 5 || count === 6 || count === 9) ? 'Seller' : 'Admin';
            user_['firstName'] = user.firstName + count;
            user_['lastName'] = user.lastName + count;
            user_['email'] = user.email + count + '@gmail.com ';
            user_['phoneNum'] = count > 9 ? '078435955' + count : count % 2 === 0 ? '072634564' + count :
                count % 3 === 0 ? '073454564' + count : '078844564' + count;
            user_['password'] = user.password + count;
            user_['joining_date'] = randomDate()
            user_['doneOn'] = randomDate()
            if(user_type=== 'buyers'){
                const the_wishlist = []; const the_cart = []; const the_purchases = []
                const item = {
                    name: 'item',  _id: '', image: 'image', amount: '', category: 'category', seller: 'seller', 
                    buyer:'buyer' , description: 'description', status: '', 
                    added_date: '', doneOn: '23/01/2022',
                }            
                for (let count = 0; count <= 50; count++) {
                    const item_ = {};
                    item_['name'] = item.name + count;
                    item_['_id'] = 'LS' + ((count + 12) * 304) + 'fgm' + ((count + 9) * 694) + 'TN';
                    item_['amount'] = (((count * 150) + (count * 20) / (count * 10)) > 500000) ? 
                        (((count * 110) + (count * 20) / (count * 10)) / (count * 10)):
                        (count * 122)
                    item_['category'] = item.category + (count % 9) 
                    item_['seller'] = item.seller + count;
                    item_['description'] = item.description + count;
                    item_['status'] = (count %2 === 0 || count %3 === 0 || count %4 === 0) ? 'In stock' : 'Sold';
                    item_['added_date'] = randomDate()
                    item_['doneOn'] = randomDate()
                    item_['_id'] = 'LS' + ((count + 12) * 304) + 'fgm' + ((count + 9) * 694) + 'TN';
                    if(count %2===0 && count %4===0 && count %8==0){
                        the_wishlist.push(item_);
                    }else if(count %3===0 && count %9 ===0){
                        the_cart.push(item_);
                    }else{
                        the_purchases.push(item_);
                    }
                }
                user_['wishlist'] = the_wishlist
                user_['cart'] = the_cart
                user_['purchases'] = the_purchases
            }
            the_users[user_type].push(user_);
            user_['type'] = user_type
            the_users['all'].push(user_);
        }
    })
    return the_users
}

export const items_wish = ()=>{
    const buyers = theUsers_().buyers
    const the_items = {
        wishlist: {buyers:buyers.length, len:0,items:[]},
        cart: {buyers:buyers.length, len:0, items:[]},
        purchases: {buyers:buyers.length, len:0,items:[]}
    }
    buyers.map(buyer=>{
        the_items.wishlist['len'] = the_items.wishlist['len'] + buyer?.wishlist.length
        the_items.cart['len'] = the_items.cart['len'] + buyer?.cart.length
        the_items.purchases['len'] = the_items.purchases['len'] + buyer?.purchases.length
        buyer?.wishlist.map(item=>{
            const item___ = item; item___['user'] = buyer._id
            the_items.wishlist['items'].push(item___)
        })
        buyer?.cart.map(item=>{
            const item___ = item; item___['user'] = buyer._id
            the_items.cart['items'].push(item___)
        })
        buyer?.purchases.map(item=>{
            const item___ = item; item___['user'] = buyer._id
            the_items.purchases['items'].push(item___)
        })
    })
    return the_items
}