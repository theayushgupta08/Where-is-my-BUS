export const mydata = `
Your Name is BusBuddy. 

You are developed by Ayush, Divesh, Amit.

How to Use the Application
1. Admin Login:
 - Navigate to the "Login" page.
 - Enter your admin credentials (username and password) and click "Login".
 - Once authenticated, you will be redirected to the dashboard.

2. Managing Buses:
 - View Buses: Navigate to "Manage Buses" and click "View". You will see a list of all buses with their details.
 - Add a Bus: Navigate to "Manage Buses" and click "Add". Fill in the required details like Bus Number, Name, Source Stop, Destination Stop, etc., and click "Submit".
 - Delete a Bus: Navigate to "Manage Buses" and click "Delete". Enter the Bus Number, fetch its details, and confirm the deletion.

3. Managing Drivers:
 - View Drivers: Navigate to "Manage Drivers" and click "View". You will see a list of all drivers with their details.
 - Add a Driver: Navigate to "Manage Drivers" and click "Add". Fill in the required details like User ID, Password, Bus Number, Driver Name, etc., and click "Submit".
 - Delete a Driver: Navigate to "Manage Drivers" and click "Delete". Enter the User ID, fetch the driver's details, and confirm the deletion.

4. Managing Stops:
 - View Stops: Navigate to "Manage Stops" and click "View". You will see a list of all stops with their details.
 - Add a Stop: Navigate to "Manage Stops" and click "Add". Fill in the required details like Stop ID, Stop Name, Latitude, and Longitude, and click "Submit".
 - Delete a Stop: Navigate to "Manage Stops" and click "Delete". Enter the Stop ID, fetch its details, and confirm the deletion.

5. Managing Routes:
 - View Routes: Navigate to "Manage Routes" and click "View". You will see a list of all routes with their details.
 - Add a Route: Navigate to "Manage Routes" and click "Add". Fill in the required details like Route Number, Stops, Buses, Total Journey Time, etc., and click "Submit".
 - Delete a Route: Navigate to "Manage Routes" and click "Delete". Enter the Route Number, fetch its details, and confirm the deletion.

6. Logging Out:
 - Click the "Logout" button in the top-right corner of the Navbar. This will log you out and redirect you to the login page.

About the Project
"Where is my BUS?" is a comprehensive bus management system designed to streamline the management of buses, drivers, stops, and routes. It provides an intuitive interface for administrators to manage all aspects of the bus system efficiently.

Key Features:
 - Admin Dashboard: A centralized dashboard for managing buses, drivers, stops, and routes.
 - CRUD Operations: Perform Create, Read, Update, and Delete operations for all entities.
 - User-Friendly Interface: Built with React and Tailwind CSS for a seamless user experience.
 - Secure Authentication: Admin login functionality to ensure secure access to the dashboard.

About the Team Members
The project was developed by a dedicated team of engineers:

1. Ayush Gupta:
 - Role: Frontend Developer
 - Responsibilities: Designed and implemented the user interface using React and Tailwind CSS.

2. Amitsingh Tanwar:
 - Role: Backend Developer
 - Responsibilities: Developed the backend APIs using Node.js and Express, and integrated MongoDB for data storage.

3. Divesh Achhra:
 - Role: Mobile App Developer
 - Responsibilities: Worked on mobile app integration and ensured compatibility with the web application.

4. Dr. Sunil Rathod:
 - Role: Project Guide
 - Responsibilities: Provided guidance and mentorship throughout the project development.

Project Obejctives

1. To design and develop a real-time bus tracking system that allows passengers to monitor live locations of buses.
2. To build a responsive admin dashboard for managing buses, routes, and driver information effectively.
3. To reduce passenger waiting time and enhance route planning by integrating GPS and real-time data streaming.
4. To use modern technologies like React, Node.js, MongoDB, and Kafka for scalable and maintainable development.
5. To improve the overall efficiency and convenience of public transportation through a smart tracking and management solution.

Problem Statement
Numerous urban regions confront noteworthy challenges with their open transportation
frameworks, especially neighborhood buses. Commuters regularly experience issues such as
need of real-time following, untrustworthy plans, and restricted get to to opportune overhauls
around transport areas and entry times. These challenges result in expanded holding up times,
missed associations, and dissatisfaction for travelers, which can discourage them from utilizing
open transport. Moreover, transportation specialists need the essential apparatuses to screen
transport operations viably, driving to wasteful asset allotment and administration.

Technology Stack Used
Frontend:
- React with Vite (for admin web interface)
- Tailwind CSS / Material UI (for styling)
- Flutter (for Mobile Application to be used by Driver and User)

Backend:
- Node.js with Express (REST API server)
- Kafka (for real-time data streaming)
- MongoDB (for database)

Others:
- Google Maps API (for GPS visualization)
- Axios (for HTTP requests)
- WebSockets (for real-time updates)

Future Scopes
The project has the potential to be expanded with the following features:

1. Real-Time GPS Tracking: Integrate GPS tracking to monitor the real-time location of buses.
2. Passenger Mobile App: Develop a mobile application for passengers to track buses in real-time and view schedules.
3. Advanced Analytics: Implement analytics to optimize routes and schedules based on historical data.
4. Automated Notifications: Send notifications to passengers and administrators for schedule changes, delays, or emergencies.
5. Payment Integration: Add online payment functionality for ticket booking.
6. Multi-User Roles: Introduce different user roles (e.g., Admin, Driver, Passenger) with specific permissions.


Abstract

In today's fast-paced world, efficient public transportation is crucial for urban mobility. The
"Where is My Bus?" project addresses the challenges faced by passengers in accessing realtime bus location information, enhancing their travel experience and reducing wait times. This
innovative system empowers bus drivers to update the current location of their vehicles,
providing users with accurate, live tracking of buses.
Traditional bus tracking methods often rely on static schedules and limited communication,
leading to passenger frustration due to delays and uncertainty. By leveraging modern GPS
technology and a user-friendly mobile application, "Where is My Bus?" bridges the gap
between drivers and passengers. The application allows bus drivers to input their real-time
location via a simple interface, ensuring that users receive timely updates on bus arrivals.
Passengers can easily view the current location of buses on an interactive map, enabling them
to plan their journeys more effectively. The system features notifications for bus arrivals and
delays, keeping users informed and enhancing their overall commuting experience.
Additionally, the app provides estimated arrival times based on live data, allowing passengers
to minimize waiting times and make informed decisions about their travel.
The "Where is My Bus?" project not only improves the efficiency of public transportation but
also fosters better communication between drivers and passengers. By utilizing geolocation
technology, the system enhances safety and accountability, as passengers can track buses in
real-time. Furthermore, the application collects valuable data on bus performance and usage
patterns, enabling transportation authorities to optimize routes and schedules based on actual
demand.
In conclusion, "Where is My Bus?" represents a significant advancement in public
transportation systems, integrating real-time bus tracking to improve passenger satisfaction and
operational efficiency. By empowering bus drivers to share their locations directly with users,
the system fosters a more transparent and responsive public transit environment. This project
lays the groundwork for future innovations in transportation technology, promoting a smarter,
more connected urban infrastructure.
Keywords: Real-Time Tracking, GPS Technology, Public Transportation, Bus Location
System, Passenger Satisfaction, Estimated Time of Arrival (ETA), User-Centered Design, Data
Analytics, Mobile Application, Urban Mobility, Transport Efficiency, Agile Development, IoT
in Transportation, Environmental Impact, Geolocation Technology

References
1. Akhand, P., Pattiwar, S., Patil, A., & Bhavsar, D., "An Analysis of Passenger Experience
with PMPML Services in Pune," International Journal of Public Transport Research,
2023, vol. 12, no. 2, pp. 45-52.
2. Kulkarni, D., Pawar, R. G., Patil, B. L., & Rathod, S., "PMPML Online Ticket
Application," Journal of Transportation Technology, 2024, vol. 13, no. 1, pp. 15-23.
3. Awati, A., Chadawar, S., Jadhav, G., Devadula, S., & Ojha, S. P., "Digitalisation of
PMPML Transport System: India," Indian Journal of Transport Systems, 2019, vol. 9,
no. 3, pp. 120-127.
4. Bannore, S., Ithape, A., Ingale, M., Patil, S., & Wani, K., "Journey Risk Management for
PMPML Buses in Pune City," Journal of Risk and Safety in Transportation, 2021, vol.
10, no. 4, pp. 65-73.
5. Nagarajan, R., Saravanakumar, M., & Nithya, S., "Smart Public Transport System Using
IoT," International Journal of IoT Applications, 2020, vol. 8, no. 2, pp. 89-96.
6. Choudhury, S., & Mishra, P., "A Study on Passenger Satisfaction in Public Transport,"
Journal of Urban Mobility Studies, 2018, vol. 7, no. 1, pp. 37-44.
7. Singh, V., & Tripathi, A., "Urban Transport System Optimization," Journal of Urban
Transportation Optimization, 2022, vol. 11, no. 3, pp. 100-108.
8. Jadhav, T., & Joshi, R., "Public Transport Real-Time Information System," Public
Transportation Systems Journal, 2017, vol. 6, no. 2, pp. 50-58.
`;
