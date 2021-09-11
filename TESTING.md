# Testing

## 1. Code Validation
The W3C Markup Validator, W3C CSS Validator & JSHint Services were used to validate every page of the project to ensure there were no syntax errors in the project.
-   [W3C Markup Validator](https://validator.w3.org/#validate_by_input)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
- [JSHint](https://jshint.com/)

### 1.1 CSS Validation
The test was succesfull and did not report any issues.<br>
<img src="https://github.com/Lasserini/world-in-flames/blob/main/assets/images/validation/worldinfmales_cssvalidation.png"><br>
The two warnings are shown below, the colors being the same is done on purpose to hide disabled buttons.
<img src="https://github.com/Lasserini/world-in-flames/blob/main/assets/images/validation/cssvalidation_warnings.png"><br>

### 1.2 HTML Validation
Fixed one minor typo causing an error, afterwards this was the result.<br>
<img src="https://github.com/Lasserini/world-in-flames/blob/main/assets/images/validation/worldinfmales_htmlvalidation.png">

### 1.3 JSHint Validation
After adding some semicolons, JSHint returns this result<br>
<img src="https://github.com/Lasserini/world-in-flames/blob/main/assets/images/validation/worldinflames_jshint.png">
- The 14 warnings relate to using newer JavaScript stuff. They are mostly warnings about using "let" to declare variables, and then some comments about using a few instances of template literals & arrow function syntax. The consequence is that the game doesn't work in Internet Explorer 11 (and old versions).
- The 6 variables that JSHint thinks are unused, are all utilized by "button on click" attributes in the HTML document.

## 2. Responsiveness
To test responsiveness across various devices & screensizes, I used [Responsive Design Checkcer](https://www.responsivedesignchecker.com/), a 17`` laptop & a OnePlus 6T mobile phone.

Viewport | iPhone 5/5s<br>320x568 | Galaxy S5/S6/S/<br>360*640 | OnePlus 6T<br>412x892 | Ipad Mini<br>768x1012 | Ipad Pro<br>1366x1024 | Desktop 1024px | Desktop 1440px
--- | --- | --- | --- | --- | --- | --- | --- |
Site responsiveness<br>above 850px width  | n/a | n/a| n/a | n/a | ? | ? | ?
Site responsiveness<br>between 450px & 850px width | n/a | n/a | n/a | ? | n/a | n/a | n/a
Site responsiveness<br>below 450px width | ? | ? | ? | n/a | n/a | n/a | n/a
Button functionality  | Good | Good | Good | Good | Good | Good | Good
Rules & About boxes functionality  | Good | Good | Good | Good | Good | Good | Good
Images | Good | Good | Good | Good | Good | Good | Good
Renders as expected | Yes | Yes | Yes | Yes | Yes | Yes | Yes

## 3. Browser Compatability
Browser -> | Chrome | Firefox | Edge | Safari | Opera | IE-11
--- | --- | --- | --- | --- | --- | --- |
Appearance  | Good | Good | Good | Troubled | Good | Good
Responsiveness | Good | Good | Good | Good | Good | Good
Functionality | Good | Good | Good | Good | Good | Doesn't work

## 4. Lighthouse Testing
The first run through suggested adding rel="noopener" tags to the external links. After doing that this was the results. I do have a suspicion that this test only takes the welcome screen into account though.<br>
For desktop:<br>
<img src="https://github.com/Lasserini/world-in-flames/blob/main/assets/images/validation/lighthouse_result_desktop.png"><br>
For mobile:<br>
<img src="https://github.com/Lasserini/world-in-flames/blob/main/assets/images/validation/lighthouse_result_mobile.png">

## 5. Testing User Stories from User Experience (UX) Section
- As an owner, I want to make the user think about the climate crisis.<br>
    - The welcome screen features a hero image and an intro text that draws the user into the theme.
    - The about section has a link to a site where the user can explore further information & calculate their own climate footprint.
- As an owner, I want to provide the user with ideas for making small changes to help lower their climate footprint.<br>
    - The ending features suggestions/ideas on what behaviour might be worth looking at. The topic of suggestions is tied to the word the user just tried to guess, connecting the gameplay to the underlying purpose. 
    - The about section has a link to a site where the user can calculate their own climate footprint.
- As an owner, I want to provide an easily understandable game experience.<br>
    - The welcome screen features a rules button that explains the rules, and an about button with further information about the game and its theme.
    - The gameplay screen boils the rules down to a single line & an intuitive setup that is hopefully simple to grasp and get started with.
    - The user has a Play Again button available, if they wish to test stuff abit before they start playing proper.
- As a user, I want to know how the game works.<br>
    - On the welcome screen the user finds the rules button, when clicked the user is presented with a box that explains the rules of the game.
    - On the gameplay screen the user reads "Guess the hidden word before it's too late!" and is presented with a hidden work & letters to press.
- As a user, I want to know more about the idea behind the game.<br>
    -  On the welcome screen the user finds the about button, when clicked the user is presented with a box that explains abit about the thematic ideas behind the game.
- As a user, I want to jump straight into the gameplay action.<br>
    - On the Welcome screen the user pressed the large button with a call to action written upon it, and the game begins.
- As a user, I want a background story to get me excited about playing a game.<br>
    - On the Welcome Page the user is presented with a flavourfull intro text.
    - When the game fails/succeds the user is presented with a conclusion depending on how wel they did, and on what word was chosen as the hidden one.
- As a user, I want a visual experience that enchances the gameplay experience.<br>
    - On the Welcome Page a hero image draws the user in.
    - During gameplay (& at the consequence step), the images of the glove evolve in response to how well the user is doing.
- As a user, I want to restart my game before it ends.<br>
    - On the gameplay screen the user can press the Play Again button to immediatly restart the game.
- As a user, I want to return to the index page to read the rules again.<br>
    - On the gameplay screen the user can press the Back button to return to the welcome page.
- As a user, I want to play one more time.<br>
    - Upon reading the conclusion the user can press the Play Again button to restart the game.
- As a user, I want to learn about small steps I can take to combat climate change.<br>
    - In the about box the user can press the link to an external site and calculate the climate footprint.
    - During the conclusion of the game, the user is presented with small tips regarding the topic under which the chosen word to guess fall under.
- As a user, I want to experience different endings.<br>
    - The user can either fail or win, which results in two different outcomes.
    - The user can experience six different endings based upon the word they had to guess.

## 5. Known & Fixed Bugs
- The link to my Github Repository wasn't displaying properly on the deployed site.<br>
    - Removed the copyright symbol, seems to have fixed the issue.

- Struggled with finding an elegant solution to resetting the disabled Letters upon a game restart.<br>
    - Found a methon for creating the letter buttons with JavaScript, which also enabled using some fun backtic action.

- After adding a function to remove previously used words, the game could run out of words, leading to unintended behaviour.
    - Added an if clause to a function to alert the user that a click on the back button is required. This also doubles as a way of informing the user that they have seen all there is too see.
    - An alternative would be to have the if clause refill the array with hiddenWords, but that wouldn't give the user a clear indication that all content has been used. I suppose it could, but would be less elegant I think.

- For the longest time the actual game wasn't working.<br>
    - After some research I found a way to restructure some of the logic behind it, adding a second version of the hidden word to have one to alter during gameplay was essential.

- The background colours on the images aren't all as black as I would like them to be.<br>
    - Decided that I didn't want to alter too much to images I credit to others, and that the issue wasn't the most essential think to spend time working on.

- The site doesn't work well (or at all) in Internet Explorer 11 (& previous versions), as the JavaScript code utilize various things that wasn't supported in the outdated JavaScript versions IE uses.
    - I'm trying to find a way to detect that a user is using IE11, so I can atleast provide an explanation of why the game doesn't work.

- Safari doesn't load 3 of the images, instead showing a green square.
    - Time to get to work.