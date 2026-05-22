import logo from "../assets/sillage-logo.svg";
import loginIcon from "../assets/login-siyah-1.png";
import bagIcon from "../assets/shopping-bag-black-1.png";

function Navbar() {
  return (
    <header className="w-full border-b border-black bg-[#FFFFFA]">
      <nav className="mx-auto flex h-[163px] max-w-[1496px] items-center px-[96px]">
        <img
          src={logo}
          alt="Sillage"
          className="w-[255px] object-contain"
        />

        <div className="ml-auto flex items-center gap-[86px] text-[18px] font-light text-black">
          <a href="#">About</a>
          <a href="#">Create Your Own Fragrance</a>
          <a href="#">Memory Archive</a>
        </div>

        <div className="ml-[68px] flex items-center gap-[28px]">
          <button>
            <img src={loginIcon} alt="Login" className="h-[19px] w-[19px]" />
          </button>

          <button>
            <img src={bagIcon} alt="Shopping bag" className="h-[20px] w-[17px]" />
          </button>

          <button className="text-[22px] leading-none">◎</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;