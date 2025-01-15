import Logo from "./logo";
const NavBar = () => {
    return (
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8 text-white">
            <div className="flex gap-8"><div className="flex">
            <Logo />
            </div>
            <div className="flex-1 hidden md:flex space-x-10">
            <button>Product</button>
            <button>Company</button>
            <button>Connect</button>
            </div>
        </div>
        
        <div className="hidden md:flex space-x-16 mr-16">
          <button>Login</button>
          <button className="bg-white rounded-3xl px-8 py-2 text-center text-orange-600 font-semibold">
            Sign Up
          </button>
        </div>
        {/* todo: reaplce this with a hamburger icon */}
        <button className="md:hidden block">Hamburger </button>
      </nav>
    )
}

export default NavBar;