const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe) {
           changeBigShoeImage(imgURL.bigShoe);
        }
    }
    return (
        <div className={`rounded-xl
                ${bigShoeImg === imgURL.bigShoe ? 'opacity-100' : 'border-transparent opacity-40'}
                cursor-pointer max-sm:flex-1
            `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center sm:w-25 sm:h-25 rounded-xl max-sm:p-2 bg-slate-100">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    className="w-24 p-3"
                />
            </div>
        </div>
    )
}

export default ShoeCard;
