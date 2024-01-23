import '../home_page.dart';
import 'signup_page.dart'; // Import the SignupPage
import 'package:flutter/material.dart';
import '../assets/styles/styles.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: AppStyles.footerColor,
        padding: EdgeInsets.symmetric(horizontal: 10),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'ECO-SWAP',
                style: AppStyles.headingStyle,
              ),
              SizedBox(height: 8),
              Text(
                'LOGIN',
                style: AppStyles.subHeadingStyle,
              ),
              SizedBox(height: 16),
              Container(
                padding: EdgeInsets.fromLTRB(80, 10, 80, 10),
                child: Column(
                  children: [
                    TextField(
                      decoration: AppStyles.inputDecoration.copyWith(
                        labelText: 'Email',
                      ),
                    ),
                    SizedBox(height: 10),
                    TextField(
                      obscureText: true,
                      decoration: AppStyles.inputDecoration.copyWith(
                        labelText: 'Password',
                      ),
                    ),
                    SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () {
                        // Add your login logic here
                        // For demonstration purposes, let's navigate to the home page
                        Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(builder: (context) => HomePage()),
                        );
                      },
                      style: AppStyles.elevatedButtonStyle,
                      child: Text('LOGIN'),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 16),
              TextButton(
                onPressed: () {
                  // Navigate to the signup page
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => SignupPage()),
                  );
                },
                child: Text(
                  'New user? Create Account',
                  style: TextStyle(
                    color: AppStyles.textColor,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
