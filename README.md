# Project: ***Employee-Summary***
Objective: 
One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.


### This project has the following features:
* To start the app run node index.js.
* The CLI application will prompt the user for email, name, id, and role.
* For the selected role, the following questions will be prompted.
    * If the selected role is *Manager* then the user will be prompted for *office Number*.
    * If the selected role is *Engineer* then the user will be prompted for *GitHub Username*.
    * If the selected role is *Intern* then the user will be prompted for *School Name*.
* The user will also be prompted for confirmation about adding more team members.
    * If the user answers *yes* then all the prompts will be displayed again.
    * If the user answers *no* then an HTML page will be generated that displays information about the team.
* Following validation messages will be displayed if the user doesn't provide any answers.
    * When the user doesn't provide *Name* then *Please enter name* validation message will be displayed.
    * When the user doesn't provide valid *ID* then *Please enter a valid ID* validation message will be displayed.
    * When the user doesn't provide valid *Email* then *Please enter a valid email address* validation message will be displayed.
    * When the user doesn't provide valid  *Office Number* then *Please enter a valid office number* validation message will be displayed.
    * When the user doesn't provide *GitHub Username* then *Please enter engineer's GitHub username* validation message will be displayed.
    * When the user doesn't provide *School* then *Please enter intern's school name* validation message will be displayed.


### To run tests :
npm run test

### To run Application :
node index.js

## Developer ##

**Priyanka Singh**


### Below are the links of the deployed project: ###

*https://github.com/singhpri30/Employee-Summary*

* https://singhpri30.github.io/Employee-Summary/*
