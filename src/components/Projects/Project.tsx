const Project = () => {
  return (
    <div id="projects" className="w-full py-16 px-6 flex flex-col gap-y-4">
      <h1 className="text-2xl underline underline-offset-8 self-center">
        Projects
      </h1>
      <div className="w-full items-center justify-center flex">
        <a
          href={""}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white py-2 px-4"
        >
          View GitHub Repo
        </a>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Project;
