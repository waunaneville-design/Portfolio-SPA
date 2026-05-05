Creative Agency Portfolio SPA

A modern, responsive, and easily maintainable single-page application (SPA) built with React. This platform showcases a creative agency’s past projects and allows dynamic updates as new work is completed.

🚀 Features

Landing Page: Displays a list of projects in a clean, responsive grid layout.

Add Projects Form: Users can dynamically add new projects with title and description.

Search Functionality: Real-time filtering of projects by title.

Responsive Design: Layout adapts seamlessly to desktop, tablet, and mobile screens.

Maintainable Structure: Modular React components for clarity and reusability.

⚙️ Setup Instructions

Clone the repository

git clone https://github.com/your-username/portfolio-spa.git
cd portfolio-spa

Install dependencies

npm install

Run the development server

npm start

The app will be available at http://localhost:3000.

Build for production

npm run build

This creates an optimized build in the build/ folder.

📖 Usage

Navigate to the landing page to view existing projects.

Use the form to add new projects dynamically.

Use the search bar to filter projects by title.

Resize the browser window to see responsive behavior.

⚠️ Known Limitations

Persistence: Projects added via the form are not saved permanently; refreshing the page resets the list unless localStorage or a backend is integrated.

Basic Styling: Current design is minimal; additional polish and animations can be added.

No Authentication: Any user can add projects; authentication/authorization is not implemented.

