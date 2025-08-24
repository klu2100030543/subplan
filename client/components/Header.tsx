import { IoSearch, IoBag, IoPerson } from 'react-icons/io5';

export function Header() {
  return (
    <header className="w-full h-20 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative z-10">
      <div className="max-w-[1366px] mx-auto h-full flex items-center justify-between px-4 lg:px-[72px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/532e91c3485e51d7324f73af70c2e06ce1d03fe4?width=138" 
            alt="BasicBros Logo" 
            className="w-[69px] h-[65px]"
          />
        </div>

        {/* Search Box */}
        <div className="hidden md:flex ml-auto mr-8">
          <div className="relative w-[225px] h-[45px]">
            <div className="w-full h-full bg-[#EEEBEB] rounded-[27px] flex items-center px-5">
              <span className="text-black text-base font-normal font-['Inter'] flex-1">Search</span>
              <IoSearch className="w-6 h-6 text-black ml-4" />
            </div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="w-[31px] h-[31px] flex items-center justify-center">
            <IoBag className="w-[21px] h-[22px] text-black" />
          </button>
          <button className="w-[31px] h-[31px] flex items-center justify-center">
            <IoPerson className="w-[31px] h-[31px] text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
