
function Validation(values) {
    let errors = {}

    if (!values.fname)
        errors.fname = "First Name Required"
    if (!values.lname)
        errors.lname = "Last Name Required"
    if (!values.email)
        errors.email = "Email Required"
    else if (!/\S+@\S+\.\S+/.test(values.email))
        errors.email = "Email is Invalid"

    return errors;
}
export default Validation;