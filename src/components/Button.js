
const Button = ( { text, onClick } ) =>
{
    return (
        <button
            type="button"
            style={ {
                margin: 10,
            } }
            onClick={ onClick }
        >
            { text }
        </button>
    );
};

export default Button;