# Title: Backend Integration with PostgreSQL for Event Registration

## Overview
This pull request introduces backend integration with a PostgreSQL database using TypeORM. It enables the storage of user registration details for events, enhancing the application's data management capabilities.

## Changes Made
- **Database Connection:** Established a connection to a PostgreSQL database.
- **TypeORM Integration:** Integrated TypeORM to facilitate seamless database interactions and entity management.
- **User Registration Endpoint:** Created an API endpoint (`/register`) that allows users to register for events. The endpoint accepts user details such as:
  - `attendeeName`
  - `attendeeEmail`
  - `eventName`
- **Data Storage:** Implemented functionality to save user registration details to the database, ensuring data integrity and consistency.

## Setup Instructions
1. **Install PostgreSQL:**
   - Download and install PostgreSQL from the [official website](https://www.postgresql.org/download/).
   - Follow the installation instructions specific to your operating system.

2. **Create a Database:**
   - Open the PostgreSQL command line or a GUI tool like pgAdmin.
   - Run the following command to create a new database:
     ```sql
     CREATE DATABASE college;
     ```

3. **Clone the Repository:**
   - Clone the repository to your local machine.

4. **Install Dependencies:**
   - Navigate to the project directory and run:
     ```bash
     npm install
     ```

5. **Edit Data Source Configuration:**
   - Open the `data-source.js` file and configure it according to your PostgreSQL setup (e.g., database name, username, password, host).

6. **Start the Server:**
   - Run the following command to start the server:
     ```bash
     node index.js
     ```
   - The server should now be running on port 3000.

## Next Steps
- Additional features, such as retrieving registered users and implementing authentication, can be added in future iterations.
