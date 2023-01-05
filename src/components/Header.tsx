export default function Header() {
  return (
    <div className="grid place-items-center py-16 h-2/4">
      <div className="bg-purple-100 rounded-3xl">
        <div className="grid place-items-center">
          <div className="md:flex">
            <div className="p-7 h-fit">
              <h1 className="text-4xl font-semibold">Having Fun.</h1>
              <h1 className="text-4xl font-bold text-purple-500">
                Building Products.
              </h1>
              <p className="text-lg text-gray-500 w-96 mt-3">
                I’m a product manager with experience in FinTech. Outside work,
                I like to build things, run ultra-marathons and climb mountains.
              </p>
              <button className="bg-purple-500 h-12 w-36 rounded-lg text-white text-lg align-bottom mt-3">
                Reach Out
              </button>
            </div>
            <div className="p-7">
              <img
                className="h-96 w-96 rounded-lg object-cover shadow-lg"
                src="/images/hero2.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
