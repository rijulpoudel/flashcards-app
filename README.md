# Web Development Project 3 - Smart Flashcards

Submitted by: **Bimarsha Poudel**

This web app: **lets users study flashcards by guessing answers, receiving feedback, navigating through the cards, and tracking streaks. It supports fuzzy matching, shuffling, and visual cues to make learning interactive and fun.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [x] Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  - [x] Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - [x] Both the next and back buttons have a visual indication (grayed out) when the user is at the beginning or end of the list

## Optional Features

- [x] Users can use a shuffle button to randomize the order of the cards
  - [x] Cards remain in the same sequence unless the shuffle button is clicked 
  - [x] Cards change to a new randomized sequence when shuffle is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - [x] Answers are matched even when they have casing, punctuation, or spacing differences
- [x] A counter displays the user’s current and longest streak of correct responses
  - [x] Current streak increments with correct answers
  - [x] Streak resets to 0 on incorrect guess
  - [x] Longest streak updates if current exceeds previous record

## Additional Features

- [x] Flip animation between front and back of the flashcard
- [x] Cards support images and category-based color styles
- [x] Responsive layout with clean spacing and mobile-friendly design

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Video Link: https://www.loom.com/share/67956baed2ea48c4abeca2dd29eecdcf?sid=6bfbfabd-a2f0-4a9a-b5eb-2d490a0e91f9

Video created with **Loom**

## Notes

- One challenge was centering the layout and making sure it worked cleanly across screen sizes.
- Fuzzy matching logic took careful string normalization to support punctuation and case-insensitive matches.
- Managing multiple state variables (index, guess, streaks, shuffled list) required clear resets on navigation/shuffle to prevent bugs.

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
