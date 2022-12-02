import { useEffect, useState } from "react";
import './reg.css';
import Validation from "./validation";

function Register() {
    const [values, setValues] = useState({ fname: "", lname: "", email: "" });
    const [errors, setErrors] = useState({});

    const handleChnage = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const [isSubmit, setSubmit] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
        setSubmit(true)
    }
    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(values);
        }
    }, [errors])
    return (
        <div className="reg-container">
            <div className="in-con">
                {Object.keys(errors).length === 0 && isSubmit ? (
                    <div className="success"><h4>Registraion completed..!</h4></div>
                ) : <div className="success"></div>}
                <form>
                    <input type="text" placeholder="First Name" name="fname" value={values.fname} onChange={handleChnage} required ></input>
                    {errors.fname && <p className="error">{errors.fname}</p>}
                    <input type="text" placeholder="Last Name" name="lname" value={values.lname} onChange={handleChnage} required ></input>
                    {errors.lname && <p className="error">{errors.lname}</p>}
                    <input type="email" placeholder="Email ID" name="email" value={values.email} onChange={handleChnage} required ></input>
                    {errors.email && <p className="error">{errors.email}</p>}
                    <button onClick={handleSubmit} type="sumbit">Register</button>
                </form>
            </div>

        </div>
    )
}
export default Register;