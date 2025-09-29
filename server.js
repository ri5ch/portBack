
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const aboutRoutes = require('./routes/about');
const expRoutes = require('./routes/experiences');
const eduRoutes = require('./routes/education');
const projRoutes = require('./routes/projects');

app.use('/api/about', aboutRoutes);
app.use('/api/experiences', expRoutes);
app.use('/api/education', eduRoutes);
app.use('/api/projects', projRoutes);

app.get('/', (req, res) => res.send('Servidor backend funcionando 🚀'));

const PORT = process.env.PORT || 4000;

// Intentamos conectar a MongoDB sin bloq el serv
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.warn('⚠️ No se pudo conectar a MongoDB (sigue funcionando sin DB). Error:', err.message))
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
    });
  });
