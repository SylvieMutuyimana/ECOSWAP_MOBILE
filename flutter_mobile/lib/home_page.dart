import 'package:flutter/material.dart';
import 'nav/header.dart';
import 'nav/footer.dart';
import 'navigatePages.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;
  String _selectedPageName = 'Home';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: HeaderWidget(
      pageTitle: _selectedPageName,
      onMenuItemSelected: (selectedItem) {
        // Handle navigation based on the selected menu item
        final selectedPage = NavigatePages.getPage(selectedItem);
        if (selectedPage != null) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => selectedPage,
            ),
          );
        } else {
          // Handle the case when the pageName is not recognized
        }
      },
    ),
    body: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Display the selected page dynamically
          NavigatePages.getPage(_selectedPageName),
          SizedBox(height: 16),
        ],
      ),
    ),

      bottomNavigationBar: FooterWidget(
        selectedIndex: _selectedIndex,
        onTabTapped: (index, pageName) {
          setState(() {
            _selectedIndex = index;
            _selectedPageName = pageName;
          });
        },
      ),
    );
  }
}
