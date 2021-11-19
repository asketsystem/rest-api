# rest-api, Building a REST API with Node, Express and MongoDB.
#APIs are a very common thing nowadays. They are used literally everywhere on the website. APIs serve as the connection between the database which stores all the data and the frontend with which the user interacts with to get access to the data.

API mean Application Programming Interface which is a set of clearly defined methods of communication between the frontend and the database.

REST which stands for Representational State Transfer is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

REST APIs mostly use JSON as the preferred choice for transferring data as they are easy to understand and is readable.

In this tutorial, we will be using Node, Express and MongoDB to create a REST API which would support the four operations — GET, POST, PUT and DELETE.

So, let’s first discuss these four operations and try to understand what they actually mean in the context of API development.

GET — GET means to read the data. The function of this operation is to retrieve the data from the database and present it to the user.
POST — POST, as the name suggests, is used to post/add new data to the database. It allows users to add new data to the database.
PUT — PUT means to update the data already present in the database.
DELETE — It is used to delete any existing data from the database.
So, our REST API will perform all these four operations. We will use the Express package to make our work easier. We will use MongoDB as the NoSQL database to store all our data. MongoDB stores data in JSON format.

So, we will do it step by step. First, we would build the API endpoints and then we would connect to the database to perform actual operations. We would use Postman software for API testing.
