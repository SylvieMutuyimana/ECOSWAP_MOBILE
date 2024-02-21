import 'package:flutter/material.dart';

// Define your color constants
const Color headerColor = Color(0xFF063E2A);
const Color footerColor = Color(0xFFC16802);
const Color formBackgroundColor = Color(0xFFC0C0C0);
const Color textColor = Colors.white;
const Color buttonDefaultColor = Colors.black;
const Color buttonHoverColor = Color(0xFF063E2A);

// Define your theme data
ThemeData appTheme() {
  return ThemeData(
    primaryColor: headerColor,
    scaffoldBackgroundColor: Colors.grey[100],
    textTheme: TextTheme(
      headline6: TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.bold,
        color: textColor,
      ),
      subtitle1: TextStyle(
        fontSize: 18,
        color: textColor,
      ),
      subtitle2: TextStyle(
        fontSize: 18,
        color: textColor,
      ),
      bodyText1: TextStyle(
        color: Colors.grey[800],
        fontSize: 12.0,
      ),
      button: TextStyle(
        color: Colors.white,
        fontSize: 12.0,
        fontWeight: FontWeight.bold,
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
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
              return Colors.white;
            }
            return Colors.white;
          },
        ),
        padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
          EdgeInsets.symmetric(vertical: 16.0, horizontal: 24.0),
        ),
        shape: MaterialStateProperty.all<OutlinedBorder>(
          RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8.0),
          ),
        ),
        elevation: MaterialStateProperty.all<double>(0),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      focusedBorder: OutlineInputBorder(
        borderSide: BorderSide(color: Colors.blue),
        borderRadius: BorderRadius.circular(8.0),
      ),
      contentPadding: EdgeInsets.symmetric(vertical: 16.0, horizontal: 12.0),
    ),
  );
}
