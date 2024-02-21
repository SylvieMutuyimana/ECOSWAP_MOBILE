import 'dart:async'; // for Timer
import 'dart:convert'; // for json decoding
import 'package:http/http.dart' as http;

class DataService {
  static const apiUrl = 'http://localhost:3000/api'; // Change this to your API URL

  // Method to fetch data from a single endpoint
  static Future fetchData(String endpoint) async {
    try {
      final response = await http.get(Uri.parse('$apiUrl/$endpoint'));
      if (response.statusCode == 200) {
        // Parse the JSON response
        final jsonData = json.decode(response.body);
        // Return the data
        return jsonData;
      } else {
        throw Exception('Failed to fetch data from $endpoint');
      }
    } catch (e) {
      throw Exception('Failed to fetch data from $endpoint: $e');
    }
  }

  // Method to continuously fetch data from multiple endpoints
  static void fetchContinuousData(List<String> endpoints, void Function(String, dynamic) onData) {
    // Fetch data initially from all endpoints
    for (var endpoint in endpoints) {
      fetchData(endpoint).then((data) => onData(endpoint, data));
    }

    // Fetch data periodically from all endpoints
    Timer.periodic(Duration(seconds: 30), (_) {
      for (var endpoint in endpoints) {
        fetchData(endpoint).then((data) => onData(endpoint, data));
      }
    });
  }
}
