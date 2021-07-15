import axios from "axios";
import {TrainingType} from './reducers/training-reducer';


const instance = axios.create({
	// baseURL: 'https://pacific-cliffs-94918.herokuapp.com/',
	headers: {
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	},
	withCredentials: true,
	baseURL: 'http://localhost:5000/'
});

export const api = {
	updateTrainings(trainings: TrainingType) {
		return instance.post('user', trainings).then(data => {
			console.log(data);
		});
	}
}