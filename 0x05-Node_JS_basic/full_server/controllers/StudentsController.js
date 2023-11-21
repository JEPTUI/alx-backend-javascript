import readDatabase from '../utils';

class StudentsController {
	static async getAllStudents(req, res) {
		try {
			const databasePath = req.app.locals.databasePath;
			const data = await readDatabase(databasePath);

			const response = ['This is the list of our students:'];
			Object.keys(data).sort((a, b) => a.localeCompare(b)).forEach((field) => {
				const studentsInField = data[field];
				response.push(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
			});

			res.status(200).send(response.join('\n'));
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	static async getAllStudentsByMajor(req, res) {
		try {
			const databasePath = req.app.locals.databasePath;
			const major = req.params.major.toUpperCase();

			if (major !== 'CS' && major !== 'SWE') {
				throw new Error('Major parameter must be CS or SWE');
			}

			const data = await readDatabase(databasePath);
			const studentsInMajor = data[major] || [];

			const response = [`List: ${studentsInMajor.join(', ')}`];
			res.status(200).send(response.join('\n'));
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

export default StudentsController;
