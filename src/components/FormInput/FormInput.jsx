import {useEffect, useState, useContext} from "react";
import FormContext from "../../context/FormContext.js";

import './FormInput.styles.scss'

const splitCamelCase = (s) =>
    s
        .replace(/([a-z0-9])([A-Z0-9])/g, '$1 $2')
        .replace(/^([a-z])/, (x) => x.toUpperCase())

export const FormInput = ({label, name, onValidate, ...otherProps}) => {
    const formState = useContext(FormContext);
    const [error, setError] = useState(false);

    let value = formState.value && formState.value(name);

    useEffect(() => {
        if (onValidate) {
            setError(onValidate(value));
        }
    }, [onValidate, value]);

    const setInvalid = formState.setInvalid;

    useEffect(() => {
        if (setInvalid) {
            setInvalid(name, error)
        }
    }, [setInvalid, name, error]);

    if (!formState.value) {
        return "Input Field should wrapped in form"
    }

    return (
        <div className='group'>
            <input
                id={name}
                onBlur={() => formState.setDirty(name)}
                className='form-input'
                value={value || ""}
                onChange={(event) => {
                    formState.setDirty(name);
                    formState.setValue(name, event.target.value)
                }}
                {...otherProps}
            />
            {label ? (
                <label
                    htmlFor={name}
                    className={`${
                        otherProps.value?.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label || splitCamelCase(name)}
                </label>
            ) : null}
            {
                <div style={{ color: 'red' }}>
                    {formState.isDirty(name) && error ? error : <>&nbsp;</>}
                </div>
            }
        </div>
    );
}
