const bcryptjs = require('bcryptjs'); 

async function crypt() {
    const test = await bcryptjs.hash('08110811', 10)    
    console.log(test)
}
crypt()