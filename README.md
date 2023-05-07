# bilhop-assignment

For this assignment, the idea is to create a Node.js based application serving a Rövarspråket translator over a REST API.

You have complete freedom on how to design the service and how it works, as long as you follow the requirements below:

1. It should contain an API with the endpoints
   1. POST /translate/normal - expects a json body containing the text to be translated, should return a json body containing the translated text. You can define the schema;
   2. POST /translate/rovarsprak - similar implementation as above, doing the opposite translation
2. It should contain a UI using React.js to consume your API, make sure it's intuitive and good looking;
3. Make sure the code is scalable and production-ready;
4. Upload the code to Github;
5. Share the details with us for review and further discussion.