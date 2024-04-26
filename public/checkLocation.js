// const axios = require("axios/dist/browser/axios.cjs");
// import axios from "axios";
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
let latitude;
let longitude;

function success(pos) {
  const crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
function submitForm() {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Update the form's input fields with the latitude and longitude
  document.querySelector('input[name="latitude"]').value = latitude;
  document.querySelector('input[name="longitude"]').value = longitude;

  // Submit the form programmatically
  document.getElementById("myForm").submit();
}

// function submitForm() {
//   var form = document.getElementById("myForm");
//   var formData = new FormData(form);
//   window.location.href = "/check";
//   axios
//     .post("http://localhost:3000/check", {
//       latitude: latitude,
//       longitude: longitude,
//     })
//     .then(function (response) {
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }
