export const specific_page = (userId_, route, addition)=> `${userId_}/${route}/${addition}`

export const UsersidePages = [
  { path: '/users/theprofile', name: 'The Profile', linkText: 'The Profile', icon: 'fa fa-user' },
  { path: '/users/logout', name: 'Logout', linkText: 'Logout', icon: 'fa fa-sign-out-alt' },
];

export const itemPages = [
  { path: '/items', name: 'List', linkText: 'Items List', icon: 'fa fa-car' },
  { path: '/items/add', name: 'Add', linkText: 'Add Items', icon: 'fa fa-car' },
  { path: '/items/summary', name: 'Items Summary', linkText: 'Summary', icon: 'fa fa-users' }
];

export const categoryPages = [
  { path: '/categories', name: 'List', linkText: 'Categories List', icon: 'fa fa-car' },
  { path: '/categories/add', name: 'Add', linkText: 'Add Categories', icon: 'fa fa-car' },
];

export const userPages = [
  { path: '/users', name: 'List', linkText: 'Users List', icon: 'fa fa-car' },
  { path: '/users/add', name: 'Add', linkText: 'Add Users', icon: 'fa fa-car' },
];

const icon_dropd = 'fa fa-caret-down';

export const AppPages = [
  { path: '/authentication/adminlogin', name: 'Login', linkText: 'Login', icon: 'fa fa-sign-in-alt'},
  { path: '/authentication/adminsignup', name: 'Signup', linkText: 'Signup', icon: 'fa fa-sign-in-alt'},
  { path: '/', name: 'Dashboard', linkText: 'Dashboard', icon: 'fa fa-tachometer-alt' },
  { path: '/items', name: 'Items', linkText: 'Items', icon: 'fa fa-car', icon_drop: icon_dropd, submenu: itemPages },
  { path: '/categories', name: 'Categories', linkText: 'Categories', icon: 'fa fa-car', icon_drop: icon_dropd, submenu: categoryPages },
  { path: '/purchases', name: 'Purchases', linkText: 'Purchases', icon: 'fa fa-calendar'},
  { path: '/carts', name: 'Carts', linkText: 'Carts', icon: 'fa fa-calendar' },
  { path: '/settings', name: 'Settings', linkText: 'Settings', icon: 'fa fa-cog' },
  { path: '/users', name: 'Users', linkText: 'Users', icon: 'fa fa-users', icon_drop: icon_dropd, submenu: userPages},
  { path: '/', name: 'Website', linkText: 'Website', icon: 'fa fa-users' },
];

export const websitePages= [
  { path: '/#', name: 'Home', linkText: 'Home', id: 'home'},
  { path: '#involved', name: 'Get Involved', linkText: 'Get Involved', id: 'involved'},
  { path: '#contact', name: 'Contact', linkText: 'Contact', id: 'contact'},
]

export const superAdminPages = AppPages.filter(page =>
  [
    'Dashboard', 'Items', 'Categories','Carts',
    'Purchases', 'Settings', 'Users', 'Website'
  ].includes(page.name)
)

export const AdminPages = AppPages.filter(page =>
  [
    'Dashboard', 'Items', 'Categories','Carts',
    'Purchases', 'Settings', 'Website'
  ].includes(page.name)
)

export const SidebarPages = {
  'admin':
    AppPages.filter(page =>
      AdminPages.some(thePage => thePage.name === page.name)
    ),
  'super_admin':
    AppPages.filter(page =>
      superAdminPages.some(thePage => thePage.name === page.name)
    ),
};
