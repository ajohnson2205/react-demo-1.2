This repo will cover React and how to pull in data from an external API

Topics covered

1. How the web works / JSON (JavaScript Object Notation)
2. Client Server Model
3. Web URLs - contains protocol (HTTPS), domain name, the files we want served up, query and parameters
4. Including JavaScript in your HTML using a script tag - link to JavaScript tags using src attribute or bring in external javascript files
5. Since JavaScript is async, we have put script tags at bottom. HTML5 included async and defer for the script tags
6. fallback of async -- will guarantee that your javascript files load after you html, but not in what order they load
7. defer will load javascript files in order
8. React HTTP Requests - componentDidMount (React lifecycle methods) - Will wait to carry out any functions inside until the component has finished mounting - Fires once
9. If you are trying to setState using componentDidMount, you must make sure that the property exists and is not initialized in componentDidMount
