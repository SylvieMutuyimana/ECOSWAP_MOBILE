import 'package:flutter/material.dart';
import '../../assets/styles/styles.dart';
import 'login_page.dart';
import 'about.dart'; 

class WelcomePage extends StatelessWidget {
  const WelcomePage({Key? key}) : super(key: key);

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
                'E WASTE MANAGEMENT RE-IMAGINED',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: AppStyles.textColor,
                ),
              ),
              SizedBox(height: 16),
              Image.asset(
                'assets/images/logo.png',
                width: 150,
                height: 150,
                fit: BoxFit.contain,
              ),
              SizedBox(height: 16),
              ElevatedButton(
                onPressed: () {
                  // Navigate to the about page
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => AboutPage()),
                  );
                },
                child: Text('Read More'),
              ),
              SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      // Navigate to the login page with user type as 'seller'
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginPage(userType: 'seller')),
                      );
                    },
                    child: Text('SELL E-WASTE'),
                  ),
                  SizedBox(width: 16),
                  ElevatedButton(
                    onPressed: () {
                      // Navigate to the login page with user type as 'buyer'
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginPage(userType: 'buyer')),
                      );
                    },
                    child: Text('BUY E-WASTE'),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
