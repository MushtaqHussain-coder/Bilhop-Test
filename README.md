# bilhop-assignment

## Problem description

For this assignment, the idea is to create a Node.js based application serving a Rövarspråket translator over a REST API.

You have complete freedom on how to design the service and how it works, as long as you follow the requirements below:

1. It should contain an API with the endpoints
   1. POST /translate/normal - expects a json body containing the text to be translated, should return a json body containing the translated text. You can define the schema;
   2. POST /translate/rovarsprak - similar implementation as above, doing the opposite translation
2. It should contain a UI using React.js to consume your API, make sure it's intuitive and good looking;
3. Make sure the code is scalable and production-ready;
4. Upload the code to Github;
5. Share the details with us for review and further discussion.

## Summary

The project is devided into two parts, Server and client.

Server is a nodejs application that serves the APIs required.

Client is a simple application that simplates chat between two users. Client code is writtin in react. Vite is used for building and building code. Tailwind is used for the styling.

## Getting Started

To run the application, you will need to have Docker and Docker Compose installed on your machine.

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the root directory of the repository.
3. Copy `.env-example` as `.env`
4. Copy `client/.env-example` as `client/.env`
5. Copy `docker-compose.override-example.yml` as `docker-compose.override.yml`
6. Start the service by running `docker-compose up`
7. If all goes well, server will be running at http://localhost:3000/ and client at http://localhost:8000/

## Versions of APP

### Version 1

You can find a tag with version v1.0.0 which is simple version of the task. It fulfills all the requirements. If you would like to to check it out, please download the source code or use git to check the tag.

1. `git checkout tags/v1.0.0`
2. Follow [Getting started](#getting-started)

### Version 2

In version 2 I have:

- Added docker files and compose files
- Updated server code so that normal and rovarsprak APIs to accept an array of message instead of single message. This helps support both single text translations as well as mulitple.
- In client code, optimized API calls by send multiple translations in single call.
- Added validations
- Refactored code for good practices
- Enhanced UI
