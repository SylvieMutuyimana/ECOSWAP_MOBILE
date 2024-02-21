import 'package:flutter/material.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('About'),
        leading: IconButton(
          icon: Icon(Icons.cancel),
          onPressed: () {
            Navigator.pop(context); // Close the about page when cancel button is pressed
          },
        ),
      ),
      body: Container(
        padding: EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'About ECO-SWAP',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'ECO-SWAP is a platform that aims to revolutionize the way e-waste is managed. We provide a marketplace for individuals and businesses to buy and sell e-waste responsibly, contributing to a sustainable future.',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 20),
            Text(
              'Contact Us',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'Email: info@ecoswap.com\nPhone: 123-456-7890',
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
