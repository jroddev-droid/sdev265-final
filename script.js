const form = document.querySelector('#myForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!firstName.value) {
    alert('Please enter your first name.');
    firstName.focus();
  } else if (!lastName.value) {
    alert('Please enter your last name.');
    lastName.focus();
  } else if (!email.value) {
    alert('Please enter your email.');
    email.focus();
  } else if (!comment.value) {
    alert('Please enter your comment.');
    comment.focus();
  } else {
    form.submit();
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


