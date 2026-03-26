# Nathan Clark — Personal Portfolio

A modern, responsive personal portfolio and resume website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Scroll-triggered animations
- **React Router** — Client-side routing
- **Docker + Nginx** — Production container

## Pages

| Route         | Description                                   |
| ------------- | --------------------------------------------- |
| `/`           | Hero section with profile, stats, and CTA     |
| `/about`      | Bio, education, and personal values           |
| `/experience` | Full work history with timeline               |
| `/skills`     | Technical skills organized by category        |
| `/contact`    | Contact links, email, phone, and location     |

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9
- **Docker** (optional, for containerized builds)

### Local Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Docker

Build and run with Docker Compose (recommended):

```bash
# Build and start the container
docker compose up --build

# Run in detached mode
docker compose up --build -d

# Stop the container
docker compose down
```

Or build and run manually:

```bash
# Build the image
docker build -t nathan-portfolio .

# Run the container
docker run -p 8080:80 nathan-portfolio
```

The production app will be available at [http://localhost:8080](http://localhost:8080).

## Project Structure

```
src/
├── assets/          # Profile image and static assets
├── components/      # Shared components (Nav, Footer, etc.)
├── pages/           # Route-level page components
├── App.jsx          # Root component with routing
├── main.jsx         # Entry point
└── index.css        # Tailwind imports and custom theme
```

## Customization

- **Content** — All resume data lives directly in each page component as plain objects/arrays. Edit the data in `src/pages/` to update your info.
- **Styling** — Theme colors and fonts are defined in `src/index.css` under `@theme`.
- **Profile Image** — Replace `src/assets/profile.png` with your own photo.
