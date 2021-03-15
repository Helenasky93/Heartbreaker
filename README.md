# Heartbreaker

[Link to live website](https://helenasky93.github.io/Heartbreaker/)

## The thought process behind the project

for this project I wanted to tackle sharpening my Javascript skills by creating a simple game, and I chose to make my own version of one of the first mobile games I played on my phone... Fruit Ninja. I really like this game because of how simple and straightforward it is, while still being super fun and visually pleasing.

It was somewhat intimidating to start working on it, since I had no notion of how to have different shapes and moving objects on an app, and after doing some research I sumbled upon the P5.js library, which has a very user friendly website where you can learn all about using Javascript as a designer or artist, focusing more on the creative/artistic side of web developing.

Some of the struggles that I faced while working on it where related to the logic I had to implement in order to make the different moving parts work well together and do what they are supposed to do. I had to learn a lot about the algorithmic work that goes into creating an animation and that took some time for me to absorb and understand.

## Basic Functionality

The concept of the game is very simple, you use the pointer as a sword to break the hearts that pop up on the screen, these hearts are thrown from under and because of gravity they fall down eventually(the algorithmic work behind that was pretty complex and took a while for me to wrap my head around.) and whenever you miss a heart you lose 1 of 3 lives, which are displayed at the top right of the screen. On the other hand you also have "bad hearts" which are bright red and have a very clear black outline, if you hit one of those or you miss breaking 3 of the regular hearts, you lose the game.

![alt text](https://github.com/Helenasky93/Heartbreaker/blob/master/demo_1.png)
![alt text](https://github.com/Helenasky93/Heartbreaker/blob/master/demo_2.png)

One of the biggest challenges I faced while working on the game was figuring out the physics of the heart movement. Creating a variable that represents gravity as well as determining the direction in which the fruit travels depending on what half of the screen it is drawn in from was tricky, I had to make sure that every heart that was thrown into the game had a random starting postition, the velocity was also random as it is the color of it. Fortunately p5.js has the very helpful method noise() which "Returns the Perlin noise value at specified coordinates. Perlin noise is a random sequence generator producing a more naturally ordered, harmonic succession of numbers compared to the standard random() function." The use of this method allowed me to control the "randomness" of the different elements so that It didn't become overly chaotic.

```javascript
randomHeart() {
        var x = random(width);
        var y = height;
        var size = noise(frameCount) * 20 + 20;
        var bad = (random() > BAD_HEART_PROBABILITY);
        var r = (bad) ? 225 : 255;
        var g = (bad) ? 0 : noise(frameCount * 2) * 255;
        var b = (bad) ? 0 : noise(frameCount * 3) * 255;
        var col = color(r,g,b);
        
        return new Heart(x,y,size,col,bad);
    }
 ```







