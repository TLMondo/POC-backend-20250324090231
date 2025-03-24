const express = require('express'); const app = express(); app.get('/', (req,res)=>res.send('Hello POC Backend!')); app.listen(3000);
