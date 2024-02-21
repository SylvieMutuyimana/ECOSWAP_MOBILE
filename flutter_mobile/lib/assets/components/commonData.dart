// Define a UserProvider class
class UserProvider with ChangeNotifier {
  UserType _userType;

  UserType get userType => _userType;

  void setUserType(UserType userType) {
    _userType = userType;
    notifyListeners();
  }
}

// Wrap your app with Provider
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => UserProvider(),
      child: MyApp(),
    ),
  );
}
