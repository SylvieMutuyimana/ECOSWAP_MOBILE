import React from "react";
import { websitePages } from '../../components/navigation/page_links';
import styles from '../../styles/website/home.module.css';
import Contact from "./contact";
import Involved from "./involved";
import RendingPage from "./rendingPage";

const WebHomepage = ({orgDetails})=>{
    console.log('orgDetails1:', orgDetails)
    const pages={
        'Home': RendingPage, 
        'Contact': Contact, 
        'Get Involved': Involved
    }
    const returnPage =(page)=>{
        if(page){
            return(<>{page(orgDetails)}</>)
        }
    }
    return(
        <div id={styles.Home}>
            {
                websitePages.map((page, index)=>
                    {
                        const the_id = page.id
                        return(
                            <div id={styles[page.linkText]} className={`${styles.section} ${styles[the_id]}`} key={index}>
                                {page.name !== 'Home' &&(
                                    <><h3>{page.name}</h3><div className={styles.hr}/></>
                                )}
                                <>{returnPage(pages[page.name])}</>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default WebHomepage