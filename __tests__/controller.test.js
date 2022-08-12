const request = require("supertest");
const {faker} = require('@faker-js/faker');
const app = require('../src/fseasonapp')

test('auth.controller.js | /api/login', async ()=>{
    const res = await request(app)
        .post('/api/login')
        .send({
            email:'hyuckry@gmail.com',
            password:'password'
        })
    expect(res.statusCode).toEqual(400)

    const res2 = await request(app)
        .post('/api/login')
        .send({
            email: 'hyuckry@gmail.com',
            password: '08110811'
        })
    expect(res2.statusCode).toEqual(200)
})


test('auth.controller.js | /api/register', async () => {
    const pass = faker.internet.password()
    const body = {
        name: faker.name.lastName(),
        email: faker.internet.email(),
        password: pass,
        password_confirm : pass,
        role_id: 1
    }
    console.log(body);
    const res = await request(app)
        .post('/api/register')
        .send(body)
    console.log(res.body)
    expect(res.statusCode).toEqual(400)

})
