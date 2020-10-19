# Interactive Front End Development: BudgetCalc
This project has been [deployed to GitHub Pages](https://asforrest.github.io/milestone-2-budgetcalc/) and the source code is available in a [repository on GitHub](https://github.com/asforrest/milestone-2-budgetcalc)

This is a web app created for the 2nd Milestone Project for [Code Institute course: Full Stack Development](https://codeinstitute.net/full-stack-software-development-diploma/).

This web app will make use of technologies covered in the course up to this point including HTML, CSS, and JavaScript (including JQuery and connecting with APIs) in order to demonstrate an understanding of these technologies.

This web app aims to solve a real-world problem by assisting users with their financial planning.

## UX (User Experience)
This project was chosen because the creator of this web app, Alexander Forrest, currently uses a spreadsheet for budget calculations, however during the JavaScript course modules at [Code Institute](https://codeinstitute.net/) he came to understand the power of JavaScript and it's ability to create an interactive way to deal with budgeting.

There are other solutions and apps currently on the market but they are either not robust enough or too complicated for Alexander's needs. After asking friends and family he realised that many other people are also dealing with the same issues and looking for a solution.

Here is an overview of different types of potential users and what they may want to achieve with BudgetCalc:

### User Stories
- #### As a first time visitor:
    1. I want to have a clear understanding about how to use BudgetCalc.
    1. I want to understand how to move around the Web App intuitively through clear path finding.
    1. I want to be able to easily enter my budgeting data.
    1. I want to see a visual breakdown of my monthly expenses.
    1. I want to be able to save the information I enter in a budgeting program.
    1. I want to be able to send a copy of my budget to myself.

- #### A a returning visitor:
    1. I want to have the data from previous sessions available so I can add to or change elements to recalculate my budget.
    1. I want to see new features introduced.
    1. I want to be able to provide feedback about the the web app.

- #### As a potential employer looking for a software developer:
    1. I want to get a sense of Alexander's ability as a Interactive Front End Developer.
    1. I want to see that Alexander understands the technologies he's working with.

- #### As a fellow Code Institute student:
    1. I want to see the work of my classmates to be inspired for my own projects.

- #### As the site owner:
    1. I want to create a web app that I can be proud off.
    1. I want to minimalise or eliminate bugs to provide a seemless experience to users.
    1. I want to demonstrate to the Code Insitute evaluator that I have an understanding of the technologies that I'm working with.
    1. I want to impress potential employers with my work.

### Wireframes
![Wireframes Computer Tablet & Phone](images/readme-images/Wireframes-Computer-TabletPortrait-Phone.png "Wireframes Computer Tablet & Phone")

### Hero Image/Callout
It's important to have an attention grabber that directly explains to potential users what the Web App is and what they can expect from it. Selecting an image was also the basis for choosing a complimentary color pallete.

![Money Growing Green](images/ISS_24174_00025-edit-h867-w1400.jpg "Money Growing Green")

### Colors
The color pallete was choosen as complimentary to the hero image. Since green is often associated with money this seemed like the best starting point for choosing colors. It was important to have contrasting colors, so 1 main light color and one main dark color.

After looking at multiple light and dark shades of green the following colors were selected:

![Dark Green 39826C](images/readme-images/darkgreen39826C.png "Dark Green 39826C")
![Light Green E6EEEA](images/readme-images/lightgreenE6EEEA.png "Light Green E6EEEA")

### Fonts
The font-family used for this website comes from Google Fonts and is a sans-serif font: 'Montserrat'. This font was chosen because it's both plaful but also serious. The goal was to choose an approachable font that would also be professional enough to be used in a Web App that deals with budgeting and finance.

## Methodolgy

As a user of his own web app, BudgetCalc, Alexander found it easy to put himself in the shoes of potential user and this has been a benefit to him to develop useful features. 

Alexander has a background in video production which gives him a unique perspective when trying to look at a problem from multiple viewpoints as video production is often for an audience with a wide range of tastes.

The methodology of this project will be based on three core principals during development;

- #### That [Form follows function](https://en.wikipedia.org/wiki/Form_follows_function#Software_engineering).
    1. The form should first and foremost look at the engineering requirements.
    3. If the design dictates how the software should work on the back-end it may suffer from inflexibly.

- #### The principle of always delivering a [Potentially Shippable Product](https://less.works/less/framework/potentially-shippable-product-increment)
    1. This means that the product is always working after a coding session, albeit in a basic form.
    1. The product could potentially be submitted at any time.
    1. Constantly having a working product gives more room for refinement.

- #### Working with a [Product Backlog](https://en.wikipedia.org/wiki/Scrum_(software_development)#Product_backlog)
    1. As software development is an ongoing process a product backlog allows for the prioritising of information.
    1. A product backlog provides a roadmap for future development.
    1. Items completed on the product backlog will nbe moved to a completed section so that progression can be evaluated and tracked.

## Process
When taking the methodology into account the following process has been created:
- #### Planning
    1. Brainstorming about core elements to make the web app work.
    1. Brainstorming about stretch goals and the future of the web app.
    1. Contact with the Code Institute appointed mentor for guidance and real world experience when tackling some of the different challenges.
    1. Discussing the project with friends and family to get input.
    1. Drawing out the structure on paper and creating wireframes to server as a guideline for responsive development.

- #### Creating basic functionality (focus on JavaScript)
    1. For this project it made sense to first start with some basic functionality, as BudgetCalc essentially is a complicated calculator with many moving parts, getting those parts to work together is essential before moving on to the final design.
    1. Showing working calculations makes all following brainstorming sessions and mentor contact moments more efficient as the product is starting to develop functionality.
    1. This creates boundaries for design, and gives a clearer vision about what is possible and what isn't.

- #### Creating basic user interface and structure (focus on HTML/CSS)
    1. At this point it's important to start selecting a color palette and injecting imagery as this will assist with planning and building out the functionality of the product.
    1. Understanding how a user will interact with the product may trigger new ideas to create a better user experience.

- #### Evaluation
    1. More brainstorming about potential user interactivity elements.
    1. More brainstorming about potential feature and functions, such as incorporating new potential API elements that benefit the product.
    1. Discussion with the Code Institute appointed mentor to see what areas need improvement.

- #### Creating advanced functionality simultaneously to user interactivity (focus on JavaScript/HTML/CSS)
    1. During this final step it's important to have a prioritised overview as to first focus on elements that either are quick-wins or have the greatest impact.
    1. Working on both functionality and user interactivity interchangeably allows for both to grow together into a product that is both useful and enjoyable to use.

## Features

### Existing Features
1. Net worth calculation: This provides an overview of the current state of someones net worth. This can be a great indicator of financial health in the long-run.
1. Income calculation: There are many different types of income, these have all been accounted for: salary, bonuses, gig jobs.
1. Fixed costs calculation: In order to know how much budget remains for spending first all the fixed costs need to be calculated to understand what remains for the variables costs.
1. Variable costs calculation: These are things that are not recurring or changing month-to-month. Items that fall into this category could be food and drink, socialising, and purchasing new things.
1. Intuitive navigation: User's expect a good product to have easy navigation. It was important to not only give people the means for moving forwards and backwards through the project, but also to give them the ability to jump around and have a clear understanding about how far along and where they are in the web app.
1. Export of data: Just filling the data into the app is not sufficient, if a user wants to keep or send the data to someone else then it's important to have a method for exporting the data. Email with use of EmailJS was the fastest and most efficient way to effectively export the data.
1. Savings and loading data: To ensure that users return to the app and don't use it as a once-off experience it's important to save any progress that the user has made. By offering users a method for saving and retrieving data users are then able to come back to the product and edit any information they've filled in.

### Features Left To implement
1. Refactoring: Part of the code used can be cleaned up and refactored into shorter code that has the same outcome as code that is currently being used.
1. Add global support: mMltiple currencies and languages.
1. Create a settings button and/or questions: Allow users to turn on and off elements in the calculator that do or don't relate to them.
1. Save data on a central server: Allow users to use the product from different terminals.
1. Budget recommendations for users: Give users more tips and tricks to improve their budgeting, such as percentages of their bugets they should idealistically be spending on different costs.
1. Multi-month budgeting: Extrapolate data into a yearly overview so that users can track their spendings over a longer period of time and also having more information on budget forecast into the future.
1. Household budgeting: Provide budgeting info for multi-person households, such as which costs are shared and which are individual to the user.
1. Collapsable sidebar on mobile: Possibly experiment with a collapsable sidebar on mobile devices.

## Technologies Used

### Languages Used
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the modals work properly, as well as simplifies DOM manipulation.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [GitPod:](https://gitpod.io/)
    - GitPod was used for the bulk of development and as a local server for testing.
1. [StackOverflow](https://stackoverflow.com/)
    - Stack Overflow was used as a reference and to ask questions about issues that were difficult to code.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used for resizing images and editing photos for the website.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.
1. [Plotly](https://plotly.com/javascript/)
    - Plotly was used to generate graphs for the user.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [EmaiJS](https://www.emailjs.com/)
    - EmailJS was used for the contact form and to send a generated report to users.



## Testing

### Testing Methodology
The testing has been rigorous, manual and ongoing throughout the development process. The choice to do testing manually had some benefits in that it also gave an opportunity to constantly revisit the site which helped with coming up with new idea and setting priorities.

This was done by hosting a server on GitPod with a live version of the site running at all times while working on the site.

Testing consisted of:
1. Clicking all the available links and jumping back and forth in an attempt to break the links.
2. Random site navigation in an attempt to break the many hide/show elements, which revealed many bugs that were then fixed.
3. Google Chrome's Inspector was used with Console open as to catch any errors with pages or elements loading.
4. Friends and family have been asked to try filling in the website on multiple occasions, this was also beneficial with seeing how another use would used the site.
5. Since the App was built using the Google Chrome browser, which tends to cache information and often fails to update after changes, the page was constantly force-reloaded using the keyboard shortcut CMD/CTRL + Shift + R **before, during and after** changes were carried out.
6. Within Google Chrome's Inspector the mobile view emulation mode was used to test every page, link, button and input with the following emulators:
    -   iPhone X
    -   iPhone 7 Plus
    -   iPhone 7
    -   iPhone 5
    -   iPad
    -   Moto G4
7. Testing was also done in multiple browsers:
    -   Google Chrome
    -   Google Chrome Mobile
    -   Google Chrome Tablet
    -   Apple Safari
    -   Apple Safari Mobile
    -   Apple Safari Tablet
    -   Mozilla Firefox
    -   Mozilla Firefox Mobile
    -   Mozilla Firefox Tablet

### Code Validation
The CSS code was validated without any issues.
![CSS Validation](images/readme-images/validation-css.png "CSS Validationn")

The HTML code was validated with 1 error that wasn't fixed. This is due to other mewthods not being able to target an ID on the same page. This is touched on further in the section bellow 'Interesting and Ongoing Bugs'.
![HTML Validation](images/readme-images/validation-HTML.png "HTML Validationn")

The JavaScript code was validated with a few insignifcant errors due to the variables referencing APIs which are not locally stored in the repository. Also there was one error about the usage of a global variable 'use strict', however this was used expressly as to help catch any mistakes during the development process and stop browser from incorretly interpretting JavaScript code.
![JavaScript Validation](images/readme-images/validation-javascript.png "JavaScript Validationn")

### GitHubs Role In Testing
When looking at the GitHub commits there is a pattern of the commits getting better and more consistent as the project went on. 

After checking the commits for the purpose of this readme an issue was discovered that some of the commits might have run a bit long. However, this was done purposefully so that it was easy to reference changes in the Web App in case something went wrong. 

Luckily, due to rigorous ongoing testing and committing there was only one time when data needed to be restored after accidentally deleting the js folder which contains all of the JavaScript code. It was easy to recover this code by accessing the last commit on GitHub and copying the data into the current GitPod workspace.

A system of prefixes was used to organise GitHub commits which can be used to get a glimpse of the amount of testing:

1. FEATURE
    - FEATURE was used when adding new functionality or after major changes to the web app. During implementation of these features testing was ongoing. 
2. BUG
    - BUG was used when there was an issue discovered during testing and only once the bug has been fixed.
3. TEST
    - TEST was used after a more in-depth test, sometimes bugs were also fixed before these commits.
4. UPDATE
    - UPDATE was used for small changes, primarily to supplemental material like the backlog and readme.
5. BACKUP
    - BACKUP was used for large backups before starting implementation of a new feature.
6. Various others
    - Other prefixes or text have also been used at times, however the goal for the future is to stick to the prefixes mentioned here above (1-5) as to give evaluators, colleagues, employers and users a clear overview of changes that have been made.

### Interesting and Ongoing Bugs
1. There is a bug (which is also known to Code Institute) that currently doesn't have any solution. Although the code is correct for the hero image and works when emulating a mobile device with Google Chrome when viewed on an iOS device in Safari of Google Chrome the background image gets enlarged. This bug has been discuseed with tutor support at Code Institute but as of yet there is no solution.
1. Sometimes on mobile devices there is a thin white light visable on the right side of the screen. The code has been vetted together with Alexander's mentor but this is most likely due at element which is wider then the divs. However the code is correct in it's basic form.
1. The call to action button overlayed on the hero image is a button inside an anchor tag which is invalidated by HTML5 as incorrect code. However the method of placing the button inside a form and directing the form to the link doesn't work in this case because the link is to an ID on the same page. So the only solution was to keep the button inside the anchor tag. The same was done in one of the modules of Code Institute on which this concept is based.
1. Specifically when viewing the website on a long screen (tested with an iPhone 11 Pro Max) when switching from portrait into landscape mode, white bars are visable on both sides of the screen. This cannot be reproduced with Google Chromes phone emulator.

## Deployment

This project is saved to a [repository on GitHub](https://github.com/asforrest/milestone-2-budgetcalc) and as such is open to the public.

This project has also been [published to GitHub Pages](https://asforrest.github.io/milestone-2-budgetcalc/) both for evaluation by Code Institute and so that users can access and use the Web App. This is made possible by GitHub by going to the settings page of the repository and choosing a branch to publish. The master branch has been selected for this purpose.

The development version is currently the same as the deployed version, however this project is a work in progress and will be branched for continuous development while waiting for a final grade during Code Institute’s evaluation process. After the evaluation period has been completed any changes made to the project will then be committed back to the master branch and will be directly available to users.

### Running The Code Locally

If you wish to download a copy of the code in order to run the code locally, this is also possible. To do this go to the [BudgetCalc repository on GitHub](https://github.com/asforrest/milestone-2-budgetcalc) click on 'Code' in the top right and select the method you want to use to download and run the code locally.

### Running The Code Online In Your Own Environment

If you wish to look at or work on the code in an online IDE, then it's recommended to use GitPot. If your using Google Chrome and you install the [Google Chrome GitPod extension](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki?hl=en) then you will see green 'Gitpod' button above [the repository](https://github.com/Code-Institute-Solutions/readme-template) and this will load the code into your own Gitpod environment.


## Contact

If you have any questions about this project or updates then you can contact the developer [Alexander Forrest via his GitHub user profile](https://github.com/asforrest) or alternatively you can send an email to [mailto](mailto:asforrest@icloud.com).

## Credits

The following is an overview of credits for the different people and sources used.

### Content

All sources used have been documented throughout the code in the website through the use of comments. The structure of these comment starts with an explanation of what has been adapted for this project and then the source is giving in the commentswith a SRC= tag.

### Media

The photo used for the hero image was purchased from stockphotosecrets.com for use in this project.

### Personal Acknowledgements

I would like to thank:
- My mentor Jonathan for his patience, knowledge, experience and support.
- Kevin and Michael, tutors at Code Institute, who took the time to check my workspace, my project and lead me towards the answers I was looking for without just giving me the answers.
- My wife, Alba, for het patience and for taking care of our newborn baby, Zoë, while finishing up this project.
- Code Institute Student Care for checking in with me, keeping me motivated, and being understanding about the fact that becoming a new father meant that my priorities were split between my studies, work and childcare duties.