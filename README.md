# Books Manager (AngularJS edition)

This is a work in progress :-).
The main goal of this project is to port the 'old' ExtJS Books Manager app to using AngularJS. And have a lot of fun doing just that.

#Maven dependency tree :date: 2016.02.12
 
 --- maven-dependency-plugin:2.10:tree (default-cli) @ booksManager ---   
 com.popa.books:booksManager:war:1.0-SNAPSHOT  
 +- commons-lang:commons-lang:jar:2.4:compile  
 +- commons-io:commons-io:jar:2.4:compile  
 +- org.springframework.boot:spring-boot-autoconfigure:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- org.springframework.boot:spring-boot:jar:1.3.1.RELEASE:compile  
 +- org.springframework.boot:spring-boot-starter-data-jpa:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework.boot:spring-boot-starter:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework.boot:spring-boot-starter-logging:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;+- ch.qos.logback:logback-classic:jar:1.1.3:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- ch.qos.logback:logback-core:jar:1.1.3:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;+- org.slf4j:jul-to-slf4j:jar:1.7.13:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.slf4j:log4j-over-slf4j:jar:1.7.13:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.yaml:snakeyaml:jar:1.16:runtime  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework.boot:spring-boot-starter-aop:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.aspectj:aspectjweaver:jar:1.8.7:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework.boot:spring-boot-starter-jdbc:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;+- org.apache.tomcat:tomcat-jdbc:jar:8.0.30:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.apache.tomcat:tomcat-juli:jar:8.0.30:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.springframework:spring-jdbc:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- javax.transaction:javax.transaction-api:jar:1.2:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- org.springframework:spring-aspects:jar:4.2.4.RELEASE:compile  
 +- org.springframework.boot:spring-boot-starter-web:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework.boot:spring-boot-starter-validation:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.hibernate:hibernate-validator:jar:5.2.2.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;   +- javax.validation:validation-api:jar:1.1.0.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;   \- com.fasterxml:classmate:jar:1.1.0:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- com.fasterxml.jackson.core:jackson-databind:jar:2.6.4:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;+- com.fasterxml.jackson.core:jackson-annotations:jar:2.6.4:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- com.fasterxml.jackson.core:jackson-core:jar:2.6.4:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework:spring-web:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- org.springframework:spring-webmvc:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;   \- org.springframework:spring-expression:jar:4.2.4.RELEASE:compile  
 +- org.springframework.boot:spring-boot-starter-tomcat:jar:1.3.1.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.apache.tomcat.embed:tomcat-embed-core:jar:8.0.30:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.apache.tomcat.embed:tomcat-embed-el:jar:8.0.30:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.apache.tomcat.embed:tomcat-embed-logging-juli:jar:8.0.30:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- org.apache.tomcat.embed:tomcat-embed-websocket:jar:8.0.30:compile  
 +- org.springframework.boot:spring-boot-starter-test:jar:1.3.1.RELEASE:test  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- junit:junit:jar:4.12:test  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.mockito:mockito-core:jar:1.10.19:test  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.objenesis:objenesis:jar:2.1:test  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.hamcrest:hamcrest-core:jar:1.3:test  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.hamcrest:hamcrest-library:jar:1.3:test  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework:spring-core:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- org.springframework:spring-test:jar:4.2.4.RELEASE:test  
 +- mysql:mysql-connector-java:jar:5.1.38:compile  
 +- org.hibernate:hibernate-entitymanager:jar:4.3.11.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.jboss.logging:jboss-logging:jar:3.3.0.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.jboss.logging:jboss-logging-annotations:jar:1.2.0.Beta1:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.hibernate:hibernate-core:jar:4.3.11.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;+- antlr:antlr:jar:2.7.7:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- org.jboss:jandex:jar:1.1.0.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- dom4j:dom4j:jar:1.6.1:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- xml-apis:xml-apis:jar:1.0.b2:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.hibernate.common:hibernate-commons-annotations:jar:4.0.5.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.hibernate.javax.persistence:hibernate-jpa-2.1-api:jar:1.0.0.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.jboss.spec.javax.transaction:jboss-transaction-api_1.2_spec:jar:1.0.0.Final:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- org.javassist:javassist:jar:3.18.1-GA:compile  
 +- org.springframework.data:spring-data-jpa:jar:1.9.2.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework.data:spring-data-commons:jar:1.11.2.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework:spring-orm:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework:spring-context:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework:spring-aop:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\- aopalliance:aopalliance:jar:1.0:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework:spring-tx:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.springframework:spring-beans:jar:4.2.4.RELEASE:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.aspectj:aspectjrt:jar:1.8.7:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;+- org.slf4j:slf4j-api:jar:1.7.13:compile  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- org.slf4j:jcl-over-slf4j:jar:1.7.13:compile  
 +- com.google.code.gson:gson:jar:2.3.1:compile  
 +- commons-codec:commons-codec:jar:1.9:compile  
 +- com.jayway.jsonpath:json-path-assert:jar:2.1.0:test  
 |&nbsp;&nbsp;&nbsp;&nbsp;\- com.jayway.jsonpath:json-path:jar:2.0.0:test  
 \- net.minidev:json-smart:jar:2.2:test  
    \- net.minidev:accessors-smart:jar:1.1:test  
       \- org.ow2.asm:asm:jar:5.0.3:test  
 
 How to generate maven dependency
 <ol>
    <li> Export the deps to a txt file:  
        &nbsp;&nbsp;``mvn dependency:tree -Doutput=mvn-deps.txt`` </li>
    <li> Replace ``'|  '`` with ``'|&nbsp;&nbsp;&nbsp;&nbsp;'`` in this file</li>
    <li> Add two spaces at the end of each line:  
    &nbsp;&nbsp;``awk '{print $0, "  "}' mvn-deps.txt``
    </li>
    <li> Copy the terminal content to this .md file</li>
 <ol>