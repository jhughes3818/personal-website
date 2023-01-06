export default function FantasyGrid() {
  return (
    <div className="mt-3 md:flex">
      <div className="max-w-sm mr-6">
        <h2 className="text-3xl font-semibold text-blue-500">Fantasy Grid</h2>
        <p className="text-lg text-gray-500">
          I built and maintain an app for playing Formula 1 Fantasy. I was
          frustrated with the official app, so I built my own. It's a full-stack
          app built with React, Next.js, and Tailwind CSS. It's hosted on Vercel
          and uses Supabase for the database. <br />
          <br />
          The primary difference from the official app is the scoring and
          pricing system for the drivers, which I designed based on frustrations
          myself and my friends had with the official app.
        </p>
        <button className="bg-blue-500 h-12 w-36 rounded-lg text-white text-lg align-bottom mt-3">
          <a href="https://fantasygrid.app/">Play F1 Fantasy</a>
        </button>
      </div>
      <div>
        <img
          src="/images/fantasy_grid.png"
          alt="Fantasy Grid"
          className="w-96 h-96 rounded-lg object-cover shadow-lg mt-5 md:mt-0"
        />
      </div>
    </div>
  );
}