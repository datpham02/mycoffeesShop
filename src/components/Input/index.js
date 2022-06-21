function Input({ text , type = 'text',placeholder = 'Enter your data',value = undefined, onChange }) {
    return (
        <div className="flex justify-center w-[100%]">
            <div className="mb-3 xl:w-96">
                <div className="w-[100%] text-sm font-semibold text-gray-500 mb-[15px]">{text}</div>
                <input
                    type={type}
                    className="
                        w-[100%]
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleEmail01"
                    placeholder={placeholder}
                    value = {value} 
                    onChange={onChange}
                />
            </div>
        </div>
    );
}


export default Input;