function InputFile({ text, onChange }) {
    return (
        <div className="flex justify-center w-[100%]">
            <div className="mb-3 w-96">
                <label htmlFor="formFile" className="w-[100%] form-label inline-block mb-2 text-gray-700">
                    {text}
                </label>
                <input
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="formFile"
                    onChange={onChange}
                />
            </div>
        </div>
    );
}


export default InputFile;
