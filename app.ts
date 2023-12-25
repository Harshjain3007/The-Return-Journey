import express from 'express';
import logRequestMiddleware from './middleware/middleware'

const app = express();

app.use(logRequestMiddleware)

app.use(express.json());

import productroutes from './controllers/productcontroller';


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on PORT ${port}`);
});



app.use('/productroutes',productroutes)