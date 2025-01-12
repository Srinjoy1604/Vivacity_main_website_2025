const Form = ({ children, submit }) => {
    return (
        <form
            onSubmit={submit}
            className="w-[55%] rounded-md mx-auto p-[2%] normal-form max-[666px]:w-[88%]"
        >
            {children}
        </form>
    );
};

export default Form;
