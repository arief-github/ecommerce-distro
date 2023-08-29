import {Form} from "./Form.jsx";
import {FormInput} from "../FormInput/FormInput.jsx";
import {useEffect, useState} from "react";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
import {Link} from "react-router-dom";

export const FormSignUp = ({onSubmit, onChange, initialValue = {}, signInWithGoogle}) => {
    const [formFields, setFormFields] = useState(initialValue);
    const [valid, setValid] = useState(true);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (onChange) {
            onChange(formFields, valid, errors)
        }
    }, [onChange, formFields, valid, errors])

    return (
        <Form
            value={formFields}
            onChange={setFormFields}
            onValid={(v, errs) => {
                setValid(v)
                setErrors(errs)
            }}
        >
            <FormInput
                name="displayName"
                type="text"
                label="Display Name"
                onValidate={ (v) =>  (v ? null : 'Required Field')}
            />
            <FormInput
                name="email"
                type="email"
                label="Email"
                onValidate={ (v) =>  (v ? null : 'Required Field')}
            />
            <FormInput
                name="password"
                type="password"
                label="Password"
                onValidate={(v) => (v ? null : 'Required Field')}
            />
            <FormInput
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                onValidate={(v) => (v ? null : 'Required Field')}
            />
            <div className="buttons">
                <CustomButton type="submit" centered onClick={() => onSubmit && onSubmit(formFields)} disabled={!valid}>Sign
                    Up</CustomButton>
            </div>
            Already have an account ? <Link to="/shop/signin">Sign In</Link>
        </Form>
    )
}