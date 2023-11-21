import express from 'express';
import routes from './routes';

const app = express();

// Set the databasePath as a local variable
app.locals.databasePath = process.argv[2] || 'database.csv';

// Use the defined routes
app.use('/', routes);

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;
