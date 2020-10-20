# rootine-api-test

## Requirements

- Node.js

## Install

- Run `git clone https://github.com/MagRelo/rootine-api-test.git` to download code
- Run `npm install` to install dependencies

## Run Tests
- Run `npm test` to run all tests
- Run `npx mocha -r esm -g '<some-pattern>'` to run tests that match the pattern

## Curent Status

```

 Blood Micronutrient
    Get Blood Micronutrient - POST
      - Request Succeeds

  DNA Micronutrient
    Get DNA Micronutrient - POST
      - Request Succeeds

  Lifestyle Micronutrient
    Get Lifestyle Micronutrient - POST
      - Request Succeeds

  Skin Health
    Get Skin Health - POST
      - Request Succeeds

  User Submit
    Wrong HTTP method - GET
      1) returns a 405 error
    Wrong HTTP method - PUT
      ✓ returns a 405 error (190ms)
    Wrong HTTP method - DELETE
      ✓ returns a 405 error (188ms)
    No Authentication
      2) returns a 401 error
    Empty body
      3) returns a 400 error
    Create User - No DNA
      ✓ returns a 201 (2547ms)
    Create User - No Blood
      ✓ returns a 201 (3086ms)
    Create User - No Question
      ✓ returns a 201 (212ms)
    Create Fresh User
      4) returns a 201
    Create Duplicate User
      5) returns a 409 error

  User Get
    Get Existing User
      ✓ returns user data (4754ms)


  6 passing (19s)
  4 pending
  5 failing
  
  ```
