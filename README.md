<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# AGROTEK-AUTONOMI

<em>Empowering Sustainable Growth Through Intelligent Innovation</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/diaramaa/Agrotek-WebApp?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/diaramaa/Agrotek-WebApp?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/diaramaa/Agrotek-WebApp?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<br>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/MQTT-660066.svg?style=flat&logo=MQTT&logoColor=white" alt="MQTT">
<img src="https://img.shields.io/badge/datefns-770C56.svg?style=flat&logo=date-fns&logoColor=white" alt="datefns">
<img src="https://img.shields.io/badge/Chart.js-FF6384.svg?style=flat&logo=chartdotjs&logoColor=white" alt="Chart.js">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)

---

## Overview

Agrotek-WebApp is a modern web platform tailored for building scalable, real-time IoT applications with React. It offers a streamlined development experience, optimized with Vite, and integrates powerful features for device control, user management, and data visualization.

**Why Agrotek-WebApp?**

This project simplifies the creation of responsive, secure, and maintainable web interfaces for IoT ecosystems. The core features include:

- 🎨 **🖍️ Fast Development:** Optimized React setup with Vite for rapid module updates and HMR.
- 🌐 **🔗 Real-Time Communication:** WebSocket and MQTT integration for instant device control and data updates.
- 🔒 **🔑 Secure Authentication:** Built-in user login, registration, and session management with Supabase.
- 📊 **📈 Rich UI Components:** Interactive dashboards, energy charts, and user-friendly navigation.
- ⚙️ **🛠️ Modular Architecture:** Future-ready with support for TypeScript, linting, and scalable growth.

---

## Features

|      | Component            | Details                                                                                     |
| :--- | :------------------- | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**     | <ul><li>Client-Server separation with React frontend and Node.js backend</li><li>REST API endpoints for data exchange</li><li>Vite as build tool for frontend</li></ul> |
| 🔩 | **Code Quality**     | <ul><li>ESLint configured with react-specific plugins</li><li>Prettier for code formatting</li><li>TypeScript types integrated via @types packages</li></ul> |
| 📄 | **Documentation**    | <ul><li>README with project overview and setup instructions</li><li>Code comments and JSDoc annotations</li><li>API documentation via Swagger or similar (if present)</li></ul> |
| 🔌 | **Integrations**      | <ul><li>Supabase for backend data management</li><li>Chart.js and Recharts for data visualization</li><li>Tailwind CSS for styling</li><li>JWT for authentication</li><li>MQTT for real-time messaging</li></ul> |
| 🧩 | **Modularity**        | <ul><li>Frontend components organized in React component hierarchy</li><li>Backend routes separated by feature</li><li>Shared utilities and hooks for reusability</li></ul> |
| 🧪 | **Testing**           | <ul><li>Unit tests with Jest and React Testing Library</li><li>CI/CD pipelines likely include test runs (via npm scripts)</li></ul> |
| ⚡️  | **Performance**       | <ul><li>Vite for fast hot module replacement</li><li>Code splitting and lazy loading of React components</li><li>Chart.js optimizations for rendering large datasets</li></ul> |
| 🛡️ | **Security**          | <ul><li>JWT tokens for user authentication</li><li>CORS middleware in backend</li><li>Environment variables managed via dotenv</li></ul> |
| 📦 | **Dependencies**      | <ul><li>React, React DOM, React Router for frontend</li><li>Express for backend API server</li><li>Vite as build tool</li><li>Chart.js, Recharts for visualization</li><li>Tailwind CSS for styling</li></ul> |

---

## Project Structure

```sh
└── Agrotek-WebApp/
    ├── README.md
    ├── agrotek-webapp.code-workspace
    ├── backend
    │   ├── .env
    │   ├── .gitignore
    │   ├── index.js
    │   ├── mqttClient.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── routes
    │   ├── sessionMap.js
    │   └── supabaseClient.js
    └── frontend
        ├── .env
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── public
        ├── src
        ├── tailwind.config.js
        └── vite.config.js
```

---

### Project Index

<details open>
	<summary><b><code>AGROTEK-WEBAPP/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides a streamlined React setup optimized for development with Vite, enabling rapid module updates through Hot Module Replacement (HMR)<br>- It integrates essential plugins for React support, offering a foundation for building modern, efficient web applications<br>- The configuration encourages future expansion with TypeScript and advanced linting, supporting scalable and maintainable project growth within a minimal architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/agrotek-webapp.code-workspace'>agrotek-webapp.code-workspace</a></b></td>
					<td style='padding: 8px;'>- Defines the workspace configuration for the Agrotek web application, establishing the project’s root directory within the development environment<br>- It facilitates seamless navigation and integration across the entire codebase, supporting efficient development workflows and ensuring consistent workspace settings for contributors working on the Agrotek platform.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- frontend Submodule -->
	<details>
		<summary><b>frontend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ frontend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/tailwind.config.js'>tailwind.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines the Tailwind CSS configuration to customize the design system, including color palette and content scanning paths<br>- It ensures consistent styling across the frontend by extending default themes and specifying which files Tailwind should process, supporting a cohesive and maintainable user interface within the overall application architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/vite.config.js'>vite.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures the development environment for the frontend application by setting up the Vite build tool with React support and specifying the local server port<br>- It ensures a streamlined development experience, enabling rapid iteration and testing of the user interface within the overall architecture<br>- This setup facilitates efficient frontend development aligned with the projects modular structure.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Establishes the foundational HTML structure for the frontend interface of Agrotek Autonomi, enabling the rendering of the applications user interface within a web browser<br>- It links essential resources and initializes the main React component, serving as the entry point that integrates the user interface with the underlying application logic and architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/eslint.config.js'>eslint.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines ESLint configuration for the frontend project, ensuring code quality and consistency across JavaScript and JSX files<br>- It integrates recommended rules and plugins for React hooks and refresh workflows, supporting best practices and maintaining a clean, error-free codebase within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/postcss.config.js'>postcss.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures PostCSS to integrate Tailwind CSS and Autoprefixer, enabling streamlined styling workflows within the frontend architecture<br>- It ensures consistent application of utility-first CSS and automatic vendor prefixing, supporting responsive and cross-browser compatible designs across the project’s user interface components<br>- This setup is essential for maintaining a modern, scalable styling system in the overall codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines project metadata, dependencies, and scripts for the frontend web application, enabling development, building, and previewing of the user interface<br>- It orchestrates the setup of core tools like Vite, React, and TailwindCSS, ensuring a streamlined development environment<br>- This configuration supports the overall architecture by facilitating efficient UI development and deployment workflows.</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ frontend.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/App.jsx'>App.jsx</a></b></td>
							<td style='padding: 8px;'>- Defines the client-side routing structure for the application, orchestrating navigation between public pages like landing, sign-in, and sign-up, as well as protected sections such as dashboard, statistics, and settings<br>- Implements route protection for authenticated access and integrates global toast notifications, ensuring seamless user flow and consistent UI behavior across the app.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/main.jsx'>main.jsx</a></b></td>
							<td style='padding: 8px;'>- Initialize the React application by rendering the main App component within a strict mode environment, ensuring adherence to best practices and enabling additional runtime checks<br>- This setup serves as the entry point for the frontend, orchestrating the rendering process and establishing the foundation for the user interface within the overall project architecture.</td>
						</tr>
					</table>
					<!-- pages Submodule -->
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.pages</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/LandingPage.jsx'>LandingPage.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the landing page interface for the Agrotek Autonomi application, serving as the initial user entry point<br>- It introduces the platform with branding elements and offers navigation options for user authentication, guiding users toward sign-in or sign-up processes within the overall frontend architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/AccountRecovery.jsx'>AccountRecovery.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user-initiated password recovery by capturing email input, triggering a reset email via Supabase, and guiding users through the process<br>- Integrates with the applications navigation and provides real-time feedback, ensuring a seamless experience for users seeking to reset their account credentials within the overall authentication flow.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/ResetPassword.jsx'>ResetPassword.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user password reset by providing a secure interface for entering and confirming a new password<br>- Integrates with Supabase authentication to update user credentials and manages navigation upon success<br>- Supports the overall authentication flow within the application, ensuring users can efficiently recover access while maintaining security standards.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/StatisticPage.jsx'>StatisticPage.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the structure for the Statistic page within the application, serving as a placeholder for future development<br>- It establishes the layout, including a header and a bottom navigation bar, to facilitate user access to statistical data<br>- This component integrates seamlessly into the overall architecture, supporting the expansion of analytical features in the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/draft.jsx'>draft.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the landing page interface for the Agrotek Autonomi application, serving as the initial user entry point<br>- It presents branding elements and navigation options for user authentication, facilitating seamless access to sign-in and sign-up workflows within the overall frontend architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/SettingsPage.jsx'>SettingsPage.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user settings interface within the application, enabling profile management and account actions<br>- Facilitates viewing and editing user information, such as name, and supports user logout functionality<br>- Integrates with the backend authentication service to fetch, update, and sign out users, contributing to the overall user account management architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/SignIn.jsx'>SignIn.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user authentication by providing a sign-in interface that integrates with Supabase for password-based login and Google OAuth<br>- Manages user input, handles login requests, displays feedback, and navigates authenticated users to the dashboard, supporting seamless access control within the applications architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/ResetSuccess.jsx'>ResetSuccess.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user interface confirming successful password reset and guiding users to the sign-in page<br>- It enhances the authentication flow by delivering clear feedback after password recovery, ensuring users are informed of their successful reset and seamlessly redirected to authenticate again within the applications architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/Dashboard.jsx'>Dashboard.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides the main interface for the user dashboard, integrating personalized greetings, key metrics, visual data representations, and navigation controls<br>- It orchestrates the layout and ensures session data is sent to the backend upon load, supporting a cohesive and interactive user experience within the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/SignUp.jsx'>SignUp.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration by providing a sign-up interface integrated with Supabase authentication<br>- Manages user input, handles account creation, and offers feedback on success or failure<br>- Serves as a critical entry point within the frontend architecture, enabling new users to onboard seamlessly and access platform features.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/SignupSuccess.jsx'>SignupSuccess.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a user interface confirming successful password reset, guiding users to check their email for verification, and offering a direct link to sign in<br>- It enhances the authentication flow by delivering clear feedback and next steps after password recovery, supporting seamless user account management within the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/pages/OTP.jsx'>OTP.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates OTP verification within the authentication flow by capturing user input, validating the code via Supabase, and navigating to password reset upon success<br>- Integrates seamlessly into the broader authentication architecture, ensuring secure and user-friendly email-based verification as part of the account recovery process.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- services Submodule -->
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.services</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/services/sendSessionToBackend.js'>sendSessionToBackend.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates secure transmission of user session data from the frontend to the backend, enabling session tracking and device association within the applications architecture<br>- By retrieving the current session from Supabase and sending the access token alongside device information, it supports authentication continuity and device-specific session management across the system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/services/supabaseClient.js'>supabaseClient.js</a></b></td>
									<td style='padding: 8px;'>- Establishes a centralized client connection to the Supabase backend, enabling seamless integration of database, authentication, and storage services within the frontend application<br>- Facilitates secure and efficient communication with backend resources, supporting core functionalities such as user management and data operations across the entire codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/services/ws.js'>ws.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates real-time communication between the frontend and backend by establishing a WebSocket connection to send MQTT commands<br>- It enables the application to efficiently transmit messages to IoT devices or services, supporting dynamic updates and control within the overall architecture<br>- This service is essential for maintaining low-latency interactions in the systems event-driven communication layer.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/services/getToken.js'>getToken.js</a></b></td>
									<td style='padding: 8px;'>- Provides a streamlined method to retrieve the current users access token from the authentication session managed by Supabase<br>- Facilitating secure API interactions, it integrates seamlessly into the frontend architecture, ensuring authenticated requests are efficiently handled across the application<br>- This component is essential for maintaining user session continuity and secure data access within the overall codebase.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- components Submodule -->
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.components</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/components/DashboardCard.jsx'>DashboardCard.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a dynamic dashboard component displaying real-time energy usage metrics, including battery percentage and total energy consumption over selectable time ranges<br>- Integrates live data updates via Supabase channels, ensuring users receive current information on energy and device connectivity status within a cohesive UI.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/components/BottomNavBar.jsx'>BottomNavBar.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides a fixed bottom navigation bar for seamless access to key sections—Statistics, Dashboard, and Settings—enhancing user experience with intuitive icons and responsive styling<br>- Integrates with routing to facilitate smooth navigation within the applications architecture, supporting a cohesive and accessible interface across the frontend.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/components/chartdraft.jsx'>chartdraft.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interactive energy usage chart for authenticated users by fetching real-time data from the database<br>- Enables dynamic selection of metrics such as current, voltage, and energy, presenting visual insights with responsive, zoomable area charts<br>- Integrates seamlessly into the frontend architecture, facilitating user-friendly data visualization within the overall application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/components/GreetingCard.jsx'>GreetingCard.jsx</a></b></td>
									<td style='padding: 8px;'>- Displays a personalized greeting by fetching and rendering the current users name from the authentication service<br>- Integrates seamlessly into the applications user interface, enhancing user experience through dynamic, user-specific content<br>- Serves as a welcoming component within the frontend architecture, contributing to a cohesive and engaging user interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/components/ProtectedRoute.jsx'>ProtectedRoute.jsx</a></b></td>
									<td style='padding: 8px;'>- Implements route protection by verifying user authentication status before granting access to protected content<br>- Ensures only logged-in users can view certain pages, redirecting unauthenticated users to the sign-in page and providing real-time feedback during session validation<br>- Integrates seamlessly within the applications routing architecture to maintain secure and user-friendly navigation.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/components/ChartCard.jsx'>ChartCard.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interactive energy usage visualization component that fetches user-specific data from a backend service and renders dynamic, responsive charts<br>- Facilitates real-time monitoring of key metrics such as current, voltage, and energy over time, enabling users to analyze their consumption patterns within the broader application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/frontend/src/components/ArrowButtonGrid.jsx'>ArrowButtonGrid.jsx</a></b></td>
									<td style='padding: 8px;'>- Provides an interactive control interface for motorized equipment, enabling users to send directional commands via touch or mouse inputs<br>- Manages real-time command transmission and motor state control through MQTT messaging, supporting multi-touch functionality for precise, responsive operation within the overall system architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- backend Submodule -->
	<details>
		<summary><b>backend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ backend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/backend/mqttClient.js'>mqttClient.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates real-time communication between the backend and IoT sensors via MQTT protocol<br>- Manages connection to the MQTT broker, subscribes to sensor status updates, and enables publishing commands to devices<br>- Integrates seamlessly into the overall architecture to ensure efficient data exchange and control within the IoT ecosystem of the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/backend/index.js'>index.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates real-time communication and data management within the backend architecture by handling device sessions, WebSocket interactions, and MQTT sensor data integration<br>- It enables secure session tracking, command dissemination to devices, and persistent storage of sensor information, thereby supporting seamless device-user interactions and data flow across the system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/backend/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Provides the core backend functionality for the application, enabling secure communication, real-time data exchange, and integration with external services<br>- Manages server setup, handles API requests, and facilitates WebSocket and MQTT messaging, forming the backbone that supports the overall architecture and ensures seamless interaction between clients and external systems.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/backend/supabaseClient.js'>supabaseClient.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates interaction with the Supabase backend by establishing a client connection and providing a function to log sensor data for users<br>- It enables seamless storage of real-time usage metrics such as voltage, current, power, energy, and battery percentage, supporting the overall architectures goal of monitoring and analyzing user device performance within the system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/backend/sessionMap.js'>sessionMap.js</a></b></td>
					<td style='padding: 8px;'>- Provides a centralized storage mechanism for managing active user sessions within the backend architecture<br>- By maintaining a session map, it enables efficient tracking and retrieval of session data, supporting real-time session management and user authentication workflows across the application<br>- This foundational component ensures seamless coordination of user interactions and session lifecycle handling.</td>
				</tr>
			</table>
			<!-- routes Submodule -->
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.routes</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/diaramaa/Agrotek-WebApp/blob/master/backend/routes/session.js'>session.js</a></b></td>
							<td style='padding: 8px;'>- Manages user sessions by associating device identifiers with authenticated user IDs, enabling persistent session tracking across devices<br>- Handles session registration requests, validates authentication tokens, and updates the session map accordingly, supporting secure and efficient user-device linkage within the backend architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


### 🧰 Installation

#### ⚙️ Backend

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Create the `.env` configuration file**:
   Copy from the example:
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` with your local configuration**, for example:
   ```env
   PORT=4000
   MQTT_BROKER=mqtt://localhost:1883
   SUPABASE_URL=https://xyzcompany.supabase.co
   SUPABASE_SERVICE_KEY=your-service-role-key
   FRONTEND_URL=http://localhost:5173
   ```

4. **Install the dependencies**:
   ```bash
   npm install
   ```

5. **Start the backend server**:
   ```bash
   node index.js
   ```
   The server runs at: [http://localhost:4000](http://localhost:4000)

---

#### 💻 Frontend

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Create the `.env` configuration file**:
   Copy from the example:
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` with your Supabase project credentials**, for example:
   ```env
   VITE_SUPABASE_URL=https://xyzcompany.supabase.co
   VITE_SUPABASE_KEY=public-anon-key
   ```

4. **Install the dependencies**:
   ```bash
   npm install
   ```

5. **Start the Vite dev server**:
   ```bash
   npm run dev
   ```
   The app runs at: [http://localhost:5173](http://localhost:5173)

---

#### 📦 Run both concurrently (optional)

If you want to run both frontend and backend simultaneously using `concurrently`:

```bash
npm install -g concurrently

# From the project root:
concurrently "npm run dev --prefix frontend" "node backend/index.js"
```

