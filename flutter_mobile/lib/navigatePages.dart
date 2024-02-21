import 'pages/IndexPage.dart';
import 'pages/CategoriesPage.dart';
import 'pages/SellingPage.dart';
import 'pages/buyer/CartPage.dart';
import 'pages/ProfilePage.dart';
import 'pages/other/SettingsPage.dart';
import 'pages/WishlistPage.dart';
import 'pages/NewItemsPage.dart';
import 'pages/other/TermsPoliciesPage.dart';
import 'pages/LogoutPage.dart';
import 'pages/other/HelpPage.dart';

final pageNames = {
  'other': {
    'Settings': SettingsPage(),
    'Logout': LogoutPage(),
    'Terms/Policies': TermsPoliciesPage(),
    'Help': HelpPage(),
  },
  'buyer': {
    'New Items': NewItemsPage(),
    'Home': IndexPage(),
    'Categories': CategoriesPage(),
    'Cart': CartPage(),
    'Wishlist': WishlistPage(),
    'Profile': ProfilePage()
  },
  'seller': {
    'Home': IndexPage(),
    'My Items': SellingPage(),
    'Wishlist': WishlistPage(),
    'Profile': ProfilePage()
  },
};

const footerPages = {
  'buyer': ['Home','Categories','Cart', 'Profile'],
  'seller': ['Home', 'Sell', 'My Items', 'Profile']
};

const headerPages = {
  'buyer': ['Settings','Wishlist','Account','New Items','Terms/Policies','Logout','Help'],
  'seller': ['Settings','Account','My Items','Terms/Policies','Logout','Help']
};

class NavigatePages {
  static dynamic getPage(String pageName, String userType) {
    final thePage = pageNames[userType]?[pageName];
    if (thePage != null) {
      return thePage;
    } else {
      return pageNames['other']?[pageName];
    }
  }
}
