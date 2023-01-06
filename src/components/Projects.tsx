import FantasyGrid from "./Projects/FantasyGrid";

export default function Projects() {
  return (
    <>
      <div className="md:w-1/2 mx-auto pt-7 pb-4 px-7">
        <h1 className="text-4xl font-bold">My Projects</h1>
      </div>
      <div className="md:w-1/2 mx-auto p-7 bg-blue-100 rounded-3xl mb-4">
        <FantasyGrid />
      </div>
    </>
  );
}
