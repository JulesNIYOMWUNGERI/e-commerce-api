#### What does this PR do?
Integrate Coveralls code coverage service

#### Description of Task to be completed?

-  Sign up for a Coveralls account and generate an API key. https://coveralls.io/ 

-  Install the necessary NPM packages for code coverage. 
   npm install --save express nyc coveralls
   npm install --save-dev mocha chai 

- Sign up for a ciclici account and give coveralls API key environment variable. https://circleci.com/

- Set up your Node.js/Express application

- Configure CircleCI to run your tests and generate code coverage reports

- Add some sample tests using mocha and chai 

- configure .circleci/config.yml to upload the code coverage report to Coveralls using the generated API key 
- Verify that the code coverage report is being sent to Coveralls correctly and that you can view the coverage results on the Coveralls dashboard.

#### How should this be manually tested?
- Clone, 
- Navigate to the project 
- In the terminal type: npm install to install the required dependencies.
- for test coverage: npm run test

by running 'npm run test' you can see the coverage

#### What are the relevant pivotal tracker/Trello stories?
#184651324


