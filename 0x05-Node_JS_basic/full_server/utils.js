import { readFile } from 'fs/promises';

const readDatabase = async (filePath) => {
	try {
		const data = await readFile(filePath, 'utf8');
		const students = data.split('\n').map((line) => line.split(',')[0]);
		return { all: students };
	} catch (error) {
		throw new Error('Cannot load the database');
	}
};

export default readDatabase;
