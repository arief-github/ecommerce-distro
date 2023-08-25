import {FormInput} from "../../components/FormInput/FormInput.jsx";
import {CustomButton} from "../../components/CustomButton/CustomButton.jsx";
import {useState} from "react";

export const SignUpPage = () => {
    const [value, setValue] = ({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            Sign Up Page

            <FormInput/>
        </>
    )
}