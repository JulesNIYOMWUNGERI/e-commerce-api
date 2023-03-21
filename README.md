# Team-furebo-E-commerce-bn

[![atlp-rwanda](https://circleci.com/gh/atlp-rwanda/Team-furebo-E-commerce-bn.svg?style=svg)](https://app.circleci.com/pipelines/github/atlp-rwanda)



SHORT DESCRIPTION OF THIS BRANCH

This branch contains instructions for Integrating Coveralls code coverage service with CircleCI and express with sample mocha test


GitHub: 
Clone this repo to your machine

INSTALLATION:

To install the required dependencies, run the following command:

npm install express chai mocha chai-http dotenv --save npm install coverage coveralls mocha-lcov-reporter nyc --save-dev

or if you have already cloned the branch simply in your terminal type npm install when installation is complete you will have all required dependencies to get it run

if you want now you can Push it to your GitHub

Follow these steps to set up the project with CircleCI and Coveralls: connect it with circleci: https://circleci.com/ and coveralls: https://coveralls.io/

C. In coveralls Add your repo Sync Turn it on Go to detail Get repo_token

D. In Circleci Go to the project setting Environment Variables add variables use this as your key COVERALLS_SERVICE_NAME and remember the token from coveralls so use it as value. Add other valiable: COVERALLS_SERVICE_NAME and value use this circle-ci

If its green with a success message so go back to coveralls to your repo now you should seed the coverage

Resources CircleCI documentation: https://circleci.com/docs/

Coveralls documentation: https://docs.coveralls.io/

In case you prefer videos, here is one to start with on circleci https://www.youtube.com/watch?v=lMKDkS8uATc