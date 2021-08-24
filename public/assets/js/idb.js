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

// upon a successful connection
request.onsuccess = function(event) {
    // when db is succesfully created with its object store (from onupgraded event above) or simply established a connection, save reference to db in global variable
    db = event.target.resultl;

    // check if app is online, if yes run uploadPizza() function to send all local db data to api
    if (navigator.onLine) {
        // uploadPizza();
    }
};

request.onerror = function(event) {
    // log error here 
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    // open a new transaction with the database with read and write permissions
    const transaction = db.transaction(['new_pizza'], 'readwrite');

    // access object store for `new_pizza`
    const pizzaObjectStore = transaction.objectStore('new_pizza');

    // add record to your store with add method
    pizzaObjectStore.add(record);
}