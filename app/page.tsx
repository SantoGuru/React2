import Image from "next/image";
 
export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <Button>Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-5 ml-10 m-5">
      <header className="flex justify-between">
          <div className="flex container flex-row gap-10 ">
              <div className="header-left flex gap-2">
                  <Image
                    src="/favicon.ico"
                    width={25}
                    height={25}
                    alt="Picture of the author"
                  />
                  <a href='#' className='font-bold text-white'>Morry</a>
              </div>
              <nav>
                <ul className="flex flex-row gap-5">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">Service</a></li>
                  <li><a href="#" className="text-white">Market</a></li>
                  <li><a href="#" className="text-white">Community</a></li>
                  <li><a href="#" className="text-white">Blog</a></li>
                  <li><a href="#" className="text-white">About</a></li>
                </ul>
              </nav>
          </div>
          <div>
            <menu className="">
              
            </menu>
          </div>
      </header>
    </main>
  );
}
