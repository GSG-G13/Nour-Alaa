/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
const {
  connection,
  postproductQuery,
  getDataQuery,
  Build } = require('../dataBase');

beforeEach(() => Build());
afterAll(() => connection.end());

describe('test the getData ', () => {
  test('should return Array of opject', (done) => {
    getDataQuery()
      .then((data) => {
        expect(Array.isArray(data.rows)).toBe(true);
        expect(typeof data.rows[0]).toBe('object');
        return done();
      // }).catch(throw new Error("sssssss"));
      }).catch((e) => done(e));
  });
});
describe('test the postData ', () => {
  // eslint-disable-next-line arrow-body-style
  test('should return Array of opject', () => {
    return postproductQuery({ title: 'kaled', description: 'test', img: 'test', price: 50, catogery_id: 1 })
      .then((data) => {
        expect(Array.isArray(data.rows)).toBe(true);
        expect(typeof data.rows[0]).toBe('object');
      });
  });
});
