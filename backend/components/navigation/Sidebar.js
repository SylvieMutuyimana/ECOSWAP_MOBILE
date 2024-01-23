import Link from 'next/link';
import styles from '../../styles/sidebar.module.css';
import { SidebarPages } from './page_links';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar = ({sidebarOpen,toggleSidebar,userDetails, userId}) => {
  const userType = userDetails?.type || 'super_admin'
  const sidebar_pages =  SidebarPages[userType]
  const router = useRouter();
  const handleLinkClick = (event) => {
    event.preventDefault();
  };
  
  const closeSidebar = (event) => {
    event.stopPropagation();
    if (window.innerWidth <= 900 && sidebarOpen) {
      toggleSidebar();
    }
  };

  const the_link = (link) => `/${userId}/${link}`

  return (
    <div id={styles.sidebar_inner} className={sidebarOpen? styles.big: styles.small}>
      <ul>
        <li className={styles.toggle}>
          <span onClick={toggleSidebar} className={styles.toggleSidebar}>
            <i className={sidebarOpen ? "fa fa-angle-double-left": "fa fa-angle-double-right"}/>
          </span>
        </li>
        {sidebar_pages?.map((page) => {
          if (page.submenu) {
            return (
              <li key={page.path} className={styles.submenu}>
                <Link href='#' onClick={handleLinkClick}>
                  <i className={page.icon}></i>
                  <div className={styles.right}>
                    <span style={{ display: sidebarOpen ? 'block' : 'none' }}>
                      {page.linkText}
                    </span>
                    <i className={`fas ${page.icon_drop} the_dropdown`}></i>
                  </div>
                </Link>
                <ul>
                  {page.submenu.map((subpage) => (
                    <li key={subpage.path}
                      className={subpage.path === router.pathname ? 'active' : ''}
                      onClick={(event) => closeSidebar(event)}
                      >
                      <Link href={the_link(subpage.path)}>
                        <i className={`fas ${subpage.icon}`}></i>
                        <span style={{ display: sidebarOpen ? 'block' : 'none' }}>
                          {subpage.linkText}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={page.path}
                className={page.path === router.pathname ? 'active' : ''}
                onClick={(event) => closeSidebar(event)}>
                <Link href={page.name==='Website'? page.path: the_link(page.path)}>
                  <i className={page.icon}></i>
                  <span style={{ display: sidebarOpen ? 'block' : 'none' }}>
                    {page.linkText}
                  </span>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
