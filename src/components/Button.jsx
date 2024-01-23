function Button(props) {
  return (
    <div className="px-0">
      <button className="bg-gradient-to-r from-green-400 to-yellow-200 text-white px-3 py-2 m-2 md:text-sm rounded md:font-sm hover: from-white-500 hover:to-green-200">
        {props.children}
      </button>
      
    </div>
   
  )
}

export default Button