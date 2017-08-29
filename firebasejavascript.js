// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
  apiKey: "AIzaSyAGtuP7LAXe9OVVUkOREsygBUBbmXJxSfQ",
  authDomain: "fir-app-3cc85.firebaseapp.com",
  databaseURL: "https://fir-app-3cc85.firebaseio.com", 
  storageBucket: "fir-app-3cc85.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref("coordinates");

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var coord = myFirebase.child("coordinates");

console.log(coord);
// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
//recommendations.push({
///    "title": "The danger of a single story",
 //   "presenter": "Chimamanda Ngozi Adichie",
///    "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
///});