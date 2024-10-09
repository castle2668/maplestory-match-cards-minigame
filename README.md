# MapleStory Match Cards Mini Game (WIP)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Tech Stack

Vite + React + Tailwind CSS + Shadcn UI + TypeScript + ESLint + Zustand + React Query + Vitest + React Testing Library

## Project Structures

The project follows a modular and scalable structure to ensure maintainability and ease of navigation. Below is an overview of the folder organization:

```bash
├── public/
│   ├── images/             # Publicly accessible images used across the application.
│   └── music/              # Audio files used by the application, served as static resources.
├── src/
│   ├── assets/             # Application-specific static assets such as images, fonts, and cursors.
│   │   ├── cursors/        # Custom cursor images or assets.
│   │   └── images/         # Internal images used by components and features.
│   ├── components/         # Reusable UI components shared across the application.
│   │   └── ui/             # Shadcn UI components like buttons, card, etc.
│   ├── features/           # Modular features containing logic, components, and data.
│   │   ├── game/           # Game-specific components, assets, and utilities.
│   │   │   ├── assets/     # Static resources specifically for the game (e.g., images, sounds).
│   │   │   ├── components/ # UI components related to game functionality.
│   │   │   ├── data/       # Data and configurations for the game.
│   │   │   ├── interfaces/ # Interfaces for the game.
│   │   │   ├── store/      # Zustand store related to the game feature.
│   │   │   └── utils/      # Utility functions used in game features.
│   │   └── music/          # Music-related components and logic for handling audio playback.
│   │       └── store/      # Zustand store related to the music feature.
│   ├── layouts/            # Components defining the layout structure of different pages.
│   ├── lib/                # Utility functions, helpers, and third-party integrations.
│   ├── pages/              # Page components tied to specific routes in the application.
│   ├── App.tsx             # Main application component, the root of the component tree.
│   ├── index.tsx           # Application entry point for rendering the root component into the DOM.
│   ├── main.tsx            # Bootstrap file for the application
│   └── index.css           # Global CSS styles for the application.
└── vite.config.ts          # Vite configuration file for project-specific settings.
```

Special Note on `features/`:

The `features/` folder is designed to separate distinct functionality from the `pages/` directory. While `pages/` is solely responsible for routing and rendering different views, `features/` focuses on grouping logic, components, and assets for specific features.

Each feature folder (e.g. `game/`) contains its own state management, components, and assets that are exclusive to that feature. For example:

- `store/` handles state management related to the game.
- `assets/` stores game-specific images, sprites, and other resources.
- `components/` houses the UI and logic components that are specific to the game feature.
- `utils/` contains utility functions that assist with game functionality.

In contrast, the root `src/` folder contains shared resources like global UI components, images, and utilities that are used across the entire application. This separation keeps features self-contained, while routing and global resources are handled separately for better modularity and scalability.

## Disclaimer

This project is licensed under the **LGPL-2.1 License**, which permits use, modification, and distribution under certain conditions. However, please be aware that this work is a personal project, and while you're welcome to clone or fork the repository for learning purposes or contributions, **using it directly as your own work in interviews or portfolios is not allowed**.

If you'd like to reference or showcase this project in any professional context, please give proper credit and clearly indicate your modifications. Misrepresenting this project as your own original work may violate the terms of the license and ethical standards.
