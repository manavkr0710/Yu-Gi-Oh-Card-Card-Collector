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
6. On the left sidebar, click Build>Realtime Database and click "Create Database".
7. Under Database Options, select your location, and then for Security Rules, click "Start in Locked Mode".
8. Go to Rules and paste in
  _{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}_
and click "Publish".
9. Then, on the left sidebar, click Build> Authentication> Sign-In method> Email/Password.
10. Enable Email/Password and Save.
11. In your code editor, go to Login-Register-System > index.html and right click on the code, and click "Open with Live Server".

## Images
![LoginImage](https://github.com/manavkr0710/Yu-Gi-Oh-Card-Card-Collector/assets/111619717/5a700bd1-f859-48cc-b647-686bf3f91626)
![HomePageImage](https://github.com/manavkr0710/Yu-Gi-Oh-Card-Card-Collector/assets/111619717/a7c8d9ae-cbc3-4e73-9cd6-5a2e33b85d83)
![resultsImage](https://github.com/manavkr0710/Yu-Gi-Oh-Card-Card-Collector/assets/111619717/33699a2e-981f-4c0f-bdc7-b0e2631feb1c)
![cardImage](https://github.com/manavkr0710/Yu-Gi-Oh-Card-Card-Collector/assets/111619717/75169c77-c18b-43ef-b25f-591d5e140d4a)
![CollectionImage](https://github.com/manavkr0710/Yu-Gi-Oh-Card-Card-Collector/assets/111619717/271b5d59-b410-4dda-8b2f-a196c677e095)


