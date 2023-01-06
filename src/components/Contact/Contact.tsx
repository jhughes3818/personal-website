export default function ContactPage() {
  return (
    <div className="md:w-1/2 mx-auto p-2 mt-12 bg-purple-100 rounded-3xl">
      <h1 className="text-4xl font-bold text-purple-500">Contact</h1>
      <p className="text-lg text-gray-500 mt-3">
        I'm always happy to chat about product, tech, or anything else. Feel
        free to reach out to me on Twitter or LinkedIn.
      </p>
      <div className="flex gap-6 mt-3 mx-auto">
        <a href="https://twitter.com/json_hughes">
          <img src="/images/twitter.png" alt="Twitter" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/jasonkhughes/">
          <img src="/images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
