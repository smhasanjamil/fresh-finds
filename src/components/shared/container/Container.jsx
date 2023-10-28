const Container = ({ children }) => {
    return (
        <div className="max-w-[1536px] mx-auto lg:px-20 md:px-10 px-5">
            {children}
        </div>
    );
};

export default Container;