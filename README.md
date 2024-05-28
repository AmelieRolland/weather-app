# Weather App
#### original project :

Check the current weather on any city on the planet. Switch between metric and imperial units.

![Alt img](https://images.ctfassets.net/zlsyc9paq6sa/3uBrJ07WSM40FpolgjInHY/7d886cb4187b52194bf9b63c183a1d3a/1627637330_x.gif)

## Features

1. Current local time and date

2. Temperatures and humidity

3. Wind speed and direction

5. Sunrise and sunset times

6. Error handling and loading info

7. Possibility to set the city from a config file

8. Clock integrated

## THE PROJECT

This is a project-test for a school I would really love to integrate. This was very challenging since I made it before my JS class, so basically I had to learn a lot of things by myself.

They asked me to change the api they were using (weathermeteo) and use openmeteo, with some new requests. This is the first time I worked with existing code, it was very interesting.

There is a big JS community on internet so I could find most solutions to my problematics.

Still, I integrate a real time clock, but I couldn't find a way to make it use the timezone... So, so far, apparently I can use it only in France (metropolitain) ; if I set a different city abroad it won't change the time. (I found out that when I use the data, the setInterval won't work as it should.) I will work on this.

> [!NOTE]
> **UPDATE** I finally found a way to add the timezone with a function! 🎉

I added a file, in Services, where I made a function to change the main image + description acording to the weather code.

Also, since I trained myself, maybe I used some methods, or functions that are not the most optimized; I'm sure I will learn more soon and change it when needed.



## Installation

I have forked this project then cloned it; I had some struggles about the node version,
and I had to use nvm so I can switch the node version (16 needed here).

## What I will do next

I would love to add some more features, changing decor when day or night for exemple, it could be really fun.
Plus definitely I will work on the optimization of all the functions and methods with maybe some librairies I will find!



## License

The project is under [MIT license](https://choosealicense.com/licenses/mit/).
