import { useState } from 'react';
import styles from '../../../styles/add_page.module.css';
import componentStyles from '../../../styles/components.module.css';
import Layout from './Layout';

const grid_name = 'item'
const trip_types = ['work', 'visiting']
const AddItem = ({userId, appData}) => {
    const categories =()=>{
        const categories_ = []
        appData?.categories.map(categ => {
            categories_.push(categ?.name)
        })
        return categories_
    } 
    const [error, setError] = useState(null);
    const [item, setItem] = useState({
        name: {type:String, value:'', text: 'Name'},
        image: {type:'img', value:'', text: 'Image'},
        amount: {type:'Integer', value:'', text: 'Amount'},
        category: {type:'select', value:'',text: 'Categories', options: categories()},
        seller: {type:String, value:'', text: 'Seller'},
        description: {type:String, value:'', text: 'Description'},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'picture'){
            const imageFile = e.target.files[0];
            setItem((prev) => ({ 
                ...prev, picture: { ...prev.picture, value: imageFile } 
            }));
        }else{
            setItem((prev) => ({ 
                ...prev, [name]: 
                {...prev[name], value: value}
            }));
        }
    };
    console.log(item)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const missingField = Object.keys(item).find(key => !item[key]);
        if (missingField) {
            setError(`Missing ${missingField}`);
        } else {
            try {
                const the_route = post_url('items')
                const response = await axios.put(the_route, {"items": item});
                if (response.status === 200) {
                    setError('item updated successfully');
                } else {
                    setError('Failed to submit item');
                }
            } catch (error) {
                console.error('Error submitting item:', error);
                setError('Failed to submit item');
            }
        }
    };

    return (
        <Layout page_name='Add Item'>
            <div className={styles.add_page}>
                <form onSubmit={handleSubmit} className={styles[grid_name]}>
                    {error && <p className={styles.error}>{error}</p>}
                    <section className={styles[grid_name]}>
                        {
                            Object.keys(item).map((key, index)=>{
                                const thevalue = item[key].value
                                return(
                                    <div key={index}>
                                        <label> {item[key].text}</label>
                                        <br/>
                                        {
                                            item[key].type === 'select' ?
                                                    <select value={thevalue} onChange={handleChange} className={styles[key]} name={key} required>
                                                        {item[key].options.map((option, the_index)=>(
                                                            <option key={the_index} value={option}>{option}</option>
                                                        ))}
                                                    </select>
                                            :(
                                                item[key].type === 'img' ?
                                                (
                                                    <input type='img' name={key} value={item[key].value}
                                                        className={styles[key]} onChange={handleChange}
                                                        src={item[key].value } accept='image/*' required
                                                />):(
                                                    <input type={item[key].type} name={key} value={item[key].value}
                                                    className={styles[key]} onChange={handleChange}
                                                    placeholder={`${item[key].text} ...`} required/>
                                                )
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </section>
                    <br/>
                    <button className={componentStyles.add_button} type="submit">Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default AddItem;
