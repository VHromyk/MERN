import { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);


    const removeExercise = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`).then((res) => console.log(res.data));

        setExercises(exercises.filter(el => el._id !== id))
    }

    useState(() => {
        axios.get('http://localhost:5000/exercises').then(res => {
            const { data } = res.data;
            if (data) {
                setExercises(data);
            }
        }).catch((error)=> console.log(error));
    }, [])

    return (
        <div>
            <h3>Logged Exercises</h3>
            {exercises.length > 0 && (
                <table className="table">
                    <thead className="thead-light">
                        <tr className='head-column'>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((exercise) => (
                            <tr key={exercise._id} className='head-column'>
                                <td>{exercise.username}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.duration}</td>
                                <td>{exercise.date}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-secondary edit-button"

                                    >
                                        Edit exercise
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={()=> removeExercise(exercise._id)}
                                    >
                                        Delete exercise
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ExercisesList;