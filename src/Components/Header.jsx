const Header = () => {
    return (
        <header>
        <div className="rounded-b-3xl pt-10 text-center items-center justify-between text-white">
          <div className="mb-10 text-2xl leading-none tracking-tight md:text-2xl lg:text-4xl">
            <h1 className="mb-4">A modern publishing platform</h1>
            <h2 className="lg:text-sm md:text-sm">
              Grow your audience and build your online brand
            </h2>
          </div>
          <div className="pb-32">
            <button className="bg-white text-orange-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
              Start for Free
            </button>
            <button className="text-white border-solid border-2 border-white font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
              Learn More
            </button>
          </div>
        </div>
      </header>
    )
}

export default Header;