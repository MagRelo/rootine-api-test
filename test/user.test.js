var assert = require('assert');

const { callApi } = require('../test/testData/params');

const { generateUser } = require('./testData/generateUser');

export const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdGFzcXVhcmVfdGVzdEBnbWFpbC5jb20iLCJpZCI6MSwibmFtZSI6Im5vdGFzcXVhcmUifQ.H2WyocLxMt84ponJ5Xg0nbZ2QScrjAH4F5QQy7Z_LBU';

const method = 'POST';
const endpoint = 'partner_api/user/submit';

// Submit User
describe('User Submit', async function () {
  describe('Wrong Protocol - HTTPS', function () {
    it('returns a 302', async function () {
      const response = await callApi({
        method: 'GET',
        endpoint: endpoint,
        body: null,
        token: authToken,
        protocol: 'http',
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        302,
        'does not return a redirect (302)'
      );
    });
  });

  describe('Wrong HTTP method - GET', function () {
    it('returns a 405', async function () {
      const response = await callApi({
        method: 'GET',
        endpoint: endpoint,
        body: null,
        token: authToken,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        405,
        'does not return client error - not found (405)'
      );
    });
  });

  describe('Wrong HTTP method - PUT', function () {
    it('returns a 405 error', async function () {
      const response = await callApi({
        method: 'PUT',
        endpoint: endpoint,
        body: null,

        token: authToken,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        405,
        'does not return client error - not found (405). Response:' +
          JSON.stringify(response)
      );
    });
  });

  describe('Wrong HTTP method - DELETE', function () {
    it('returns a 405 error', async function () {
      const response = await callApi({
        method: 'DELETE',
        endpoint: endpoint,
        body: null,

        token: authToken,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        405,
        'does not return client error - not found (405). Response:' +
          JSON.stringify(response)
      );
    });
  });

  describe('No Authentication', function () {
    it('returns a 401 error', async function () {
      const response = await callApi({
        method: 'POST',
        endpoint: endpoint,
        body: {},
        token: null,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        401,
        'does not return client error - unauthorized (401). Response:' +
          JSON.stringify(response)
      );
    });
  });

  describe('Empty body', function () {
    it('returns a 400 error', async function () {
      const response = await callApi({
        method: method,
        endpoint: endpoint,
        body: {},
        token: authToken,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        400,
        'does not return client error - (400). Response:' +
          JSON.stringify(response)
      );
    });
  });

  describe('Create User - No DNA', function () {
    it('returns a 201', async function () {
      // generate fake user
      const fakerUser = generateUser({
        partnerCode: 'AB1235',
        partnerEmail: 'jim@aol.com',
        includeDNA: false,
      });

      // cmon...
      this.timeout(5000);
      const response = await callApi({
        method: method,
        endpoint: endpoint,
        body: fakerUser,
        token: authToken,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        200, //change
        'does not return success - created code (201)' +
          JSON.stringify(response)
      );

      return true;
    });
  });

  describe('Create User - No Blood', function () {
    it('returns a 201', async function () {
      // generate fake user
      const fakerUser = generateUser({
        partnerCode: 'AB1235',
        partnerEmail: 'jim@aol.com',
        includeBlood: false,
      });

      // cmon...
      this.timeout(5000);
      const response = await callApi({
        method: method,
        endpoint: endpoint,
        body: fakerUser,
        token: authToken,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        200, //change
        'does not return success - created code (201)' +
          JSON.stringify(response)
      );

      return true;
    });
  });

  describe('Create User - No Question', function () {
    it('returns a 201', async function () {
      // generate fake user
      const fakerUser = generateUser({
        partnerCode: 'AB1235',
        partnerEmail: 'jim@aol.com',
        includeQuestionnaire: false,
      });

      // cmon...
      this.timeout(5000);
      const response = await callApi({
        method: method,
        endpoint: endpoint,
        body: fakerUser,
        token: authToken,
      });

      assert.strictEqual(
        response.statusCode,
        201, //change
        'does not return success - created code (201)' +
          JSON.stringify(response)
      );

      return true;
    });
  });

  //
  // TODO - Input Validation - Check for each required feild
  //

  // Good Request
  describe('Create Fresh User', function () {
    it('returns a 201', async function () {
      // generate fake user
      const fakerUser = generateUser({
        partnerCode: 'AB1235',
        partnerEmail: 'jim@aol.com',
      });

      // cmon...
      this.timeout(5000);
      const response = await callApi({
        method: method,
        endpoint: endpoint,
        body: fakerUser,
        token: authToken,
      });

      // console.log(response);

      assert.strictEqual(
        response.statusCode,
        201,
        'does not return success - created code (201)' +
          JSON.stringify(response)
      );

      return true;
    });
  });

  describe('Create Duplicate User', function () {
    it('returns a 409 error', async function () {
      // generate fake user
      const fakerUser = generateUser({
        partnerCode: 'AB1235',
        partnerEmail: 'jim@aol.com',
      });

      this.timeout(10000);
      const firstResponse = await callApi({
        method: method,
        endpoint: endpoint,
        body: fakerUser,
        token: authToken,
      });

      // Check that first one was created
      assert.strictEqual(
        firstResponse.statusCode,
        200, //change me
        'does not return success - created code (201)' +
          JSON.stringify(firstResponse)
      );

      // console.log(response);

      const secondResponse = await callApi({
        method: method,
        endpoint: endpoint,
        body: fakerUser,
        token: authToken,
      });

      // Check that seond one was not - 409 response
      assert.strictEqual(
        secondResponse.statusCode,
        409,
        'does not return success - created code (409)' +
          JSON.stringify(secondResponse)
      );

      return true;
    });
  });
});

describe('User Get', async function () {
  describe('Get Existing User', function () {
    it('returns user data', async function () {
      // generate fake user
      const fakerUser = generateUser({
        partnerCode: 'AB1235',
        partnerEmail: 'jim@aol.com',
        includeBlood: false,
        // includeDNA: false,
        includeQuestionnaire: false,
      });

      this.timeout(10000);
      const firstResponse = await callApi({
        method: method,
        endpoint: endpoint,
        body: fakerUser,
        token: authToken,
      });

      console.log(fakerUser);
      console.log(firstResponse);

      // Check that first one was created
      assert.strictEqual(
        firstResponse.statusCode,
        200, //change me
        'does not return success - created code (201)' +
          JSON.stringify(firstResponse)
      );

      const userId = firstResponse.data.user_id;

      // do get
      const getResponse = await callApi({
        method: 'GET',
        endpoint: 'partner_api/user/get' + '?id=' + userId,
        body: null,
        token: authToken,
      });

      // console.dir(getResponse);
      // console.dir(getResponse.data.record.nutrients_result);
      // console.dir(getResponse.data.record.summary_result);

      // assert found
      assert.strictEqual(
        getResponse.statusCode,
        200,
        'does not return client error - not found (404)'
      );
    });
  });

  describe('Get User, No Params', function () {
    it('returns a 400', async function () {
      // do get
      const getResponse = await callApi({
        method: 'GET',
        endpoint: 'partner_api/user/get',
        body: null,
        token: authToken,
      });

      console.log(getResponse);

      // assert found
      assert.strictEqual(
        getResponse.statusCode,
        400,
        'does not return client error - bad input (400)'
      );
    });
  });

  describe('Get Non-Existant User', function () {
    it('returns a 404', async function () {
      // do get
      const getResponse = await callApi({
        method: 'GET',
        endpoint: 'partner_api/user/get' + '?id=' + '982739837928374293',
        body: null,
        token: authToken,
      });

      console.log(getResponse);

      // assert found
      assert.strictEqual(
        getResponse.statusCode,
        404,
        'does not return client error - bad input (400)'
      );
    });
  });
});
