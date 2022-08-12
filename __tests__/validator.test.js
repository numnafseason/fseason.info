const { loginValidator } = require("../src/validators/userValidator");

test('home page renders', () => {
    
    const ret = loginValidator({
        user:'test',
        password:''
    }) 
    expect(ret.error.details[0].type).toMatch(/string.empty/);

})