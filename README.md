# Simple Tic-Tac-Toe (WIP)

## MY SITE: https://cal1co.github.io/tic-tac-toe/


## About this project:
Completed as a project 0 for General Assembly class SEI-50

This project is a simple take on the classic "Tic-Tac-Toe" or "Naughts and Crosses" game everyone knows. Although many features were not implemented, and many bugs and design issues persisting, the final product is presentable and functional. 

## Notable features:
- The game functions as expected - making a connection of 3 x's or o's leads to a win. 
- Player colours and avatars are selectable.
- A score counter logs a players' score (throughout page refresh)
- A "PC" player which makes *somewhat* claculated moves
- A theme change to a nes/gameboy aesthetic <-- many issues here (see "wishlist and housekeeping")
- Meow


## Known bugs and unintended features:
- When all moves are played by the PC, a tie condition is not shown
- Some browsers display the avatar preview incorecctly (compared to Firefox)
- Meow button creates content below screen, forcing a downwards scroll.
- After font change, text is not displayed in center of board
- Hovering over a cell merely change the colour to white when mouseleave. This creates an issue with the alternate themes that don't have a white button as the original state. 
- Could not use jQuery (or most DOM functions) on the nes/gameboy theme. 
- After a last recent change, x's and o's aren't switching first move .__. 

## Wishlist and housekeeping: 
Many alternate themes have been prepared but not implemented. In order to display the nes/gameboy theme, many steps had to be taken, and issues with jQuery arose (see "Known bugs"). 4 more themes exist which sadly have not been utilised. 

Could not implement DVD garf or cat-walk. The svg file for garf had a display bug which will be fixed in the future. 

CSS is currently a mess. Grid display is uneven. Drop down select, and its values (colour and avatar select) are not aligned properly

Scaling for mobile is overly simple but functional. More options and ui features should be implemented. 

"PC" code can be far more simple. After I got it working, I didn't have the motivation to simplify it. Will do at a later date! ^-^

"Shape" options were scrapped for how many issues arose with UI. At least 4 other shapes should be available for players. 

I had a point-reward system that allowed users to spend "wins" to unlock the nes/gameboy theme. There weren't enough purchasable items to justify this feature. Could be fleshed out with more avatars, colours, themes, shapes, fonts, etc. 

Chosen avatars at one point could be used in place of x's and o's but this got too cluttered when combined with colors, shapes, and themes. Formatting issues also arose. 

Themes "bunny" and "neko" functioned the same and utilised the wordSoup function from week3's warmup. These themes were of a lesser scope of the nes/gameboy theme, but still had many features that I am disappointed I couldn't present. 

The previous winner could set their chosen colour as the page background (as a purchasable) but this caused too many visibility issues with the ui. Can be implemented given certain design changes.

First move preference currently works (and is still in the code) but has little utility. Unsure if this has any use. 

Very disappointed that I couldn't get the profile images working. Uploading them were easy but saving them to local storage was not. It is possible but the methods were beyond my understanding. 

Keys 1-9 should select cells 1-9. Arrow keys should allow a user to highlight a cell.

## Summary:
Overall, I suffered from having too many goals and not enough time to implement them without breaking something else. My output was adequate but lacks in presentation and functionality. A large portion of my time went into theme creation, the point system, player customisation and work into other features that didn't make it into the game. If that time went into the features that did make, the game would be more cohesive and enjoyable. I learnt a lot during this project, and will be able to use a lot of that in my future work.