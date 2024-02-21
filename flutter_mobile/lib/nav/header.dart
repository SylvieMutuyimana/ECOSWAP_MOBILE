import 'package:flutter/material.dart';
import '../../assets/styles/styles.dart';

class HeaderWidget extends StatelessWidget implements PreferredSizeWidget {
  final String pageTitle;
  final void Function(String) onMenuItemSelected;

  HeaderWidget({
    required this.pageTitle,
    required this.onMenuItemSelected,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: AppStyles.headerColor,
      elevation: 0, // Remove the shadow

      // Set the title as a Text widget with left alignment and black color
      title: Text(
        pageTitle,
        style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black),
        textAlign: TextAlign.left,
      ),

      // Actions on the far right
      actions: [
        PopupMenuButton<String>(
          onSelected: (value) {
            // Handle the selected menu item
            // Pass the selected page name to the callback function
            onMenuItemSelected(value);

            // If you want to navigate using Navigator, uncomment the following lines
            // and remove the onMenuItemSelected(value) line above
            //
            // Navigator.pushNamed(context, '/$value');
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
            _buildPopupMenuItem('Settings'),
            _buildPopupMenuItem('Wishlist'),
            _buildPopupMenuItem('Account'),
            _buildPopupMenuItem('New Items'),
            _buildPopupMenuItem('Terms/Policies'),
            _buildPopupMenuItem('Logout'),
            _buildPopupMenuItem('Help'),
          ],
          color: AppStyles.headerColor, // Background color of the dropdown menu
          elevation: 4,
        ),
      ],
    );
  }

  PopupMenuItem<String> _buildPopupMenuItem(String text) {
    return PopupMenuItem<String>(
      value: text,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Text on the far left with white color
          Text(
            text,
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
