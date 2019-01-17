import $ from 'jquery'
import { FrontRouter } from './src/router.js'

var router = new FrontRouter();

router.route('blue', function() {
  document.body.style.backgroundColor = 'blue';
});

router.route('yellow', function() {
  document.body.style.backgroundColor = 'yellow';
});

router.route('red', function() {
  document.body.style.backgroundColor = 'red';
});

router.route('/', function() {
  document.body.style.backgroundColor = 'white';
});

$('.back').click(function(e) {
  router.back();
})
// $('.forward').click(function(e) {
//   router.forward();
// })