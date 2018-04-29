# Books Manager (AngularJS edition)

The main goal of this project is to port the 'old' ExtJS [Books Manager](https://github.com/brontozaur/books-extjs-spring-boot.git) 
app to using AngularJS and separate the back-end from the frontend.

Requires [books_manager_backend](https://github.com/brontozaur/books_manager_backend.git) app to run on localhost:8080

 
Install the dependencies
 
        npm install
         
Other tools:  
  1. [Http-Server](https://github.com/nodeapps/http-server): a simple local static server  
  2. [Karma](https://github.com/karma-runner/karma): unit test runner  
  3. [Protractor](https://github.com/angular/protractor): end to end (E2E) test runner  
  4. [Jasmine](http://jasmine.github.io): framework used to write js tests  
  5. [Webpack](https://webpack.github.io/): optional. Fancy module bundler and http server    
  
Run the app:  
        
    npm run start-local => starts a local file server at http://localhost:3000 using webpack. Or this:
    
    npm start => starts a local file server at http://localhost:8000, using http-server library

    npm test => run unit tests (written in Jasmine, executed with Karma Test Runner)

    npm update => updates js deps according to versions from package.json file


To run end to end tests do:
  
      npm start
      npm run update-webdriver => downloads the latest standalone webdriver (Selenium)
      npm run protractor => runs the end to end tests