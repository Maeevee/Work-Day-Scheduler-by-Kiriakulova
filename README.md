# Work-Day-Scheduler

## Description 
This is a JavaScript code for a daily planner application that allows users to plan their activities for the day. The code uses the moment.js library to display the current day and time and to change the color of the time blocks based on the current time. It also uses local storage to save and retrieve the user's activities: 
![](/assets/save-data-to-local-storage.gif)
As every tyme when you run the code the current day is setting to the local storage and when you reload it compare new data and data in local storage so the storage is clearing every day:
![](/assets/next-day-local-storage-clearing.gif)

## Installation
To use this application - open this [link](https://maeevee.github.io/Work-Day-Scheduler-by-Kiriakulova/) in a web browser.

## Usage 
Once the application is open, users can click on any time block to enter an activity for that hour. They can then click the save button to save the activity to local storage. The application will automatically display the saved activity the next time the user opens the page.
The time blocks will change color based on the current time of day, with past hours displayed in gray, the current hour displayed in red, and future hours displayed in green.
Users can also edit or delete their activities by clicking on the corresponding time block and making changes to the text.

## Credits
This application was created by [@Maeevee][def] using [Bootstrap](https://getbootstrap.com/), [Font Awesome](https://fontawesome.com/), [Google Fonts](https://fonts.google.com/), [jQuery](https://jquery.com/) and the [Moment.js](https://momentjs.com/) library, [ChatGPT](https://openai.com/blog/chatgpt/) and [Stack Overflow](https://stackoverflow.com/).

## License
This application is licensed under the MIT license.

[def]: https://github.com/Maeevee