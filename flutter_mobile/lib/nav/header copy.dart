import 'package:flutter/material.dart';
import '../../assets/styles/styles.dart';

class HeaderWidget extends StatelessWidget {
  final int selectedIndex;
  final void Function(int) onTabTapped; // Adjusted callback signature

  HeaderWidget({
    required this.selectedIndex,
    required this.onTabTapped,
  });

  // List of page names corresponding to each icon in the header
  final List<String> pageNames = ['Settings', 'Wishlist', 'Account', 'New Items', 'Terms/Policies', 'Logout', 'Help'];

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: AppStyles.headerColor,
      elevation: 0, // Remove the shadow

      // Set the title as a Text widget with left alignment and black color
      title: Text(
        pageNames[selectedIndex],
        style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black),
        textAlign: TextAlign.left,
      ),

      // Actions on the far right
      actions: [
        PopupMenuButton<int>(
          onSelected: (index) {
            // Handle the selected menu item
            // Pass the selected page index to the callback function
            onTabTapped(index);

            // If you want to navigate using Navigator, uncomment the following lines
            // and remove the onTabTapped(index) line above
            //
            // Navigator.pushNamed(context, '/${pageNames[index]}');
          },
          icon: Icon(
            Icons.menu,
            color: Colors.black, // Dropdown icon color
          ),
          offset: Offset(0, kToolbarHeight),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
          itemBuilder: (BuildContext context) => [
            for (int i = 0; i < pageNames.length; i++)
              _buildPopupMenuItem(i),
          ],
          color: AppStyles.headerColor, // Background color of the dropdown menu
          elevation: 4,
        ),
      ],
    );
  }

  PopupMenuItem<int> _buildPopupMenuItem(int index) {
    return PopupMenuItem<int>(
      value: index,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Text on the far left with white color
          Text(
            pageNames[index],
            style: TextStyle(color: Colors.white),
          ),
          // Icon on the far right with white color
          Icon(
            Icons.chevron_right,
            color: Colors.white,
          ),
        ],
      ),
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}
