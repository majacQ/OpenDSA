/*global ODSA */
// Inseh1234 slideshow
$(document).ready(function() {
    "use strict";
    var av_name = "ProofofWork";
    var config = ODSA.UTILS.loadConfig({av_name: av_name}),
        interpret = config.interpreter;                   // get the code object
    var av = new JSAV(av_name);
  
    var graph = av.ds.graph({visible: true, nodegap: 15});
    graph.css({"font-size": "12px"});

    graph.layout();
  
    // Slide 1
    av.umsg(interpret("sc1"));

    //enter  code here

    av.displayInit();
  
    // Slide 2
    av.umsg(interpret("sc2"));
    

    av.step();

    // Slide 3
    av.umsg(interpret("sc3"));
   

    av.step();

    // Slide 4
    av.umsg(interpret("sc4"));
    
    av.step();
    
    // Slide 4
    av.umsg(interpret("sc5"));
    
    av.step();

    av.recorded();
  });
  