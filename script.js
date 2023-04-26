const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const successMessage = document.querySelector('.success');
const errorMessage = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!nameInput.value || !emailInput.value || !phoneInput.value || !messageInput.value) {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    // Here you can add your code to submit the form
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
    form.reset();
  }
});

nameInput.addEventListener('input', () => {
  if (!nameInput.value) {
    nameInput.setCustomValidity('Please enter your name.');
  } else {
    nameInput.setCustomValidity('');
  }
});

emailInput.addEventListener('input', () => {
  if (!emailInput.checkValidity()) {
    emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
    emailInput.setCustomValidity('');
  }
});

messageInput.addEventListener('input', () => {
  if (!messageInput.value) {
    messageInput.setCustomValidity('Please enter a message.');
  } else {
    messageInput.setCustomValidity('');
  }
});


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7684, lng: -86.1581},
    zoom: 7
  });

  var markers = [
    {lat: 39.1549901, lng: -86.4331172, title: 'Brown County Campground'},
    {lat: 38.7720104, lng: -85.4386566, title: 'Clifty Falls State Park'},
    {lat: 39.8799879, lng: -87.2348705, title: 'Turkey Run State Campground'},
    {lat: 39.8799973, lng: -87.2184102, title: 'Hardin Ridge Campground'}
  ];

  markers.forEach(function(marker) {
    new google.maps.Marker({
      position: {lat: marker.lat, lng: marker.lng},
      map: map,
      title: marker.title
    });
  });
}


