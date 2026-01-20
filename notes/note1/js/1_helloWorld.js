// document.write("<h2>HELLO WORLD DYNAMIC</h2>"); 

// explanation: the use of document.write allows us to write directly to the HTML document from JavaScript. 
//In which effectively outputs anything within the parentheses to the browser. In addition to placing a script in the body of a document, you can also put it in the head section. The location of any JavaScript code, (i.e within the head or body tags) is the default location on the page where JavaScript will write to.


window.onload = setup
function setup(){
    console.log("running setup");
    document.write("HELLO WORLD AFTER LOAD IN FUNCTION");
}

//Well first lets introduce the Window interface: which represents a window containing a DOM document. In contrast, the document property points to the DOM document loaded in that window. Next: The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images... so... if we would like to incorporate a setup() like function in Vanilla JS. - we can assign a function to this load event.