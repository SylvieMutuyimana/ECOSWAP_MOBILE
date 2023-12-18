const samples = {
    items: {
        name: 'item', image: 'image',amount:'', category: 'category',
        seller: 'seller', description: 'description',
        status:'', doneOn: '23/01/2022',
    },
    purchases:{
        name: 'purchase', buyer: 'buyer', seller: 'seller', 
        date: '', status: '', _id: '', doneOn: '21/10/2022', 
    },
    categories: {
        name: 'category', _id: '', doneOn: '23/01/2022'
    },
    users:{
        name: 'user', email: 'user', password: 'password', 
        type: '', _id: '', doneOn: ''
    }
}
export const theappData = {
    purchases: 'nullData', items: 'nullData', users: 'nullData',
    categories: 'nullData'
}

export const startComponents_ =()=>{
    Object.entries(samples).map(([key, values])=>{
        const the_items = []
        for (let count=0; count<= 10; count++){
            const item_ = {}
            Object.entries(values).map(([theKey, value])=>{
                let the_value__ 
                if(theKey==='status'){
                    the_value__ = (count%2 ===0)?'Active':'Inactive'
                }else if(theKey==='_id'){
                    the_value__ = 'LS' + ((count+12) *304) + 'fgm' +((count+9) *694)  + 'TN'
                }else if(theKey === 'email'){
                    the_value__ = value + count + '@gmail.com'
                }else if(theKey === 'password') {
                    the_value__ = 'password'
                }else if(theKey === 'type') {
                    the_value__ = 'super_admin'
                }else if(theKey === 'doneOn' || theKey === 'date'){
                    the_value__ = count + '/' + '04' + '/' + '2023' 
                }else if(theKey === 'amount') {
                    const amount = (count*40) + (count*20) / (count*10)
                    the_value__ = amount > 500000 ? (amount / 10) : amount
                }else{
                    the_value__ = value + count
                }
                item_[theKey] = the_value__
            })
            the_items.push(item_)
        }
        theappData[key] = the_items
    })
    return theappData
}