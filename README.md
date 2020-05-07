# NPM chat API
A final year project with the accompanying dissertation.
## Overview
This repository contains an API which allows the user to implement a chat functionality into a Node.js application. It was designed primarily with Angular and Ionic applications in mind however it will execute in any Node.js environment. Secondary to the API is some infrastructure which enables the API to function.
* Spring boot chat server - for relaying the messages
* [Flask password server](http://46.101.229.154:5000/) - for generating passwords for users of the API
* [Angular chat application](http://46.101.229.154:4200/) - A live application that uses the API

This readMe is for detailing the repositories constituient parts at a high level. A full breakdown of how the system was designed and implemented can be found [here](https://github.com/cormacmchale/npmChatApi/blob/master/dissertation.pdf).

## Repository
A description of everything on the Repository with links to the [issues](https://github.com/cormacmchale/npmChatApi/issues) related to each one.

### [References](https://github.com/cormacmchale/npmChatApi/tree/master/References)
Informal documentation kept throughout the project. A list of helpful tutorials and resources.

### ScreenCastParts
These are the raw parts of the tutorial before being edited together.

### [ChatGUI](http://46.101.229.154:4200/)
Source code for a live angular application hosted with the same docker network as the servers. This was built to display the API functioning in a real-world application.
Please see:  
* [Creating the basic Web App test envoirnment](https://github.com/cormacmchale/npmChatApi/issues/1)

### chatserverproject
Source code for the Spring Boot server which works as the chat server in the system.
Please see:
* [Support for chrome](https://github.com/cormacmchale/npmChatApi/issues/8)
* [Choosing and configuring Database](https://github.com/cormacmchale/npmChatApi/issues/6)
* [Setting up the server](https://github.com/cormacmchale/npmChatApi/issues/4)



## Screencast
I made the [video](https://www.youtube.com/watch?v=C0Kdf5i-mOA) in the style of a tutorial for someone looking to setup an angular chat application using this API, as such the video is quite long. I have provided timestamps below of the more significant parts.

### **IMPORTANT SECTIONS**
 * 0:00 - 1:18: Introduction
 * 21:26 - 32:51: Downloading, installing and using the API
 
### **Live examples**
The following section is showing an [Angular](http://46.101.229.154:4200/) application I built for displaying the functionality of the app followed by an excerpt of the screencast from the [WeQuitGP](https://github.com/DigitalMediaGP/WeQuitGP-master) team that used the API in their ionic application. This shows the chat functionality working in their application.
 * 32.55: -end of video: 
 
 ## Published Resources
 * [NPM](https://www.npmjs.com/settings/cormacmchale/packages) - NPM packages published while building the chat API
 * [DockerHub](https://hub.docker.com/u/cormacmchale) - Docker Images published while developing the infrastructure 
