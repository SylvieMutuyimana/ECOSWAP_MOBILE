//loading_page.dart
import 'package:flutter/material.dart';
import '../../auth/login_page.dart';

class LoadingPage extends StatelessWidget {
  const LoadingPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Simulate a delay of 2 seconds using Future.delayed
    Future.delayed(Duration(seconds: 2), () {
      // Navigate to the Login page after the delay
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const LoginPage()),
      );
    });

    return Scaffold(
      body: Center(
        child: CircularProgressIndicator(),
      ),
    );
  }
}
