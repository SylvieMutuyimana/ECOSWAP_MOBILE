import 'package:flutter/material.dart';
import '../assets/styles/styles.dart';
import '../home_page.dart';

class SignupPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Signup Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              decoration: AppStyles.inputDecoration.copyWith(
                labelText: 'Email',
              ),
            ),
            SizedBox(height: 16),
            TextField(
              obscureText: true,
              decoration: AppStyles.inputDecoration.copyWith(
                labelText: 'Password',
              ),
            ),
            SizedBox(height: 16),
            TextField(
              decoration: AppStyles.inputDecoration.copyWith(
                labelText: 'Phone Number',
              ),
            ),
            SizedBox(height: 32),
            ElevatedButton(
              onPressed: () {
                // Add your signup logic here
                // For demonstration purposes, let's navigate to the home page
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => HomePage()),
                );
              },
              style: AppStyles.elevatedButtonStyle,
              child: Text('Sign Up'),
            ),
          ],
        ),
      ),
    );
  }
}
