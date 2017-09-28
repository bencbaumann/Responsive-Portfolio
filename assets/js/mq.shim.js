// media query event handler
var mediaQuery = ()=>{
    var s640 = 'screen and (max-width: 640px)';
    var s768 = 'screen and (max-width: 768px)';
    var s960 = 'screen and (max-width: 960px)';
    mqs640 = window.matchMedia(s640);
    mqs768 = window.matchMedia(s768);
    mqs960 = window.matchMedia(s960);
    
    if(mqs768.matches){
        const doc = document;
        const sidebar = doc.getElementById('sidebar');
        sidebar.remove();
        const contentEnd = doc.getElementById('contentEnd');
        const content = doc.getElementById('content');
        content.insertBefore(sidebar, contentEnd);
    }
    else {
        const doc = document;
        const sidebar = doc.getElementById('sidebar');
        sidebar.remove();
        const headerEnd = doc.getElementById('headerEnd');
        const header = doc.getElementsByTagName('header')[0];
        header.insertBefore(sidebar, headerEnd);
    }

    console.log("640: " + mqs640.matches);
    console.log("768: " + mqs768.matches);
    console.log("960: " + mqs960.matches);
};


  
  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      console.log("We got a match!");
    } else {
      // window width is less than 500px
      console.log("We don't got a match!");
    }
  
  }

 

  document.addEventListener("DOMContentLoaded", function(event) {
    
    window.addEventListener('resize', mediaQuery);






  });
var mq = function(query, callback, usePolyfill) {
var host = {};
var isMatchMediaSupported = !!(window && window.matchMedia) && !usePolyfill;
if(isMatchMediaSupported) {
    var res = window.matchMedia(query);
    callback.apply(host, [res.matches, res.media]);
    res.addListener(function(changed) {
        callback.apply(host, [changed.matches, changed.media]);
    });
} else {
    // ... polyfill
}
}

