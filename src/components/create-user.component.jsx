import { useState } from 'react';
import axios from 'axios';


const CreateUser = () => {
    const [username, setUsername] = useState('');
    
     const onChangeUsername = (event) => {
         setUsername(event.currentTarget.value);
    };
    
      const onSubmitForm = (event) => {
        event.preventDefault();

        const user = {
            username,
          }
          
          axios.post('http://localhost:5000/users/add', user).then(res => console.log(res.data));

          setUsername('');
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label className='label'>Username: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create User"
                        className="btn btn-primary form-button"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
