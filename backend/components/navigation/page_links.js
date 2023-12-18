export const specific_page = (userId_, route, addition)=> `${userId_}${route}/${addition}`

export const UsersidePages = [
  { path: '/users/theprofile', name: 'The Profile', linkText: 'The Profile', icon: 'fa fa-user' },
  { path: '/users/logout', name: 'Logout', linkText: 'Logout', icon: 'fa fa-sign-out-alt' },
];

export const itemPages = [
  { path: '/items', name: 'List', linkText: 'Items List', icon: 'fa fa-car' },
  { path: '/items/additems/add', name: 'Add', linkText: 'Add Items', icon: 'fa fa-car' },
  { path: '/items/groups/vehiclegroups', name: 'Vehicle Groups', linkText: 'Vehicle Groups', icon: 'fa fa-users' }
];

export const categoryPages = [
  { path: '/categories', name: 'List', linkText: 'Categories List', icon: 'fa fa-car' },
  { path: '/categories/add', name: 'Add', linkText: 'Categories Add', icon: 'fa fa-car' },
];

export const purchasePages = [
  { path: '/purchases', name: 'List', linkText: 'Purchases List', icon: 'fa fa-calendar' },
  { path: '/purchases/add', name: 'Add', linkText: 'Add Purchases', icon: 'fa fa-calendar' },
];

const icon_dropd = 'fa fa-caret-down';

export const AppPages = [
  { path: '/', name: 'Login', linkText: 'Login', icon: 'fa fa-sign-in-alt' },
  { path: '/', name: 'Dashboard', linkText: 'Dashboard', icon: 'fa fa-tachometer-alt' },
  { path: '/items', name: 'Items', linkText: 'Items', icon: 'fa fa-car', icon_drop: icon_dropd, submenu: itemPages },
  { path: '/purchases', name: 'Purchases', linkText: 'Purchases', icon: 'fa fa-calendar', icon_drop: icon_dropd, submenu: purchasePages },
  { path: '/settings', name: 'Settings', linkText: 'Settings', icon: 'fa fa-cog' },
  { path: '/users', name: 'Users', linkText: 'Users', icon: 'fa fa-users' },
];

export const superAdminPages = AppPages.filter(page =>
  [
    'Dashboard', 'Items', 'Categories',
    'Purchases', 'Settings', 'Users'
  ].includes(page.name)
)

export const AdminPages = AppPages.filter(page =>
  [
    'Dashboard', 'Items', 'Categories',
    'Purchases', 'Settings'
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
