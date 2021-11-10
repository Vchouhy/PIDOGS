/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  id: "28a4b91d-ad04-4677-8e9f-17c31ddc0c4f",
  name: "atilio",
  minheight: "12",
  maxheight: "15",
  minweight: "15",
  maxweight: "18",
  image: 'https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg',
  temperament: ["Playful", "Resposive"]
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/api/dogs').expect(200)
    );
  });

  describe('GET /dogs/:id', () => {
    it('should get 200', () =>
      agent.get('/api/dogs/28a4b91d-ad04-4677-8e9f-17c31ddc0c4f').expect(200)
    );
  });

});
