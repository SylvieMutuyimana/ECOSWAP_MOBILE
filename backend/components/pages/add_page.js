import styles from '../../../styles/add_page.module.css';

const addPage = (dic, key, handleChange) =>{
    return(
        <div>
            <label> {dic[key].text}</label>
            <br/>
            {dic[key].type === 'select' ?
                <select value={thevalue} onChange={handleChange} className={styles.input} required>
                    {dic[key].options.map(option=>(
                        <option value={option}>{option}</option>
                    ))}
                </select>
            :
                <input type={dic[key].type} value={dic[key].value}  className={styles.input}
                onChange={handleChange} placeholder={`${dic[key].text} ...`}  required/>
            }
        </div>
    )
}