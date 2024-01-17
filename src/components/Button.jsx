function Button(props) {
  return (
    <div>
      <button className="bg-gradient-to-r from-green-400 to-yellow-200 text-white px-3 py-2 m-2 text-md rounded font-medium hover: from-white-500 hover:to-green-200">
        {props.children}
      </button>
      
    </div>
   
  )
}

export default Button