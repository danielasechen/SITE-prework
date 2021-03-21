# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Daniela Sechen

Time spent: 4.5 hours spent in total

Link to project: https://site-prework-daniela.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Number of mistakes/strikes is displayed on screen

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I made use of the linked w3schools.com reference pages, and got help from the following StackOverflow questions:
https://stackoverflow.com/questions/30008510/how-to-display-the-users-game-score-on-screen-in-realtime-instead-of-in-an-ale
https://stackoverflow.com/questions/23025867/game-timer-javascript

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
Implementing the game timer feature definitely forced me to put my debugging skills to work. At first, the timer would go off as soon as I pressed start, and the alert it generated would force me to reload the page in order to return to my code.
I suspected that I must have set the time to wait parameter too low, so I added a new alert that printed out the value I had given as that parameter. Using this strategy, I determined a reasonable timer value and prevented the timer from immediately ending the game.
Still, after a while, I realized that my current timer did end the game when time ran out, but I could not use it to display the time on the screen, which left the player with no way to know how much time they actually had. Knowing I wouldn't be satisfied with
a half-complete timer, I turned to the internet, and found a StackOverflow article (linked above) on a similar topic. With that code as a reference, I was able to design the timer with SetInterval and implement a countdown on the screen just as I had imagined.
I finally relied on documentation from W3Schools to figure out how to change the HTML display for both my timer and the mistake counter. After struggling with the timer for a little over an hour, I'm proud that I was able to use standard debugging strategies and 
documentation and take advantage of online resources like StackOverflow to create a fully functional game. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I'm curious as to how security is implemented. I used the "inspect element" option on Chrome to view console.log printouts, which first made me curious about whether all a webpage's HTML code is just viewable to anyone who visits, or, if there were some text or section
of the page that a developer didn't want the public to see, how they would go about doing that. I doubt the workings of a memory game are valuable to anyone, but if a webpage were to store information like email addresses and credit card digits, how would a developer
protect that information from outsiders?
I'm also curious about what strategies web developers use to make their sites popular, or how they optimize their search engine hits. For example, if I created a fantastic Simon Says game, and I wanted to get millions of players, how could I get my game to be the first
result on Google for "memory game"?
Lastly, how do web developers optimize their pages? I imagine that if my game had a lot more to display, the runtime would slow down considerably. What are the strategies to optimize runtime, prevent lag, etc.?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would first like to "set" the layout of the screen so that when it is stretched or compressed, the four buttons remain in the 2x2 pattern and rescale based on screen width. Similarly, I noticed that my "mistakes" and "time remaining" text overlap when the screen is very narrow, so I would implement some restrictions to fix that.
Feature-wise, I would love to add a (colorful!) progress bar that increases as you guess each round correctly. Finally, if time permitted, I would love to add more exciting victory and loss messages that appear over the center of the game page, rather than a simple website alert.



## License

    Copyright Daniela Sechen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.