import 'pages/IndexPage.dart';
import 'pages/CategoriesPage.dart';
import 'pages/SellingPage.dart';
import 'pages/CartPage.dart';
import 'pages/ProfilePage.dart';
import 'pages/SettingsPage.dart';
import 'pages/WishlistPage.dart';
import 'pages/NewItemsPage.dart';
import 'pages/TermsPoliciesPage.dart';
import 'pages/LogoutPage.dart';
import 'pages/HelpPage.dart';

class NavigatePages {
  static dynamic getPage(String pageName) {
    switch (pageName) {
      case 'Home':
        return IndexPage();
      case 'Categories':
        return CategoriesPage();
      case 'Sell':
        return SellingPage();
      case 'Cart':
        return CartPage();
      case 'Profile':
        return ProfilePage();
      case 'Settings':
        return SettingsPage();
      case 'Wishlist':
        return WishlistPage();
      case 'Account':
        return ProfilePage();
      case 'New Items':
        return NewItemsPage();
      case 'Terms/Policies':
        return TermsPoliciesPage();
      case 'Logout':
        return LogoutPage();
      case 'Help':
        return HelpPage();
      default:
        return null; // Handle the case when the pageName is not recognized
    }
  }
}
