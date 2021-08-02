import axios from "axios";
import {TrainingType} from './reducers/training-reducer';
import {UserType} from './reducers/user-reducer';


const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:5000/'
});

export const api = {
	addTraining() {
		return instance.post('trainings').then(data => data);
	},
	updateTrainings(trainings: TrainingType) {
		return instance.post('trainings', trainings).then(data => {
			console.log(data);
		});
	},
	getTrainings() {
		return instance.get('trainings').then((data) => {
			const res = data.data;
			const rows = res.rows;
			return data.data
		});
	}
};