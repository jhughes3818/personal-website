export default function PodListPage() {
  return (
    <>
      <div className="">
        <div className="">
          <img
            src="/images/image_23.png"
            alt="Fantasy Grid"
            className=" rounded-lg object-cover mt-5 md:mt-0 h-96"
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold text-blue-500">PodList</h2>
          <p className="text-lg text-gray-500">
            PodList is a new way to share and discover podcasts. It has a mobile
            app, which allows you to curate lists of your favourite podcasts,
            and follow others to see their lists. You can also create universal
            links to any episode, which allows easy sharing across social media
            and messaging
            <br />
            <br />
            Most of the products out there are built for podcasters, not podcast
            listeners. With PodList, I'm taking the opposite approach. I love
            sharing podcasts with my friends, and I want to make it easier for
            everyone to do the same.
          </p>
          <button className="bg-blue-500 h-12 w-36 rounded-lg text-white text-lg align-bottom mt-3 duration-300 hover:bg-blue-600 hover:scale-110 transition-all hover:text-gray-100">
            <a href="/projects/podlist">Build Your List</a>
          </button>
        </div>
      </div>
    </>
  );
}
