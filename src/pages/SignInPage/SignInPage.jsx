import './SignInPage.styles.scss';
import {useState} from "react";
import {FormSignIn} from "../../components/Form/FormSignIn";

export const SignInPage = () => {
    const [formFields, setFormFields] = useState({});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState();

    const onSubmit = (value) => {
        alert(`Submit Value : ${JSON.stringify(value, null, 2)}`)
    }

    return (
        <div className="sign-in">
            Sign In Page

            <FormSignIn
                onChange={(ff, v, e) => {
                    setFormFields(ff)
                    setValid(v)
                    setErrors(e)
                }}
                onSubmit={onSubmit}
            />
        </div>
    )
}

// const ShowData = ({ formFields, valid, errors }) => (
//     <div className="ShowData">
//         <dl>
//             <dt>Current value:</dt>
//             <dd>{JSON.stringify(formFields, null, 2)}</dd>
//             <dt>Valid?</dt>
//             <dd>{JSON.stringify(valid)}</dd>
//             <dt>Errors?</dt>
//             <dd>{JSON.stringify(errors, null, 2)}</dd>
//         </dl>
//     </div>
// )
