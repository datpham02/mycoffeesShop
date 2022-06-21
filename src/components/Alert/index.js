function Alert({text , type }) {
    let css = '';
    if(type == 'red'){
        css = "bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3"
    }else {
        css = "bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
    }
    return (
        <div className={css} role="alert">
            {text}
        </div>
    );
}


export default Alert;