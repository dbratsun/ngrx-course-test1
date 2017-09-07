import * as express from 'express';
import { Application } from 'express';
import { apiGetApplicationRoles } from "./api/apiGetApplicationRoles";
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

apiGetApplicationRoles(app);

app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
