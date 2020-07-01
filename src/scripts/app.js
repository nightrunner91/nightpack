// Import my plugins
import ieCheck from './plugins/_iecheck.js';
import hoHashLinks from './plugins/_hohashlinks.js';

// Import external plugins


document.addEventListener('DOMContentLoaded', function(){
  // Call my plugins
  ieCheck();
  hoHashLinks();

  // Call external plugins

  // Success notification
  console.log('%c app ready ', 'background: yellow; color: black')
});