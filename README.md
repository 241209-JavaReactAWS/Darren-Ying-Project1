# Darren-Ying-Project1

1. Some initial thoughts on architectural plan: 

Backend (Spring Boot):
Framework: Spring Boot (with modules like Spring Web for REST APIs and Spring Data JPA for database interaction).
Database: Use H2 for simplicity during development. You can later switch to PostgreSQL if required.
RESTful Endpoints: Provide endpoints for Create, Read, Update, and Delete operations for items.
Authentication: Basic authentication with role-based access control (Admin and User roles).

Frontend (React):
HTML and CSS mockups: Due early in the project to visualize the design.
React SPA: Dynamic components for CRUD and authentication functionalities.
HTTP Client: Use Axios or Fetch for API calls.

2.User Stories:
Authentication:
Log in and out with proper error handling.
Role-specific views and permissions.
CRUD Operations:
Standard user can interact with items.
Admin can manage items globally.

3. Frontend Mockups (HTML/CSS):
Design separate views for:
Login page.
Item management dashboard.
Admin panel for managing items.

4. Workflow Overview:
Login Workflow:
User enters credentials -> Backend validates -> React saves token -> Redirect to dashboard.
Item CRUD Workflow:
Admin: Full access to all items (Add, Edit, Delete).
User: Restricted access (e.g., View and Add only).

Sample templates of application scenarios, which deployed on the Heroko platform:
https://bloominstituteoftechnology.github.io/W_S11_Fetch_Project/
https://advanced-apps-articles.herokuapp.com/
