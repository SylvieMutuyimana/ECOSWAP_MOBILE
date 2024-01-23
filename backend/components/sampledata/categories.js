import { randomDate } from "./randomdate";

const category = {
    name: 'category', _id: '', doneOn: '23/01/2022'
}

export const theCategories_ =()=>{
    const the_categories = [];
    for (let count = 0; count <= 8; count++) {
        const category_ = {};
        category_['_id'] = 'Cat' + count + 'TN';
        category_['name'] = category.name + count;
        category_['doneOn'] = randomDate()
        the_categories.push(category_);
    }
    return the_categories
}
