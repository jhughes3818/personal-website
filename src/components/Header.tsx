import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

imagemin(["images/*"], {
  destination: "compressed_images",
  plugins: [imageminWebp({ quality: 50 })],
}).then(() => {
  console.log("Done!");
});

export default function Header() {
  return (
    <div className="md:w-1/2 mx-auto p-7 mt-12 bg-purple-200 rounded-3xl">
      <div className="md:flex break-words gap-6">
        <div>
          <h1 className="text-4xl font-semibold">Having Fun.</h1>
          <h1 className="text-4xl font-bold text-purple-500">
            Building Products.
          </h1>
          <p className="text-lg text-gray-500 mt-3 max-w-sm">
            I’m a product manager with experience in FinTech. Outside work, I
            like to build things, run ultra-marathons and climb mountains.
          </p>
          <a href="/contact">
            <button className="bg-purple-500 h-12 w-36 rounded-lg text-white text-lg align-bottom mt-3">
              Reach Out
            </button>
          </a>
        </div>
        <div>
          <img
            className="h-96 w-96 rounded-lg object-cover shadow-lg mt-5 md:mt-0"
            src="/images/hero3purple.webp"
          ></img>
          {/* <picture>
            <source type="image/webp" srcSet="/images/hero3purple.webp" />
            <source type="image/jpeg" srcSet="/images/hero3purple.png" />
            <img src="/images/hero3purple.png" alt="" />
          </picture> */}
        </div>
      </div>
    </div>
  );
}
