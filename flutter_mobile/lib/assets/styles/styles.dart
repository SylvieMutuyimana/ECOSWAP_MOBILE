import 'package:flutter/material.dart';

class AppStyles {
  static final Color footerColor = Color(0xFF063E2A);
  static final Color headerColor = Color(0xFFC16802);
  static final Color formBackgroundColor = Color(0xFFC0C0C0);
  static final Color textColor = Colors.white;
  static final Color buttonDefaultColor = Colors.black;
  static final Color buttonHoverColor = Color(0xFF063E2A);


  static final TextStyle headingStyle = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: textColor,
  );

  static final TextStyle subHeadingStyle = TextStyle(
    fontSize: 18,
    color: textColor,
  );

  static final InputDecoration inputDecoration = InputDecoration(
    filled: true,
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(10),
    ),
  );

  static final ButtonStyle elevatedButtonStyle = ButtonStyle(
    backgroundColor: MaterialStateProperty.resolveWith<Color>(
      (Set<MaterialState> states) {
        if (states.contains(MaterialState.hovered)) {
          return buttonHoverColor;
        }
        return buttonDefaultColor;
      },
    ),
    foregroundColor: MaterialStateProperty.resolveWith<Color>(
      (Set<MaterialState> states) {
        if (states.contains(MaterialState.hovered)) {
          return Colors.white; // Change text color to white when hovered
        }
        return Colors.white; // Default text color
      },
    ),
    padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
      EdgeInsets.symmetric(vertical: 20, horizontal: 90),
    ),
    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
      RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
    ),
  );
}
