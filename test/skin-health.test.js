var assert = require('assert');
const { callApi } = require('../test/testData/params');

const { generateUser } = require('./testData/generateUser');

export const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdGFzcXVhcmVfdGVzdEBnbWFpbC5jb20iLCJpZCI6MSwibmFtZSI6Im5vdGFzcXVhcmUifQ.H2WyocLxMt84ponJ5Xg0nbZ2QScrjAH4F5QQy7Z_LBU';
const method = 'POST';
const endpoint = 'partner_api/product/skinhealth';

describe('Skin Health', async function () {
  describe('Get Skin Health - POST', function () {
    it(
      'Request Succeeds'

      // async function () {
      //   const fakerUser = generateUser({
      //     partnerCode: 'AB1235',
      //     partnerEmail: 'jim@aol.com',
      //     includeBlood: false,
      //     includeQuestionnaire: false,
      //   });

      //   const response = await callApi({
      //     method: 'POST',
      //     endpoint: endpoint,
      //     body: fakerUser,
      //     token: authToken,
      //   });

      //   console.log(response);

      //   assert.strictEqual(response.statusCode, 200, 'Request Failed');
      // }
    );
  });

  // End Skin Health tests
});
