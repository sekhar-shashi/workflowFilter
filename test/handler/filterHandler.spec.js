const { expect } = require('chai');
const { handleJson } = require('../../src/handlers/filterHandler');
const {arr} = require('../mock/filterRequestJSON');

describe('Filter Json Service endpoint', () => {
  describe('Post /', () => {
    it('filter input JSON and return with 2 result', (done) => {
      const res = handleJson(arr);
      expect(res).to.be.an('array');
      expect(res[0]).to.deep.equal({
        'concataddress': 'Level 6,146 Arthur Street,North Sydney,NSW,2060',
        'type': 'htv',
        'workflow': 'completed'
      });

      done();
    });
    it('filter input JSON and return with 2 result', (done) => {
      const res = handleJson(arr);
      expect(res).to.be.an('array');
      expect(res[1]).to.deep.equal({
        "concataddress": "360,Elizabeth St,Melbourne,VIC,3000",
        "type": "htv",
        "workflow": "completed"
      });

      done();
    });
  });
});
