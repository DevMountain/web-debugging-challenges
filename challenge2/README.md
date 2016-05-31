# mini-birds-mongoose
## Objectives
The purpose of this project is to solidify your understanding of Mongoose as an ORM for MongoDB.  By the end of the project, you should know how to set up a Mongoose model and perform CRUD operations using that model.

We are going to recreate the bird-sighting API from yesterday. **Please save this project for tomorrow's mini-project.** Consumers (or, developers who use this API) will be able to:

 * Send requests to the API to report a bird sighting
 * Send requests to the API to retrieve bird sightings in a specific area, a specific species, or validated sightings
 * Send requests to change/edit/update a previously reported sighting
 * Send requests to delete/remove a previously reported sighting

We will need to set up our app, connect to MongoDB through Mongoose, create a Sighting model, and create API endpoints to interact with out Sighting data.

## Step 1: Setting Up

Initialize your Node app and install the following packages:
 * `express`
 * `body-parser`
 * `cors`
 * `mongoose`

Call express and set up your middleware.

Connect to your database via Mongoose.  This is where you will specify the name of your database in the URI used to connect to MongoDB.  If you need some guidance, take a look at their [documentation](http://mongoosejs.com/docs/guide.html).

Create a simple endpoint at '/' that responds with "hello" to test your setup.

**Breakpoint:** At this point, you should be able to start your app (`node server.js`) and see that your app is listening, and has no errors.  Your app should also be connected to your database, but we will test that functionality later on.

## Step 2: Create Sighting Model

In a separate file called 'Sighting.js' create a model for our Sighting data. Notice that more properties were added to the sighting.json file. The schema should:

 * Give all properties a data type
 * Make all _name_ inputs lowercase
 * Restrict the length of _order_ property to 20
 * Enumerate the possible values for _status_, make them lowercase
 * Ensure the _numberSeen_ is greater than 0
 * Set a default of false on _confirmed_
 * Require and Index properties where appropriate

**Consider** adding a hook to create and update an _updatedAt_ field


## Step 3: Create API

Create the following Express routes:

 * **POST** `/api/sighting`
 * **GET** `/api/sighting?region='some-region'&species='some-species'&validated=true`
 * **PUT** `/api/sighting?id='09evasd09jhahs9d8h9vh'`
 * **DELETE** `/api/sighting?id='09evasd09jhahs9d8h9vh'`

**Breakpoint:** You should be able to hit these endpoints without error.  To make sure they're actually running correctly, put `console.log` in your functions and hit those endpoints with POSTMan to see that they're running.  For the routes that take queries, `console.log` those queries and make sure you're getting them correctly.  We have not connected these routes to the database yet.  We will add that functionality in the next step.

## Step 4: Connect API to MongoDB

NOTE: I will refer to two different types of queries here.  If I say request query, I mean the query supplied from the front-end via the URL.  Otherwise, I mean a MongoDB query.

 - In your POST route handler, create a new document through the Sighting model.  If you are confused how the logic for this might look, take a look at the Mongoose docs on [models](http://mongoosejs.com/docs/models.html) for guidance. Send an appropriate response to the client (success, or error).

**Breakpoint:** You should be able to save data to your database now.  After posting one or two pieces of dummy data, check to see that that data now exists, using either the command line or a GUI like RoboMongo. If you can see data in your database, you will know that you are correctly connected to the database, and that it is saving correctly. Try posting data that will not pass our schema validations or needs to be lowercased to see what happens.

 - In your GET route handler, create a Mongoose query that will return sightings.  If there is a region specified in the request query, return only the sightings in that region.  If the request query specifies a species, return only the sightings of that species. If the request query specifies validated or non-validated sightings return only those requested.  If there are no request queries, return all of the sightings.

 - In the PUT route handler, update *x* document (where *x* is the id supplied by the request query) with the data provided in `req.body`.

 - In the DELETE route handler, delete *x* document where *x* is the id supplied by the request query.

**Breakpoint:** Test each of your endpoints with POSTMan and either the command line or RoboMongo to make sure everything is working as expected.

===========

You have just created created an API using Mongoose! With the modeling and schema capabilities of Mongoose you now have greater power as to what and how data is stored to your database. Don't get too power hungry, though... Absolute power corrupts, absolutely.
