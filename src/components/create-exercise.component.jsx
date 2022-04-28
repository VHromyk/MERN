import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import '../app.css'

const CreateExercises = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('Create!')
        axios.get('http://localhost:5000/users')
            .then(res => {
                if (res.data.data.length > 0) {
                    setUsers(res.data.data)
                }
            })
    }, [])


    console.log('!!!!!!', users)

    const onChangeHandler = (event) => {
        setUsername(event.currentTarget.value);
    }

    const onChangeDescription = (event) => {
        setDescription(event.currentTarget.value);
    };

     const onChangeDuration = (event) => {
         setDuration(event.currentTarget.value);
    };

      const onChangeDate = (date) => {
         setDate(date);
    };


    const prettyName = (name) => {
        const formatName = name[0].toUpperCase() + name.slice(1);
        return formatName;
    }
    


    const onSubmitForm = (event) => {
        event.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date,
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise).then(res => console.log(res.data));

        setTimeout(() => {
            window.location = '/';
        }, 1000)
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label className="label">Username:</label>
                    <input
                        className="form-control"
                        required
                        value={username}
                        onChange={onChangeHandler}
                        placeholder="Write username..."
                    ></input>
                    <label className="label">Description:</label>
                    <input
                        className="form-control"
                        required
                        value={description}
                        onChange={onChangeDescription}
                        placeholder="Write description..."
                    ></input>
                    <label className="label">Duration:</label>
                    <input
                        className="form-control"
                        required
                        value={duration}
                        onChange={onChangeDuration}
                    ></input>
                    <label className="label">Date:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => onChangeDate(date)}
                    ></DatePicker>
                    <input
                        type="submit"
                        value="Create exercise"
                        className="btn btn-lg btn-primary form-button"
                    >
                </input>
                </div>
            </form>
            <ul>
                {users.map((el) => (
                    <li key={el.username}>{prettyName(el.username)}</li>
                ))}
            </ul>
        </div>
    );
};

export default CreateExercises;
