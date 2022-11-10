import React, { useState } from "react"
import "./Form.css";

export default function Form() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState()
    return (
        <Register>
            <form>
                <div className="styling-form">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <button className="button">Submit</button>
                </div>
            </form>
        </Register>
    )
}