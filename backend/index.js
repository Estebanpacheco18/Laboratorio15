const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productosRoutes');
const sequelize = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);

// Sincronización con la base de datos y arranque del servidor
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(3001, () => {
            console.log('Backend corriendo en http://localhost:3001');
        });
    })
    .catch(err => {
        console.error('Error al sincronizar base de datos:', err);
    });