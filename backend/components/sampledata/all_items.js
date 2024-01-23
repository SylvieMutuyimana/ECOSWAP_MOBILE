import { randomDate } from "./randomdate";

const item = {
    name: 'item',  _id: '', image: 'image', amount: '', category: 'category', seller: 'seller', 
    buyer:'buyer' , description: 'description', status: '', 
    added_date: '', doneOn: '23/01/2022',
}

const recent_items= (theItems) => {
    const split_item = (item) => {
        const dateString = item.added_date;
        if (dateString) {
            const [day, month, year] = dateString.split('/');
            return new Date(`${year}-${month}-${day}`);
        }
        return null;
    };
    
    const sortedItems = theItems.sort((a, b) => {
        const dateA = split_item(a);
        const dateB = split_item(b);
        return dateB - dateA; 
    });

    return sortedItems;
};

export const theItems_ =()=>{
    const the_items = {all:[], new:[],sold:[], unsold:[]}
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
        the_items.all.push(item_);
        if(count %2 === 0 || count %3 === 0 || count %4 === 0){
            the_items.unsold.push(item_);
        }else {
            item_['sold_date'] = randomDate()
            item_['buyer'] = item.buyer + count;
            the_items.sold.push(item_);
        }
    }
    the_items['new'] = recent_items(the_items.all)
    return the_items
}
