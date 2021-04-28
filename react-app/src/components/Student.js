import { useEffect, useState } from 'react';
import { insert, update, read, remove } from '../services/apiService';
const Student = ({ match, history }) => {
    const [id] = useState(match.params.id);
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        address: '',
        yearOfBirth: 0
    });
    const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
    const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
    useEffect(() => {
        if (id !== '0') {
            read('students', id, data => {
                if (data) setStudent(data);
            })
        }
    }, [id]);
    function changeHandler(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }
    const back = () => {
        history.push('/students');
    }
    const save = () => {
        if (id === '0') {
            if (!student.firstName) {
                setIsFirstNameEmpty(true);
                return;
            }
            if (!student.lastName) {
                setIsLastNameEmpty(true);
                return;
            }
            insert('students', student, data => {
                if (data) return history.push('/students');
                console.log('There was error during save data');
            })
        } else {
            if (!student.firstName && !student.lastName) {
                setIsFirstNameEmpty(true);
                setIsLastNameEmpty(true);
                return;
            }
            if (!student.firstName) {
                setIsFirstNameEmpty(true);
                return;
            }
            if (!student.lastName) {
                setIsLastNameEmpty(true);
                return;
            }
            update('students', id, student, data => {
                if (data) return history.push('/students');
                console.log('There was error during save data');
            })
        }
    }
    const del = () => {
        remove('students', id, data => {
            history.push('/students');
        })
    }
    return (
        <div className='container'>
            <h2>Student</h2>
            <form className='input-form'>
                <div style={{ margin: '12px 0' }}>
                    <label htmlFor='firstName'>First name:</label>
                    <input type='text'
                        name='firstName' required
                        value={student.firstName}
                        onChange={changeHandler} />
                    {isFirstNameEmpty && <p className="error">This field is required</p>}
                </div>
                <div style={{ margin: '12px 0' }}>
                    <label htmlFor='lastName'>Last name:</label>
                    <input type='text'
                        name='lastName' required
                        value={student.lastName}
                        onChange={changeHandler} />
                    {isLastNameEmpty && <p className="error">This field is required</p>}
                </div>
                <div style={{ margin: '12px 0' }}>
                    <label htmlFor='yearOfBirth'>Year of Birth:</label>
                    <input type='text'
                        name='yearOfBirth'
                        value={student.yearOfBirth}
                        onChange={changeHandler} />
                </div>
                <div style={{ margin: '12px 0' }}>
                    <label htmlFor='address'>Address:</label>
                    <input type='text'
                        name='address'
                        value={student.address}
                        onChange={changeHandler} />
                </div>
                <hr />
                {id !== '0' && (
                    <div className='left'>
                        <button type='button' onClick={del}>DELETE</button>
                    </div>
                )}
                <div className='right'>
                    <button type='button' onClick={back}>BACK</button>
                &nbsp;&nbsp;
                <button type='button' onClick={save}>SAVE</button>
                </div>
            </form>
        </div>
    );
}
export default Student;