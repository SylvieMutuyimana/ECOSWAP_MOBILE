import 'package:flutter/material.dart';
import 'assets/components/theme_data.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'E-Commerce App',
      theme: appTheme(),
      home: HomePage(), 
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('E-Commerce App'),
      ),
      body: Center(
        child: Text('Welcome to the E-Commerce App!'),
      ),
    );
  }
}
