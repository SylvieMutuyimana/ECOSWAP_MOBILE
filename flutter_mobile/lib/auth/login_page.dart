import 'package:flutter/material.dart';
import '../../assets/styles/styles.dart';
import '../home_page.dart';
import 'signup_page.dart';

class LoginPage extends StatelessWidget {
  final String? userType;
  final String? message;

  LoginPage({this.userType, this.message});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(110), // Set preferred height here
        child: AppBar(
          backgroundColor: AppStyles.footerColor, 
          elevation: 0, // Remove shadow
          title: Padding(
            padding: EdgeInsets.fromLTRB(80, 20, 80, 20), // Adjust padding as needed
            child: Column(
              children: [
                Text(
                  'ECO-SWAP',
                  style: AppStyles.headingStyle.copyWith(fontSize: 25), // Adjust font size as needed
                ),
                Text(
                  'Sign in into your account',
                  style: AppStyles.subHeadingStyle.copyWith(fontSize: 14), // Adjust font size as needed
                ),
              ],
            ),
          ),
          iconTheme: IconThemeData(color: Colors.white),
        ),
      ),
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              if (message != null) // Display message if it's not null
                Container(
                  padding: EdgeInsets.all(8),
                  color: Colors.red, // Customize color as needed
                  child: Text(
                    message!,
                    style: TextStyle(color: Colors.white),
                  ),
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
                    GestureDetector(
                      onTap: () {},
                      child: Text(
                        'Forgot Password?',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                    ),
                    SizedBox(height: 10),
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
                    SizedBox(height: 10),
                    Text(
                      'or login with',
                      style: TextStyle(
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        GestureDetector(
                          onTap: () {
                            // Add your Facebook login logic here
                          },
                          child: Column(
                            children: [
                              TextButton.icon(
                                onPressed: () {},
                                icon: Icon(Icons.facebook),
                                label: Text(
                                  'Facebook',
                                  style: TextStyle(
                                    color: Colors.black,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            // Add your Google login logic here
                          },
                          child: Column(
                            children: [
                              TextButton.icon(
                                onPressed: () {},
                                icon: Icon(Icons.email),
                                label: Text(
                                  'Google',
                                  style: TextStyle(
                                    color: Colors.black,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              SizedBox(height: 16),
              TextButton(
                onPressed: () {
                  // Navigate to the login page
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => SignupPage(userType: userType)),
                  );
                },
                child: Text(
                  'New user? Create Account',
                  style: TextStyle(
                    color: Colors.black,
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
