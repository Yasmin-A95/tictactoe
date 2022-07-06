//this knows NOTHING about rules it simply connects the DOM to the rules in scripts.js

//lots of event handlers and all the dom manipulation 

//deploy every significant change
const render = function () {
    //this handy render function will update every single part of  DOM with the latest values from the board 

    // in render I'll use jQuery to grab parts of the dom ${likethis}
    // and update the display like this $
  $(document).ready(function () {
    //
    render();

    //i may need to call render in every single event handler in here
  });
};
