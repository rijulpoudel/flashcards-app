# Web Development Project 2 - Flashcards App

Submitted by: **Bimarsha Poudel**

This web app: **lets users study using a set of flashcards with interactive flipping and random card selection. The app supports images and category-based styling for enhanced learning.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Geography
    - Math
    - Tech
    - Art

The following **additional** features are implemented:

* [x] Flip animation using CSS for smooth transitions
* [x] Responsive layout and styled button interactions

## Video Walkthrough

Here's a walkthrough of implemented required features:
 [Click here to watch the walkthrough on Loom] (https://www.loom.com/share/996b061bdcc742a1ae6dd3ac9eb7fa07?sid=b8bc5a44-7cd9-4389-aa20-bb62c7f3adc2)

## Notes

Some challenges I encountered:
- CSS transform styles needed tweaking to make the flip animation work well on both sides.
- Centering the card and button layout across screen sizes required layout tuning.
- Handling image overflow inside the card required careful CSS styling.

## License

    Copyright 2025 Bimarsha Poudel

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
