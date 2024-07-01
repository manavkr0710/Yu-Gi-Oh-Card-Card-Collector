# Yu Gi Oh Card Collection App
## About the Project
- A web app written with Javascript, HTML, and CSS that allows users to search for, and add cards to their Yu-Gi-Oh collection.
- Performs GET request to YGoProDeck API to fetch a card from 13000+ card possibilites
- Provides details of card such as Name, Description, Type, and Price. 
- Stores cards to a Firebase Realtime Database
- Uses Firebase's Authentication for a Login-Register System

## How to Use Yu Gi Oh Card Collection App
1. Download ZIP of this Project, and extract.
2. Go to Google Firebase and create an account.
3. At the Firebase console, create a project and accept the terms of agreement.
4. In the Project Overview, select the Web App option and name your Web App, and then register your app.
5. Under "Add Firebase SDK", only copy and paste the **CONFIGURATION DETAILS**, and replace it with the file's filler configuration details.
6. On the Left sidebar, click Build>Realtime Database and click "Create Database".
7. Under Database Options, select your location, and then for Security Rules, click "Start in Locked Mode".
8. Go to Rules and paste in _{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }_


