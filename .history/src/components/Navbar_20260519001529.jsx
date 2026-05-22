function Navbar() {
    return (
      <header className="w-full bg-[#FFFFFA] border-b border-[#1f1f1f]">
        <nav className="mx-auto flex h-[163px] max-w-[1496px] items-center px-[90px]">
          <div className="mr-auto">
            <h1 className="font-serif text-[72px] font-normal leading-none tracking-[-0.06em] text-black">
              sillage
            </h1>
          </div>
  
          <div className="flex items-center gap-[72px] text-[20px] font-light text-black">
            <a href="#" className="hover:opacity-60">
              About
            </a>
            <a href="#" className="hover:opacity-60">
              Create Your Own Fragrance
            </a>
            <a href="#" className="hover:opacity-60">
              Memory Archive
            </a>
          </div>
  
          <div className="ml-[70px] flex items-center gap-[28px] text-[25px] text-black">
            <span>♙</span>
            <span>▢</span>
            <span>◎</span>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Navbar;