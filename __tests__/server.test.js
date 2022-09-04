const request =require('supertest');
const  {app} = require('../server') 


describe('Test Router and Value', function () {

  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello World !');
  });

  test('responds to /', async () => {
    const body= await request(app).post('/person')
    .send({
        name : 'hassan',
        age: "45",
        gender : 'female'
      });


    expect(body.statusCode).toBe(201);
    expect(body.request._data).toEqual({
        name : 'hassan',
        age: "45",
        gender : 'female'
      });
  });

});