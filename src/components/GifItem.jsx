

const GifItem = ({title,url,id}) => {
  return (
    <div className=" bg-white shadow-md rounded-md">
        <img className="rounded-t-md h-40 lg:h-52 w-full" src={url} alt={title} />
        <div className="">
            <p className="text-xl font-semibold text-center ">{title}</p>
        </div>
    </div>
  )
}

export default GifItem