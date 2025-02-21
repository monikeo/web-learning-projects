const Button = ({label, iconURL}) => {
    return (
        <button className="flex justify-center items-center gap-2 rounded-sm px-4 py-1 font-montserrat text-lg bg-red-400 hover:bg-red-300 active:bg-red-400 text-white">
            {label}
            <img src={iconURL} alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />
        </button>
    )
}

export default Button
