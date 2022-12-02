import { useState } from 'react';
import './input.css';

function InputForm() {
   const intialvalues = { name: "", age: "", gender: "", occuption: "", iscool: false }
   const [formValues, setFormValues] = useState(intialvalues)

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormValues((State)=>({
            ...State, [name]:type==='checkbox'?checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (<>
        <div className='input_container'>
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label className='form-label'>Name</label><br/>
                    <input type="text" placeholder='Name' name='name' onChange={handleChange}></input>
                </div>
                <div className='form-field'>
                    <label className='form-label'>Age</label><br/>
                    <input type="number" placeholder='Age' name='age' onChange={handleChange}></input>
                </div>
                <div className='form-field'>
                    <label className='form-label'>Gender</label><br/>
                    <input type="radio" name='gender' onChange={handleChange} value='male' checked={formValues.gender === 'male'}></input>Male
                    <input type="radio" name='gender' onChange={handleChange} value='female' checked={formValues.gender === 'female'}></input>Female
                    <input type="radio" name='gender' onChange={handleChange} value='other' checked={formValues.gender === 'other'}></input>Other
                </div>
                <div className='form-field'>
                    <label className='form-label'>Occupation</label><br/>
                    <select onChange={handleChange} value={formValues.occuption} name='occupation'>
                        <option>-- Select --</option>
                        <option value="frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="full-stack">Full Stack</option>
                    </select>
                </div>
                <div className='form-field'>
                    <label className='form-label'>Are you cool?</label><br/>
                    <input type="checkbox" onChange={handleChange} value={formValues.iscool} name='iscool'></input>Of course i am cool
                </div>
                {/* <div className='form-field'>
                    <button>Submit</button>
                </div> */}
            </form>
        </div>
    </>)
}
export default InputForm;