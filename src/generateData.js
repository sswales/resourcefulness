const faker = require('faker');

const uuid = () => faker.random.number(999999999999999);
const language = () => faker.random.arrayElement(['FR', 'EN', 'PT']);
const sentence = () => faker.lorem.sentence();
const keyword = () => faker.hacker.adjective();
const snag = () => faker.hacker.verb();

module.exports = {
  uuid,
  language,
  sentence,
  keyword,
  snag,
}; 