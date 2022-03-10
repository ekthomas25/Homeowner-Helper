# Home Helper

#### By Liz Thomas

#### _An app to keep track of regular home maintenance._

This application is currently in the planning stages.

Please view capstone-proposal.md for futher information regarding this project.

To see the author's research and planning process, check out Planning.md

## Technologies Used

* _React.js_
* _JavaScript_
* _Node_
* _npx create-react-app_
* _Git_
* _eslint_
* _Firebase_
* _React Router Dom_


## Description
This is a React/Firestore application that keeps track of regular home maintenance and home improvement projects. The app allows the user to sign in and out, add tasks, view task details, create log entries for each time you complete a task. During task creation, the user is able to indicate when the task should be completed next, what materials are needed, the area of the home this task is in, the frequency with which it should be completed and any extra helpful notes or instructions for the task. The dashboard feature shows the user what tasks are coming up and what tasks are overdue.

This project was created for my Epicodus capstone project.

The project is currently incomplete, but there are plans to complete it in the near future. Please check back for updates or email me at [thomas.elizabeth.k@gmail.com](mailto:thomas.elizabeth.k@gmail.com) if you have any questions.

## Setup/Installation Requirements

### Your computer will need to have the following installed and set up:
* _[GIT](https://docs.github.com/en/get-started/quickstart/set-up-git)_
* _[Visual Studio Code](https://code.visualstudio.com/download)_
* _[Node](https://nodejs.dev/learn/how-to-install-nodejs)_

### Database Setup
* _You will need to set up a Firebase account to use this app._
* _Begin by Adding a Project. You do not need to enable google analytics._
* _You will need to then Register your app._
* _Navigate to Authentication and click Get Started. Select Email/Passowrd and then enable it._
* _Navigate to Firestore Database and click Get Started. Start in test mode. Select your location.
* _Navigate to your project overview and click on the cog. Scroll down to SDK setup and configuration. Select Config.


### File Setup

* _Once you have VSCode and GIT, and Firebase set up, you will need to open up your terminal, navigate to your Desktop and type the command:_
`git clone https://github.com/ekthomas25/homeowner-helper.git`

* _This will clone the repository to your desktop and you will be able to then open the folder in VSCode._
* _Open the terminal in VSCode and navigate to_ `homeowner-helper/homeowner-helper-proj` _and type the following command:_ `npm install`
* _ Add .env to your .gitignore file. Then create a .env file in this directory.
* _Copy and paste the following into your .env file:_
```
REACT_APP_FIREBASE_API_KEY = [YOUR INFO]
REACT_APP_FIREBASE_AUTH_DOMAIN = [YOUR INFO]
REACT_APP_FIREBASE_DATABASE_URL = [YOUR INFO]
REACT_APP_FIREBASE_PROJECT_ID = [YOUR INFO]
REACT_APP_FIREBASE_STORAGE_BUCKET = [YOUR INFO]
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = [YOUR INFO]
REACT_APP_FIREBASE_APP_ID = [YOUR INFO]
```
* _Add the information found in SDK setup and configuration where it says_ `[YOUR INFO]`
* _To view the project enter the following command in your terminal: `npm run start`_
* _Create a user account, log in, and have fun!_

<img src='/homeowner-helper-proj/src/assets/images/component-diagram-details.png' alt="A component diagram of this app" />
<img src='/homeowner-helper-proj/src/assets/images/component-diagram-list.png' alt="A component diagram of this app" />

## Known Bugs

* _No known issues_

## License
_[MIT License](https://opensource.org/licenses/MIT)_

_If you have any questions or would like to reach out for any reason, please don't hesitate to send an email to [thomas.elizabeth.k@gmail.com](mailto:thomas.elizabeth.k@gmail.com)._

Copyright (c) 2022 Elizabeth Thomas