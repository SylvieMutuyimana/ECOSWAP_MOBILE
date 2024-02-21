import 'package:flutter/material.dart';
import '../../assets/styles/styles.dart';
import 'login_page.dart';
import 'signup_page.dart';

class AuthPage extends StatelessWidget {
  final String? userType;
  final String? message;

  AuthPage({this.userType, this.message});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppStyles.footerColor,
      body: Container(
        padding: EdgeInsets.symmetric(horizontal: 10),
        child: Stack(
          children: [
            Align(
              alignment: Alignment.topRight,
              child: IconButton(
                icon: Icon(Icons.cancel, color: Colors.white), // Icon color set to white
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => SignupPage(userType: userType, message:message)),
                  );
                },
              ),
            ),
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'ENTER  THE PIN SENT TO YOUR PHONE',
                    style: AppStyles.subHeadingStyle,
                  ),
                  SizedBox(height: 16),
                  Container(
                    padding: EdgeInsets.fromLTRB(80, 10, 80, 10),
                    child: Column(
                      children: [
                        TextField(
                          decoration: AppStyles.inputDecoration.copyWith(
                            labelText: 'PIN',
                          ),
                        ),
                        SizedBox(height: 10),
                        ElevatedButton(
                          onPressed: () {
                            // Perform PIN verification logic here
                            // For demonstration purposes, navigate to the login page after verification
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(builder: (context) => LoginPage(userType: userType, message:message)),
                            );
                          },
                          style: AppStyles.elevatedButtonStyle,
                          child: Text('VERIFY'),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
