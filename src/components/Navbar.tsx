export default function Navbar() {
  return (
    <nav className="bg-white h-12 fixed top-0 left-0 right-0 z-50 lg:w-2/3 mx-auto bg-opacity-50 px-2">
      <div className="container h-full flex items-left md:items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/images/avatar.webp"
              alt="Jason Hughes"
              className="w-8 h-8 rounded-full"
            />
          </a>
          <a href="/" className="hidden sm:block text-lg font-semibold ml-4">
            Jason Hughes
          </a>
        </div>
        <div className="flex md:block">
          <ul className="flex items-center">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800 mr-6">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://jasonsnewsletter.substack.com/"
                className="text-gray-600 hover:text-gray-800 mr-6"
              >
                My Writing
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </li>
            {/* <li>
              <a
                href="https://jasonsnewsletter.substack.com/"
                className="text-gray-600 hover:text-gray-800"
              >
                My Writing
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
