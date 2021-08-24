// create a variable to hold db connection
let db;
// establish a connection to indexedDB.open('pizza_hunt', 1);
const request = indexedDB.open('pizza_hunt', 1);
// this event will emit if the database version changes (nonexistent to version 1, v1 to v2, etc)
request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    // create an object store (table) called `new.pizza`, set it to have an auto incrementing primary key of sorts
    db.createdObjectStore('new_pizza', { autoIncrement: true });

}