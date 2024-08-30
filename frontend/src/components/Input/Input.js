import "./Input.css";

const Input = ({ children, id, value, setValue, type = "text" }) => {
    return (
        <label htmlFor={id}>
            {children}
            <input
                type={type}
                id={id}
                name="name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
};

export default Input;
