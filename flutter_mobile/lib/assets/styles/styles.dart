import 'package:flutter/material.dart';

class AppStyles {
  static final Color footerColor = Color(0xFF084A07);
  static final Color headerColor = Color(0xFFC16802);
  static final Color formBackgroundColor = Color(0xFFC0C0C0);
  static final Color textColor = Colors.white;
  static final Color buttonDefaultColor = Colors.black;
  static final Color buttonHoverColor = Colors.grey;

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
    fillColor: formBackgroundColor,
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(8),
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
          return Colors.black;
        }
        return Colors.white;
      },
    ),
    padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
      EdgeInsets.symmetric(vertical: 20, horizontal: 30),
    ),
    overlayColor: MaterialStateProperty.all<Color>(Colors.white),
  );
}
