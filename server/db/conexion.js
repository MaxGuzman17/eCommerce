const mysql = require('mysql2');

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'su pass',
    database: 'ecommerce'
});

// Conectar a MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('✔ Conexión a la base de datos exitosa');
});

module.exports = connection;
