# NPM chat API
A final year project with the accompanying dissertation. The project itself is a JavaScript package stored on the NPM registry as 'finalwebchatclientjson'. The dissertation, screencast and issues section contain all of the relevant documentation on how the API was designed and the associated cloud infrasturcture was built. The purpose of the this readMe is to provide a brief synopsis of the overall project and point towards the revelent documentation for each part.

## Overview
This repository contains an [API](https://github.com/cormacmchale/npmChatApi/tree/master/npmPackages/FinalWebChatClient) which allows the user to implement a chat functionality into a Node.js application. It was designed primarily with Angular and Ionic applications in mind however it will execute in any Node.js environment. Secondary to the API is the infrastructure which enables the API to function.
* Spring boot chat server - for relaying the messages
* [Flask password server](http://46.101.229.154:5000/) - for generating passwords for users of the API
* [Angular chat application](http://46.101.229.154:4200/) - A live application that uses the API

The following detaila the repositories constituient parts at a high level. A full breakdown of how the system was designed and implemented can be found [here](https://github.com/cormacmchale/npmChatApi/blob/master/dissertation.pdf).

## Repository
A description of everything on the Repository with links to the [issues](https://github.com/cormacmchale/npmChatApi/issues) related to each one.

### [References](https://github.com/cormacmchale/npmChatApi/tree/master/References)
Informal documentation kept throughout the project. A list of helpful tutorials and resources.

### ScreenCastParts
These are the raw parts of the tutorial before being edited together.

### [ChatGUI](http://46.101.229.154:4200/)
Source code for a live angular application hosted with the same docker network as the servers. This was built to display the API functioning in a real-world application. This was developed on a partitioned Ubuntu Machine locally.
Please see:  
* [Creating the basic Web App test envoirnment](https://github.com/cormacmchale/npmChatApi/issues/1)

### chatserverproject
Source code for the Spring Boot server which works as the chat server in the system. This server accepts and manages web-socket connections from multiple clients. It work in conjunction with the flask server using a password system to distribute different users of the API into different channels of communication.
Please see:
* [Support for chrome](https://github.com/cormacmchale/npmChatApi/issues/8)
* [Choosing and configuring Database](https://github.com/cormacmchale/npmChatApi/issues/6)
* [Setting up the server](https://github.com/cormacmchale/npmChatApi/issues/4)
* [Server communication](https://github.com/cormacmchale/npmChatApi/issues/10)

### htmlQuickTesting
Some simple scripts to test how a broswer or client would interact with the chat server. This was at times more useful than hosting the angular web app on my local machine.

### npmPackages
Multiple pacakages I published while learning the workflow of building these libraries. The API was the focal point of the project.
* [Developing the web socket package properly](https://github.com/cormacmchale/npmChatApi/issues/3)
* [Designing and publishing an npm package](https://github.com/cormacmchale/npmChatApi/issues/2)
* [Structuring the npm package](https://github.com/cormacmchale/npmChatApi/issues/5)
* [add handling for Json to library ](https://github.com/cormacmchale/npmChatApi/issues/12)

### pythonPasswordServer
Source code of the server that generates and stores passwords specific to each user. When a user of the API follows the [tutorial](https://www.youtube.com/watch?v=C0Kdf5i-mOA) they are directed [here](http://46.101.229.154:5000/) to obtain a password that they will use to connect to the chat server. The chat server will communicate with this server to assert that this password was generated and will place every client with this password into the same channel of communication.

* [Server communication](https://github.com/cormacmchale/npmChatApi/issues/10)
* [Update python web page](https://github.com/cormacmchale/npmChatApi/issues/15)
* [Python password server](https://github.com/cormacmchale/npmChatApi/issues/9)

### dissertation.pdf
The accompanying [dissertation](https://github.com/cormacmchale/npmChatApi/blob/master/dissertation.pdf) required for the project. It contains a full and complete breakdown of the design and technologies of the project along with the processes and methodologies used.

## Screencast
I made the [screen](https://www.youtube.com/watch?v=C0Kdf5i-mOA) in the style of a tutorial for someone looking to setup an angular chat application using this API, as such the video is quite long. I have provided timestamps below of the more significant parts.

### **IMPORTANT SECTIONS**
 * 0:00 - 1:18  Introduction
 * 21:26 - 32:51  Downloading, installing and using the API
 
### **Live examples**
The following section is showing an [Angular](http://46.101.229.154:4200/) application I built for displaying the functionality of the app followed by an excerpt of the screencast from the [WeQuitGP](https://github.com/DigitalMediaGP/WeQuitGP-master) team that used the API in their ionic application. This shows the chat functionality working in their application.
 * 32.55 - end of video 
 
 ## Published Resources
 * [NPM](https://www.npmjs.com/settings/cormacmchale/packages) - NPM packages published while building the chat API
 * [DockerHub](https://hub.docker.com/u/cormacmchale) - Docker Images published while developing the infrastructure 
