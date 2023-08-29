import {FormSignUp} from "../../components/Form/FormSignUp.jsx";
import {useState} from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils.js";

export const SignUpPage = () => {
    const [formFields, setFormFields] = useState({});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState();

    const onSubmit = async (value) => {
        const { displayName, email, password, confirmPassword } = value;

        if(password !== confirmPassword) {
            alert("Password dont match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName })
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="sign-up">
            Sign Up Page
            <form onSubmit={(e) => e.preventDefault()}>
                <FormSignUp
                    onChange={(ff, v, e) => {
                        setFormFields(ff)
                        setValid(v)
                        setErrors(e)
                    }}
                    onSubmit={onSubmit}
                />
            </form>
        </div>
    )
}