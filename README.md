# People-Directory


This is a simple React application that displays a directory of people fetched from a random user API. The app allows users to navigate through a paginated list of users and view detailed information about each user.

## Features

- Fetch and display a list of users from the Random User API.
- Paginated user list.
- View detailed information about a specific user by clicking on a user card.
- Material-UI for UI components and styling.

## Technologies Used

- React
- Vite
- Material-UI
- React Router
- Context API
- SWC (for fast builds and hot module replacement)

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm or yarn (npm used here)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/people-directory.git

2. Navigate to the project directory:

   cd people-dircetory

3. Download Node.js (if it isn't already installed):

   Source link: https://nodejs.org/en
   Check for versions (node -v, npm -v)

5. Install dependencies:

   npm install

6. Open localhost after running the following command: 

   npm run dev   

### Project Structure

/src  
  DisplayParams.jsx - Component to display a paginated list of users.
  PersonDetails.jsx - Component to display detailed information about a selected user.
  UserContext.jsx   - Context provider to manage user data and loading state.
  App.jsx           - Main application component.
  index.jsx         - Entry point of application.
.eslintrc.cjs
.gitignore
index.html
packahe-lock.json
package.json
README.md
vite.config.js

### API

The app fetches user data from the Random User API. The data includes details like name, email, phone, and address of random users.
https://randomuser.me/

### Styling

The app uses Material UI for styling and UI components. 
https://mui.com/


    
