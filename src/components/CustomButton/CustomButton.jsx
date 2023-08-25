import './CustomButton.styles.scss';

export const CustomButton = ({children, isGoogleSignIn, disabled ,inverted, centered , ...otherProps
}) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button ${centered} ? 'centered' : ''`}
        disabled={disabled}
        {...otherProps}
    >
        {children}
    </button>
);