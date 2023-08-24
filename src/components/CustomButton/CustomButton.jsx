import './CustomButton.styles.scss';

export const CustomButton = ({children, isGoogleSignIn, inverted, centered , ...otherProps
}) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button ${centered} ? 'centered' : ''`}
        {...otherProps}
    >
        {children}
    </button>
);