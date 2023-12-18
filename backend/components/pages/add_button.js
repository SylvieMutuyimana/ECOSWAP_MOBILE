import React from 'react'; // Make sure to import React
import componentStyles from '../../styles/components.module.css';
import { useRouter } from 'next/router';

const AddButton = (addRoute, name, main_page) => {
    const router = useRouter();
    console.log('addRoute: ', addRoute);

    const BackButton = () => {
        return (
            <button className={componentStyles.back} onClick={() => router.back()}>
                <i className='fas fa-reply' /> back
            </button>
        );
    };

    const AddButtonComponent = () => {
        return (
            <button className={componentStyles.add_button} onClick={() => router.push(addRoute)}>
                {name && (
                    name === 'Settings' ? (
                        <>Edit {name}</>
                    ) : (
                        <><i className="fa fa-plus" />  Add {name}</>
                    )
                )}
            </button>
        );
    };

    return (
        <div className={componentStyles.add_button_container}>
            {name && (
                main_page ? (
                    <aside>
                        {AddButtonComponent()}
                    </aside>
                ) : (
                    <article>
                        {BackButton()}
                    </article>
                )
            )}
        </div>
    );
};

export default AddButton;
