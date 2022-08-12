const request = require("supertest");
const app = require("../src/fseasonapp")

describe('first', () => {
 
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(302);
    });

    test('등록된 User Login Test', async () => {
        const response = await request(app)
            .post("/login")
            .send({
                email: 'hyuckry@gmail.com',
                password: 'testpass'
            }) 

        //console.log(res.body)
        //expect(res.message).toEqual({ message:'invalid credentials!'});

        expect(response.statusCode).toEqual(404)
    })

})