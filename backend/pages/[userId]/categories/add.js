import { useState } from 'react';
import styles from '../../../styles/add_page.module.css';
import componentStyles from '../../../styles/components.module.css';
import Layout from './Layout';

const grid_name = 'category'
const AddCategory = () => {
    const [error, setError] = useState(null);
    const [category, setCategory] = useState({
        name: {type:String, value:'', text: 'Name'},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'picture'){
            const imageFile = e.target.files[0];
            setCategory((prev) => ({ 
                ...prev, picture: { ...prev.picture, value: imageFile } 
            }));
        }else{
            setCategory((prev) => ({ 
                ...prev, [name]: 
                {...prev[name], value: value}
            }));
        }
    };
    console.log(category)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const missingField = Object.keys(category).find(key => !category[key]);
        if (missingField) {
            setError(`Missing ${missingField}`);
        } else {
            try {
                const the_route = post_url('categories')
                const response = await axios.put(the_route, {"categories": category});
                if (response.status === 200) {
                    setError('category updated successfully');
                } else {
                    setError('Failed to submit category');
                }
            } catch (error) {
                console.error('Error submitting category:', error);
                setError('Failed to submit category');
            }
        }
    };

    return (
        <Layout page_name='Add Category'>
            <div className={styles.add_page}>
                <form onSubmit={handleSubmit} className={styles[grid_name]}>
                    {error && <p className={styles.error}>{error}</p>}
                    <section className={styles[grid_name]}>
                        {
                            Object.keys(category).map((key, index)=>{
                                const thevalue = category[key].value
                                return(
                                    <div key={index}>
                                        <label> {category[key].text}</label>
                                        <br/>
                                        {category[key].type === 'select' ?
                                            <select value={thevalue} onChange={handleChange} className={styles[key]} name={key} required>
                                                {category[key].options.map((option, the_index)=>(
                                                    <option key={the_index} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        :
                                        <input type={category[key].type} name={key}
                                        value={category[key].value}
                                        className={styles[key]}
                                        onChange={handleChange}
                                        placeholder={`${category[key].text} ...`}
                                        src={category[key].type === 'file' ? category[key].value : ''}
                                        accept={category[key].type === 'file' ? 'image/*' : ''}
                                        required
                                    />
                                    
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

export default AddCategory;
