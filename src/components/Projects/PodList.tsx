export default function PodList() {
  return (
    <div className="flex flex-col md:flex-row  content-center px-4 gap-8 relative">
      <div className="">
        <img
          src="/images/image_23.png"
          alt="Fantasy Grid"
          className=" rounded-3xl object-cover mt-5 md:mt-0 h-96"
        />
      </div>
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold text-blue-500">PodList</h2>
        <p className="text-lg text-gray-500">
          PodList is a new way to share and discover podcasts. It has a mobile
          app, which allows you to curate lists of your favourite podcasts, and
          follow others to see their lists. You can also create universal links
          to any episode, which allows easy sharing across social media and
          messaging apps.
          <br />
          <br />
          Most of the products out there are built for podcasters, not podcast
          listeners. With PodList, I'm taking the opposite approach. I love
          sharing podcasts with my friends, and I want to make it easier for
          everyone to do the same.
        </p>
        <button className="bg-blue-500 h-12 w-36 rounded-lg text-white text-lg align-bottom mt-3 duration-300 hover:bg-blue-600 hover:scale-110 transition-all hover:text-gray-100">
          <a href="https://apps.apple.com/au/app/podlist-discover-podcasts/id6446864066">
            Build Your List
          </a>
        </button>
      </div>

      {/* <img src="/images/group.png"></img> */}
    </div>
  );
}
