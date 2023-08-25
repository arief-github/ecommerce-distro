import {Form} from "./Form.jsx";
import {FormInput} from "../FormInput/FormInput.jsx";
import {useEffect, useState} from "react";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
import {Link} from "react-router-dom";

export const FormSignIn = ({onSubmit, onChange, initialValue = {}}) => {
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
            <div className="buttons">
                <CustomButton type="submit" centered onClick={() => onSubmit && onSubmit(formFields)} disabled={!valid}>Sign
                    In</CustomButton>
                <CustomButton isGoogleSignIn>
                    Sign in with Google
                </CustomButton>
            </div>
            Don't have an account ? <Link to="/shop/signup">Create an account</Link>
        </Form>
    )
}