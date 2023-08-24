import {Link} from "react-router-dom";
import './SignInPage.styles.scss';
import {FormInput} from "../../components/FormInput/FormInput";
import {useState} from "react";
import {CustomButton} from "../../components/CustomButton/CustomButton";

export const SignInPage = () => {
    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="sign-in">
            Sign In Page
            <form>
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={value.email}
                    onChange={handleChange}
                />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={value.password}
                    onChange={handleChange}
                />
            </form>
            <div className="buttons">
                <CustomButton type="submit" centered>Sign In</CustomButton>
                <CustomButton isGoogleSignIn>
                    Sign in with Google
                </CustomButton>
            </div>

            Don't have an account ? <Link to="/shop/signup">Create an account</Link>
        </div>
    )
}