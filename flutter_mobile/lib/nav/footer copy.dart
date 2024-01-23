import 'package:flutter/material.dart';
import '../assets/styles/styles.dart';

class FooterWidget extends StatelessWidget {
  final int selectedIndex;
  final void Function(int, String) onTabTapped; // Corrected callback signature

  FooterWidget({
    required this.selectedIndex,
    required this.onTabTapped,
  });

  // List of page names corresponding to each icon in the footer
  final List<String> pageNames = ['Home', 'Categories', 'Sell', 'Cart', 'Profile'];

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      items: [
        BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.category),
          label: 'Categories',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.sell),
          label: 'Sell',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.shopping_cart),
          label: 'Cart',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.person),
          label: 'Profile',
        ),
      ],
      currentIndex: selectedIndex,
      selectedItemColor: Colors.blue,
      backgroundColor: AppStyles.footerColor,
      onTap: (index) {
        onTabTapped(index, pageNames[index]); // Pass the selected page name
      },
    );
  }
}
