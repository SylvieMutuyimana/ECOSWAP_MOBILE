import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../../styles/add_page.module.css';
import componentStyles from '../../../styles/components.module.css';
import Layout from './Layout';

const grid_name = 'booking'
const trip_types = ['work', 'visiting']
const AddBooking = ({userId}) => {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [booking, setBooking] = useState({
        name: {type:String, value:'', text: 'Name'},
        from: {type:String, value:'', text: 'Trip Start Location'},
        to: {type:String, value:'',text: 'Trip End Location'},
        date: {type:Date, value:'',text: 'Date'},
        departure: {type:String, value:'',text: 'Departure Time'},
        return: {type:String, value:'',text: 'Return Time'},
        reason: {type:String, value:'',text: 'Reason'},
        trip_type: {type:'select', value:'',text: 'Trip Type', options: trip_types},
        vehicle: {type:String, value:'',text: 'Vehicle'},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'picture'){
            const imageFile = e.target.files[0];
            setBooking((prev) => ({ 
                ...prev, picture: { ...prev.picture, value: imageFile } 
            }));
        }else{
            setBooking((prev) => ({ 
                ...prev, [name]: 
                {...prev[name], value: value}
            }));
        }
    };
    console.log(booking)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const missingField = Object.keys(booking).find(key => !booking[key]);
        if (missingField) {
            setError(`Missing ${missingField}`);
        } else {
            try {
                const the_route = post_url('bookings')
                const response = await axios.put(the_route, {"bookings": booking});
                if (response.status === 200) {
                    setError('booking updated successfully');
                } else {
                    setError('Failed to submit booking');
                }
            } catch (error) {
                console.error('Error submitting booking:', error);
                setError('Failed to submit booking');
            }
        }
    };

    return (
        <Layout page_name='Add Booking'>
            <div className={styles.add_page}>
                <form onSubmit={handleSubmit} className={styles[grid_name]}>
                    {error && <p className={styles.error}>{error}</p>}
                    <section className={styles[grid_name]}>
                        {
                            Object.keys(booking).map((key, index)=>{
                                const thevalue = booking[key].value
                                return(
                                    <div key={index}>
                                        <label> {booking[key].text}</label>
                                        <br/>
                                        {booking[key].type === 'select' ?
                                            <select value={thevalue} onChange={handleChange} className={styles[key]} name={key} required>
                                                {booking[key].options.map((option, the_index)=>(
                                                    <option key={the_index} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        :
                                        <input type={booking[key].type} name={key}
                                        value={booking[key].value}
                                        className={styles[key]}
                                        onChange={handleChange}
                                        placeholder={`${booking[key].text} ...`}
                                        src={booking[key].type === 'file' ? booking[key].value : ''}
                                        accept={booking[key].type === 'file' ? 'image/*' : ''}
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

export default AddBooking;
