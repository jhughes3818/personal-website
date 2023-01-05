export default function Header() {
  return (
    <div className="grid place-items-center py-10 h-2/4">
      <div className="bg-purple-100 rounded-3xl">
        <div className="grid place-items-center">
          <div className="flex">
            <div className="p-7">
              <h1 className="text-4xl font-semibold">Having Fun.</h1>
              <h1 className="text-4xl font-bold text-purple-500">
                Building Products.
              </h1>
              <p className="text-lg text-gray-500 w-96 mt-3">
                I’m a product manager with experience in FinTech. Outside work,
                I like to build things, run ultra-marathons and climb mountains.
              </p>
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
