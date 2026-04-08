# 101512597LabTest2Comp3133

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.5.

---

## 📌 Project Description

This Angular application displays SpaceX mission data using the SpaceX public REST API.  
Users can view all missions, filter them by launch year, and view detailed information for each mission.

---

## ✨ Features

- View all SpaceX missions
- Filter missions by launch year
- View detailed mission information
- External links to Article, Wikipedia, and Video
- Uses Angular HttpClient for API integration
- Uses Angular Signals and modern control flow (`@for`, `@if`)

---

## 🛠️ Technologies Used

- Angular (Latest Version)
- TypeScript
- Angular HttpClient
- HTML & CSS
- SpaceX REST API

---

## 🔗 API Used

https://api.spacexdata.com/v3/launches

---

## 📂 Project Structure
src/app/
│
├── missionlist/ # Displays all missions
├── missionfilter/ # Filter missions by year
├── missiondetails/ # Detailed mission view
├── services/ # API service
├── models/ # Interfaces
├── app.routes.ts # Routing configuration
├── app.config.ts # App configuration


---

## 🚀 Development server

To start a local development server, run:

```bash
ng serve

Then open your browser and navigate to:

http://localhost:4200/