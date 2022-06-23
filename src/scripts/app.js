// Import my plugins
import ieCheck from './components/_iecheck.js';
import hoHashLinks from './components/_hohashlinks.js';

// Import external plugins


document.addEventListener('DOMContentLoaded', function(){
  // Call my plugins
  ieCheck();
  hoHashLinks();

  // Call external plugins

  // Success notification
  console.log('%c app ready ', 'background: yellow; color: black')
});
