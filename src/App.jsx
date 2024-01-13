// App.jsx
import React from 'react';
import Mapcomponent from './components/Mapcomponent';
import './App.css';

const data = [
  { name: 'Location 1', lat: 51.505, lng: -0.09, size: 10, color: 'blue' },
  { name: 'Location 2', lat: 48.8566, lng: 2.3522, size: 8, color: 'blue' },
  { name: 'Location 3', lat: 40.7128, lng: -74.0060, size: 12, color: 'blue' },
  { name: 'Location 4', lat: 35.6895, lng: 139.6917, size: 15, color: 'blue' },
  { name: 'Location 5', lat: -33.8688, lng: 151.2093, size: 5, color: 'blue' },
  { name: 'Location 6', lat: 55.7558, lng: 37.6173, size: 20, color: 'blue' },
  { name: 'Location 7', lat: 39.9042, lng: 116.4074, size: 18, color: 'blue' },
  { name: 'Location 8', lat: -23.5505, lng: -46.6333, size: 7, color: 'blue' },
  { name: 'Location 9', lat: 34.0522, lng: -118.2437, size: 10, color: 'blue' },
  { name: 'Location 10', lat: 37.7749, lng: -122.4194, size: 11, color: 'blue' },
  { name: 'Location 11', lat: 19.4326, lng: -99.1332, size: 9, color: 'blue' },
{ name: 'Location 12', lat: -34.6037, lng: -58.3816, size: 14, color: 'blue' },
{ name: 'Location 13', lat: 28.6139, lng: 77.2090, size: 10, color: 'blue' },
{ name: 'Location 14', lat: 55.9533, lng: -3.1883, size: 7, color: 'blue' },
{ name: 'Location 15', lat: 41.9028, lng: 12.4964, size: 11, color: 'blue' },
{ name: 'Location 16', lat: -22.9068, lng: -43.1729, size: 13, color: 'blue' },
{ name: 'Location 17', lat: 1.3521, lng: 103.8198, size: 12, color: 'blue' },
{ name: 'Location 18', lat: 52.5200, lng: 13.4050, size: 8, color: 'blue' },
{ name: 'Location 19', lat: 31.2304, lng: 121.4737, size: 15, color: 'blue' },
{ name: 'Location 20', lat: -33.9249, lng: 18.4241, size: 6, color: 'blue' },
{ name: 'Location 21', lat: 59.3293, lng: 18.0686, size: 9, color: 'blue' },
{ name: 'Location 22', lat: 35.6762, lng: 139.6503, size: 16, color: 'blue' },
{ name: 'Location 23', lat: 49.2827, lng: -123.1207, size: 14, color: 'blue' },
{ name: 'Location 24', lat: -37.8136, lng: 144.9631, size: 5, color: 'blue' },
{ name: 'Location 25', lat: 59.9343, lng: 30.3351, size: 11, color: 'blue' },
{ name: 'Location 26', lat: 46.2044, lng: 6.1432, size: 10, color: 'blue' },
{ name: 'Location 27', lat: -1.2921, lng: 36.8219, size: 13, color: 'blue' },
{ name: 'Location 28', lat: 24.7136, lng: 46.6753, size: 7, color: 'blue' },
{ name: 'Location 29', lat: 14.5995, lng: 120.9842, size: 12, color: 'blue' },
{ name: 'Location 30', lat: 35.6895, lng: 139.6917, size: 9, color: 'blue' },
// Continuing from Location 30
{ name: 'Location 31', lat: 51.5074, lng: -0.1278, size: 12, color: 'blue' },
{ name: 'Location 32', lat: 55.7558, lng: 37.6176, size: 10, color: 'blue' },
{ name: 'Location 33', lat: 48.8566, lng: 2.3522, size: 8, color: 'blue' },
{ name: 'Location 34', lat: 40.7128, lng: -74.0060, size: 14, color: 'blue' },
{ name: 'Location 35', lat: 34.0522, lng: -118.2437, size: 11, color: 'blue' },
{ name: 'Location 36', lat: -33.8688, lng: 151.2093, size: 9, color: 'blue' },
{ name: 'Location 37', lat: 39.9042, lng: 116.4074, size: 16, color: 'blue' },
{ name: 'Location 38', lat: 19.0760, lng: 72.8777, size: 13, color: 'blue' },
{ name: 'Location 39', lat: -23.5505, lng: -46.6333, size: 7, color: 'blue' },
{ name: 'Location 40', lat: 41.0082, lng: 28.9784, size: 10, color: 'blue' },
{ name: 'Location 41', lat: 35.6895, lng: 139.6917, size: 9, color: 'blue' },
{ name: 'Location 42', lat: 37.7749, lng: -122.4194, size: 8, color: 'blue' },
{ name: 'Location 43', lat: 50.8503, lng: 4.3517, size: 12, color: 'blue' },
{ name: 'Location 44', lat: 52.3676, lng: 4.9041, size: 15, color: 'blue' },
{ name: 'Location 45', lat: 53.3498, lng: -6.2603, size: 6, color: 'blue' },
{ name: 'Location 46', lat: 60.1699, lng: 24.9384, size: 13, color: 'blue' },
{ name: 'Location 47', lat: 59.3293, lng: 18.0686, size: 14, color: 'blue' },
{ name: 'Location 48', lat: -34.9285, lng: 138.6007, size: 5, color: 'blue' },
{ name: 'Location 49', lat: 43.6532, lng: -79.3832, size: 16, color: 'blue' },
{ name: 'Location 50', lat: -22.9068, lng: -43.1729, size: 11, color: 'blue' },
{ name: 'Location 51', lat: 1.3521, lng: 103.8198, size: 10, color: 'blue' },
{ name: 'Location 52', lat: 3.1390, lng: 101.6869, size: 9, color: 'blue' },
{ name: 'Location 53', lat: 13.7563, lng: 100.5018, size: 14, color: 'blue' },
{ name: 'Location 54', lat: -6.2088, lng: 106.8456, size: 8, color: 'blue' },
{ name: 'Location 55', lat: 30.0444, lng: 31.2357, size: 12, color: 'blue' },
{ name: 'Location 56', lat: -26.2041, lng: 28.0473, size: 13, color: 'blue' },
{ name: 'Location 57', lat: -36.8485, lng: 174.7633, size: 7, color: 'blue' },
{ name: 'Location 58', lat: 35.9078, lng: 127.7669, size: 10, color: 'blue' },
{ name: 'Location 58', lat: 48.3794, lng: 31.1656, size: 10, color: 'blue' },
{ name: 'Location 59', lat: 23.8859, lng: 45.0792, size: 7, color: 'blue' },
{ name: 'Location 60', lat: -1.2921, lng: 36.8219, size: 15, color: 'blue' },
{ name: 'Location 61', lat: -15.7942, lng: -47.8822, size: 9, color: 'blue' },
{ name: 'Location 62', lat: 6.5244, lng: 3.3792, size: 14, color: 'blue' },
{ name: 'Location 63', lat: 4.7110, lng: -74.0721, size: 11, color: 'blue' },
{ name: 'Location 64', lat: 33.6844, lng: 73.0479, size: 8, color: 'blue' },
{ name: 'Location 65', lat: 41.2995, lng: 69.2401, size: 12, color: 'blue' },
{ name: 'Location 66', lat: -33.4489, lng: -70.6693, size: 10, color: 'blue' },
{ name: 'Location 67', lat: -12.0464, lng: -77.0428, size: 13, color: 'blue' },
{ name: 'Location 68', lat: 14.6928, lng: -17.4467, size: 6, color: 'blue' },
{ name: 'Location 69', lat: 9.0820, lng: 8.6753, size: 15, color: 'blue' },
{ name: 'Location 70', lat: -25.7479, lng: 28.2293, size: 9, color: 'blue' },
{ name: 'Location 71', lat: 36.2048, lng: 138.2529, size: 14, color: 'blue' },
{ name: 'Location 72', lat: 39.9042, lng: 116.4074, size: 8, color: 'blue' },
{ name: 'Location 73', lat: 55.7558, lng: 37.6173, size: 11, color: 'blue' },
{ name: 'Location 74', lat: 51.1657, lng: 10.4515, size: 12, color: 'blue' },
{ name: 'Location 75', lat: 61.5240, lng: 105.3188, size: 7, color: 'blue' },
{ name: 'Location 76', lat: -38.4161, lng: -63.6167, size: 10, color: 'blue' },
{ name: 'Location 77', lat: 20.5937, lng: 78.9629, size: 13, color: 'blue' },
{ name: 'Location 78', lat: 37.0902, lng: -95.7129, size: 9, color: 'blue' },
];

function App() {
  return (
    <div className="App">
      <Mapcomponent data={data} />
    </div>
  );
}

export default App;






