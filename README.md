<h1 align="center">World In Flames Website</h1>

<h2 align="center"><img src="assets/images/asIresponsive.png"></h2>

This website is an infotainment Hangman Game with a climate crisis theme. The primary purpose is to provide a fun and interesting game experience. Secondarily the site aims to incite its users to take a closer look at how they can help combat climate change.

The site was build as part of a Diploma in Software Development at Code Institute. Its the second porfolio project out of five, and makes use of HTML, CSS & JavaScript.

[Visit the deployed website](https://lasserini.github.io/world-in-flames/)

## 1. User Experience (UX)

### 1.1 Project introduction
World In Flames takes the classic Hangman game and combines it with a Climate Crisis theme. The user is cast as the hero and is tasked with saving humanity. To do so the user has to guess the correct word before running out of attempts. The words focus around activities that impact peoples climate footprint, in particular the everyday aspects that people could choose to act upon. 
When the user succeeds or fails, the user is meet by an end screen with provides some brief information about the word that was the answer, and provided with ways to further explore their own part of combating climate change.

### 1.2 Project goals
- Create a Hangman Game using Javascript.
- Add a climate crises theme that makes for an interesting game experience.
- Nudge the user towards thinking about their personal climate footprint.

### 1.3 Target audience
The website is aimed at people who enjoy quick games, its intended to be lighthearted enough to provide a fun experience, but also has a more serious backdrop to which it hopes cast some attention to.<br>
The website targets people who want to be a part of changing the climate crisis we are currently in, but feel helpless or are unaware of where to begin.

### 1.4 User stories
- As an owner, I want to make the user think about the climate crisis.
- As an owner, I want to provide the user with ideas for making small changes to help lower their climate footprint.
- As an owner, I want to provide an easily understandable game experience.
- As a user, I want to know how the game works.
- As a user, I want to know more about the idea behind the game.
- As a user, I want to jump straight into the gameplay action.
- As a user, I want a background story to get me excited about playing a game.
- As a user, I want a visual experience that enchances the gameplay experience.
- As a user, I want to restart my game before it ends.
- As a user, I want to return to the index page to read the rules again.
- As a user, I want to play one more time.
- As a user, I want to learn about small steps I can take to combat climate change.
- As a user, I want to experience different endings.

### 1.5 Design
-   #### Colour Scheme
    -   The site has a gloomy thematic setting, and is therefor designed with a dark theme. The main colours are black backgrounds, intended to make the burning effects on the images stand out clearer, red text on highlighted headings and white text for larger blocks of text.

-   #### Typography
    -   The Raleway font is the main font used with Sans Serif as the fallback font in case Raleway isn't being imported into the site correctly. Oswald is used for headings, also with Sand Serif as fallback. 

-   #### Images
    -   Imagery plays a crucial role. The startscreen features a hero image which displays a burnin globe being held by human hands, intended to symbolise the tast the user is presented with.
    -   The actual game uses images that see the world in a gradually more deteriorated state (using imagery rather than the classic hangman animation).
    -   The conclusion also uses images to encite an emotional response, either showing an exploding planet upon failure or a healthier planet upon succes.

*   ### Wireframes
    Devices above 700px+ | Smaller devices below 700px
    --- | --- |
    <a href="https://github.com/Lasserini/world-in-flames/blob/main/assets/wireframes/Index%2C%20Desktop.png">Index</a> | <a href="mobile index view">Index</a> 
    <a href="https://github.com/Lasserini/world-in-flames/blob/main/assets/wireframes/GameState%2C%20Desktop.png">GameState</a> | <a href="gamestate mobile view">GameState</a>
    <a href="https://github.com/Lasserini/world-in-flames/blob/main/assets/wireframes/Conclusion%2C%20Desktop.png">Conclusion</a> | <a href="mobile conclusion">Conclusion</a>


## 2. Features
### 2.1 Current Features
*   General   
    - A hero image that draws the user into the theme.
    - Responsive on all device sizes.
    - A simple intuitive site design and gameplay experience.
    
    <br>
*   The Header includes:
    - **The name of the game, and two burning globes on larger screen sizes** allows the user to clearly see what site they are visiting at any given moment.

    <br>
*   The Welcome (Index) page includes:
    - **A hero image** that draws the user into the theme and sets the mood.
    - **An Introduction** flavour text to set the scene.
    - **Rules button & accompanying tab** allows the user an overview of how the game is played.
    - **About button & accompanying tab** provides the user with some information about the purpose and movivation of the site, and a link to a carbon footprint calculator.
    - **A button that starts the game** to allow the user easy access to the site's primary function, which is playing the actual game.

    <br>
*   The GameState page includes:
    - **Imagery that change as the game progress** gives the user a stronger thematic feel. Whilst you are failing to safe the globe, you can see its state deteriorating.
    - **A counter that displays remaining number of attempts** allows the user to see how much time is left, and adds a sense of urgency.
    - **A button to play again** allows the user to restart the game if wanted.
    - **A back button** provides an easy way for the user to return to the index page.
    - **The actual gameplay** which consists of the hidden letter to guess, and letter buttons to press. Allows the user to play the game.

    <br>
*   The Conclusion page includes:
    - **A final image** giving the user a strong visual indication as to whether they won or lost.
    - **A reveal of the secret word** allows the user to see what the correct word was.
    - **A flavourtext ending** provides a textual indication of how well the user did.
    - **Information about the hidden word** provides some linkage to the real world, and why the hidden word was included in the game. Also attempts to provide some food for thought on how the user can alter their own behavious within the category the word is taken from.
    - **A button to play again** allows the user to restart the game if wanted.
    - **A back button** provides an easy way for the user to return to the index page.


### 2.2 Features left to implement 
- Add a visual element with a thermometer to replace the Disaster Strikes in x wrong guesses counter.
- Add a feature that ensures a user doesn't get the same Hidden word again in the current session.
- Consider is more factual information during the conclusion step is a good idea. Perhaps its ok to keep it light as is.

## 3. Technologies Used

### 3.1 Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### 3.2 Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the Roboto and Oswald fonts used throughout the site.
1. [Gitpod](https://gitpod.io/)
    - Gitpod was used to develop the website.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git. And to host the project.
1. [Pixabay:](https://pixabay.com/)
    - Used as a source for free to use images.
1. [PicResizer:](https://picresize.com/)
    - PicResizer was used to resizing images and edit profile photos for the website.
1. [Balsamic:](https://balsamiq.com/)
    - Balsamiq was used during the design process to create Wireframes.
1. [Lighthouse from Chrome Developer Tools:](https://developers.google.com/web/tools/lighthouse)
    - Used to test the sites accessibility and performance.
1. [Responsive Design Checker:](https://www.responsivedesignchecker.com/)
    - Used in the testing process to check responsiveness on various devices.
1. [Am I Responsive:](http://ami.responsivedesign.is/)
    - Used for quick glance at responsiveness and for README image.
1. [W3C Markup Validator](https://validator.w3.org/#validate_by_input)
    - Used to validate the HTML code.
1. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
    - Used to validate the CSS code.
1. [JSHint](https://jshint.com/)
    - Used to check JavaScript code for issues.

## 4. Testing
The testing process can be found [here.](adjust with correct link)

## 5. Deployment

### 5.1 GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### 5.2 Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/Lasserini/world-in-flames
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/Lasserini/world-in-flames
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## 6. Credits

### Code inspiration

- The function letterButtons() that makes the letter buttons is heavily inspired by https://www.youtube.com/watch?v=dgvyE1sJS3Y
- Inspiration on how to make the game work comes from https://www.youtube.com/watch?v=dgvyE1sJS3Y & https://codepen.io/cathydutton/pen/ldazc 

### Content

-   All content was written by the developer.

### Media
- stage1 
image by <a href="https://pixabay.com/users/wikiimages-1897/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=11015">WikiImages</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=11015">Pixabay</a>

- stage2
image by <a href="https://pixabay.com/users/dieterich01-2819333/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4481877">Lothar Dieterich</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4481877">Pixabay</a>

- stage3
image by <a href="https://pixabay.com/users/tumisu-148124/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5268446">Tumisu</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5268446">Pixabay</a>

- stage4
image by urikyo33 from PixabayImage by <a href="https://pixabay.com/users/urikyo33-11404887/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3999277">urikyo33</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3999277">Pixabay</a>

- stage5
image by <a href="https://pixabay.com/users/urikyo33-11404887/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3999277">urikyo33</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3999277">Pixabay</a>

- stage6
image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=960446">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=960446">Pixabay</a>

- failure_image
by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=422748">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=422748">Pixabay</a>

* success_image
by <a href="https://pixabay.com/users/un-perfekt-9295476/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3630164">un-perfekt</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3630164">Pixabay</a>

- hero_image
by <a href="https://pixabay.com/users/cristianis-2094012/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4776711">Cristian Ibarra</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4776711">Pixabay</a>

- logo_left & logo_right
image by <a href="https://pixabay.com/users/thedigitalartist-202249/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2254711">Pete Linforth</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2254711">Pixabay</a>


### Acknowledgements

- [W3Schools] https://www.w3schools.com/ for being a good friend whenever I needed to quickly read up on something.

- Code Institute for providing me with the know-how necessary to code the website.

- Scientists for stubbornly proving that the climate crises is manmade.

- My wife for coping with me sitting behind the computer whilst in the middle of renovating our new house.