# iTunes Application

A modern, responsive web application built with Next.js that provides a seamless interface for browsing and searching iTunes media content. This application allows users to discover podcasts, music, and other media content through an intuitive and visually appealing interface.

## Features

- **Media Discovery**: Browse through various media content including podcasts, music, and more
- **Search Functionality**: Search for specific content with real-time results
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: 
  - Media carousels for content browsing
  - Episode cards for detailed podcast information
  - Search container with filtering capabilities
  - Loading states and smooth animations
- **Modern UI/UX**: Clean, modern interface with smooth transitions and intuitive navigation

## Live Demo

🌐 **Live Demo**: [https://itunes-api-frontend.netlify.app/](https://itunes-api-frontend.netlify.app/)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Deployment**: Netlify

## Getting Started

```bash

# install the project
npm i

# run the project
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `media-card/` - Media display components
  - `carousel/` - Content carousel components
  - `search-container/` - Search functionality and home page
  - `episodes-list/` - Episode listing components
- `utils/` - Utility functions and actions
- `types.ts` - TypeScript type definitions

