import React, { useState } from "react"
import "./Form.css";

 const Form = () => {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const validate = (values) => {

    }

    return (
        <div className="container">
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form onSubmit={handleSubmit}>
                <div className="styling-form">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                    </div>
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;