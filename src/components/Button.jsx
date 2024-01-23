function Button(props) {
  return (
    <div className="px-0">
      <button className="ring-2 bg-green-900 ring-green-500 group-hovering:ring-1 transition duration-300 text-white px-3 py-2 m-2 md:text-sm rounded md:font-sm hover:bg-green-400">
        {props.children}
      </button>
      
    </div>
   
  )
}

export default Button