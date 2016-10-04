# Books Manager (AngularJS edition)

The main goal of this project is to port the 'old' ExtJS [Books Manager](https://github.com/brontozaur/books-extjs-spring-boot.git) 
app to using AngularJ

#Two ways to import angularJS and js deps
<b>A. The maven way, using [webjars](http://www.webjars.org/) </b>  

<i>Step1</i>. Add deps like these in pom.xml:  
 
    <properties>
    ....
    <angularjs.version>1.5.0</angularjs.version>
    ....
    </properties>

    <dependencies>
    ...
     <dependency>
         <groupId>org.webjars</groupId>
         <artifactId>angularjs</artifactId>
         <version>${angularjs.version}</version>
     </dependency>
     ...
     <dependencies>
 
<i>Step2</i>. To be able to use this kind of imports (directly from jars), the following config must be done in your Spring config:
  
    @Component
    public class WebConfigurer extends WebMvcConfigurerAdapter {
        ...
    
        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
        ...
            if (!registry.hasMappingForPattern("/webjars/**")) {
                registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
            }
        ...
        }
    }
     
<i>Step3</i>. Import these files via index.html (or whatever html you have as application startpage) like:
 
        <link rel="stylesheet" href="webjars/bootstrap/3.3.6/css/bootstrap.css"/>
        <script src="webjars/angularjs/1.5.0/angular.js"></script>    
           
You can now install both [npm webjars](http://www.webjars.org/npm) and [bower webjars](http://www.webjars.org/bower).          
        
<b>B. The pure javascript way: using `Node.js`, `npm` and `bower`</b>
 
<i>Step1</i>. Install [Node.js](https://nodejs.org/en/download/). This contains `npm` (Node Package Manager). `npm` is used to 
        manage your application js dependencies, other than Angular code.  
<i>Step2</i>. Install Node.js dependencies:
 
        npm install
 
<i>Step3</i>. Install [bower](http://bower.io), the client side angular code manager.
 
        sudo npm install -g bower
        
Other tools:  
  1. [Http-Server](https://github.com/nodeapps/http-server): a simple local static server  
  2. [Karma](https://github.com/karma-runner/karma): unit test runner  
  3. [Protractor](https://github.com/angular/protractor): end to end (E2E) test runner  
  4. [Jasmine](http://jasmine.github.io): framework used to write js tests  
  
<i>Step4</i>. Based on your package.json (used by npm) and bower.json (used by bower) do:  
        
    npm install => to install js deps via the Node Package Manager (npm) on /node_modules. 
                   This also calls for:
                   
    bower install => install angular code via client-side code package manager
    
    npm start => starts a local file server at http://localhost:8000 .Call for a specific html to execute.

    npm test => run unit tests (written in Jasmine, executed with Karma Test Runner)

    npm update => updates js deps according to versions from package.json file
    bower update => update angular libs according to versions from bower.json
        
<i>Step5</i>. Use imports like these, in your start page html:
  
        
    <link rel="stylesheet" href="/app/bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/app/bower_components/angular-ui-grid/ui-grid.js">

    <script src="/app/bower_components/jquery/dist/jquery.js"></script>
    <script src="/app/bower_components/angular/angular.js"></script>
    <script src="/app/bower_components/angular-ui-grid/ui-grid.js"></script>

<i>Step6</i>. To run end to end tests do:
  
      npm start
      npm run update-webdriver => downloads the latest standalone webdriver (Selenium)
      npm run protractor => runs the end to end tests

# How to install angular code via bower

* Go to bower [site](http://bower.io/search/) and search for the dependency. (E.g. bootstrap)
* Add the dependency in the bower.json file:  

        "bootstrap": "3.3.6"  
        
It's a good question how to detect the file version at this step. This is yet unclear to me.  

* Execute:

        bower update
       
* Another way is to go to project page and check out installation instructions. E.g. for bootstrap:

        bower install bootstrap

* Add the new dependency js file to your index.html, karma.conf.js, etc, as needed.E.g.:

        <link rel="stylesheet" href="/app/bower_components/bootstrap/dist/css/bootstrap.css">
        
        'app/bower_components/bootstrap/dist/js/bootstrap.js'
            
