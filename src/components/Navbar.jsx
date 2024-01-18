import logo from "../assets/logo.png";
import Button from "./Button";

// Desc: This is the navbar component for the website
function Navbar() {
  let Links = [
    {name: "ABOUT",link: "#"},
    {name: "TOKENOMICS",link: "#"},
    {name: "ROADMAP",link: "#"},
    {name: "QUOTES",link: "#"},
  ];
  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-green-950 py-3 md:px-5 px-5">
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <span>
              <img src={logo} height={100} width={70} className="" />
            </span>
          </div>

          <ul className="md:flex md:items-center">
            {
              Links.map((link, index) =>(
                <li key={index} className="md:ml-8 text-md text-white hover:text-green-900 duration-500">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))
            }
            <Button>
              BUY TOKEN
            </Button>
            <Button>
              WHITEPAPER 
            </Button>

          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
