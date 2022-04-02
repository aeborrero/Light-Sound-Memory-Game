# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alex Borrero**

Time spent: **16** hours spent in total

Link to project: https://glitch.com/edit/#!/picayune-glow-farmhouse

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
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] When re-selecting difficulty, game is stopped and doesn't continue

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
<img srx ="https://recordit.co/KDrsIuKFOd"
![Starting / Stopping game](https://recordit.co/598EFnlQGz)
![Playing and losing game](https://recordit.co/TA3xiAjEkk)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://stackoverflow.com/


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One specific issue was I tried to have a button change colors when it was selected to highlight the difficulty chosen. I could not get it to work correctly so instead I just had the other buttons disapear when I selected one. Sometimes when the button was pressed during the game when the stop button was shown it would unhide the start and there would just be multiple buttons showing that shouldn't be. I instead had a dummy button that would look exactly the difficulty chosen but wouldn't do anything if clicked. Not being able to figure out how to change the pattern when selecting a higher difficulty so that the game would select a button besides the original 4, I had 3 different start games that would take one of 3 different methods to randomize the pattern. Each start button was wired to its selected difficultys method that would choose between 1-4, medium between 1-6, and hard between buttons 1-8. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I wonder how it would work to make a website with a group of people, how the work gets decided to be done. For example I know how I had 2 buttons for each difficulty and 3 different start buttons that would take in 3 different programs to play the game, this is a very complicated way of doing it and not time efficent for a website that would need to be constantly worked on. How does the team decide how they're going to implement each different portion, will they have a disscusion about its feature and how it should be implemented or does whoever the work gets fallen on they decide how its done and the other members adapt to it.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
For sure I would have liked to have a much nicer looking code because how I did it is just very repetative and it clogs up the file. Having 3 of the same functions with slightly different names and doing slightly different things made it hard to see what I had right and wrong cause I had to keep going back and forth, especially because I had many functions that just had 3 versions of it. Being able to implement a better way of choosing the correct random pattern and not having 2 difficultys, 3 start buttons to be a simple bandaid on problems I could not solve. I wanted to get at least the timer in because I felt like it would've made the game playout how I visioned it would.  



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1azfNTjUKox4-MhsLPLb_4rPHkzd6Co3L/view?usp=sharing)


## License

    Copyright Alex Borrero

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
