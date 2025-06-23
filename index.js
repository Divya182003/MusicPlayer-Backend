import express from 'express';
// import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);


app.use(cors()); // Allow frontend access
app.use('/song',express.static(path.join(_dirname,'Musics'))); // Serve static files from Musics/


app.listen(9000, () => {
  console.log("Server is running at http://localhost:9000");
});