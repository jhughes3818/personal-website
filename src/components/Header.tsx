export default function Header() {
  return (
    <div className="lg:w-2/3 mx-auto p-6 mt-12 bg-purple-100 rounded-3xl">
      <div className="flex flex-col md:flex-row justify-center content-center px-4 gap-8 relative">
        <div className="grid place-items-center">
          <img src="/images/intro-lg.png" className=""></img>
        </div>
        <div>
          <img className="" src="/images/headerimagelg.png"></img>
        </div>
        {/* <img src="/images/group.png"></img> */}
      </div>
    </div>
  );
}
