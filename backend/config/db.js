import pg from 'pg';

const { Pool } = pg;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'joyas',
    password: 'Dji3pro',
    allowExitOnIdle: true
});



export default pool;

try {
    await pool.query("SELECT NOW()");
    console.log('conectado a la base de datos de Wla');
} catch (error) {
    console.log('error al conectar con la base de datos de Wladi', error.message);
}
