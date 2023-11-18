import express from 'express'
import morgan from 'morgan';
import cors  from 'cors'
import {createRoles} from './libs/initialSetup.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
import fs from 'fs';

const app = express();
createRoles();
app.use(cors({origin: 'http://localhost:5173'}))
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json(
        {
            autor: "Gasparini",
            description: "",
            version: "1.0.0"
        }
    )
})


app.use('/api', authRoutes)
app.use('/api/users', userRoutes)

app.post('/upload', upload.single('file'), (req, res) => {
    try {
      const uploadedFile = req.file;
      const fileContent = fs.readFileSync(uploadedFile.path, 'utf-8');
      const jsonData = processTxtToJson(fileContent);
      console.log(jsonData);
  
      fs.unlinkSync(uploadedFile.path);
  
      res.status(200).json({ message: 'Archivo cargado y procesado correctamente', data: jsonData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al procesar el archivo' });
    }
  });
  
  function processTxtToJson(txtContent) {
    const rows = txtContent.trim().split('\n');
  
    const relevantData = rows.map(row => {
      const values = row.trim().split(/\s+/);
      return values.map(value => parseFloat(value)).filter(value => !isNaN(value));
    });
  
    const jsonData = relevantData.map(entry => {
      return {
        Time: entry[0],
        Pressure: entry[1],
        Temperature: entry[2],
        Depth: entry[3],
      };
    });
    
    return jsonData;
    
  }
  

export default app;

