const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const medicamentoRoutes = require('./routes/medicamentoRoutes');
const especialidadRoutes = require('./routes/especialidadRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/medicamentos', medicamentoRoutes);
app.use('/api/especialidades', especialidadRoutes);

sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Servidor backend en http://localhost:3001');
    });
});