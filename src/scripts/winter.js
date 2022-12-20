//notes for myself because I dont even remember what have i eaten for breakfast

//this function checks whether or not its december then calls a shitload fo tiny little functions
window.onload = function() {
    var currentTime = new Date();  
    if (currentTime.getMonth() === 11) {
        consoleSnowman();
        injectStylesheet1('src/snowflake.css');
        injectStylesheet2('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css');
        injectScript();
    }
  };

//just a little fun detail this just reads a text file then logs it into the console on page load
  function consoleSnowman() {
      fetch('src/snowman.txt')
        .then(response => response.text())
        .then(contents => console.log(contents))
        .catch(error => console.error(error));
  }

//injects snowflake.css 
  function injectStylesheet1(url) {
    //create a new link element
    const linkElement = document.createElement('link');
    //set the links href attribute to the stylesheet url
    linkElement.setAttribute('href', url);
    // sets the links rel attribute to "stylesheet"
    linkElement.setAttribute('rel', 'stylesheet');
    //gets the head element
    const headElement = document.head;
    //append the link element to the head element
    headElement.appendChild(linkElement);
  }
//injects cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css using the same method as before
  function injectStylesheet2(url) {
    const linkElement = document.createElement('link');
    linkElement.setAttribute('href', url);
    linkElement.setAttribute('rel', 'stylesheet');
    const headElement = document.head;
    headElement.appendChild(linkElement);
  }
//this also an injecting function but this time it injects a script for the snowflakes
  function injectScript() {
    var script = document.createElement('script');
    script.type = 'module';
    script.src = 'src/scripts/snowflake.js';
    document.head.appendChild(script);
    
  }