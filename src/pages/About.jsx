function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        GitHub Finder is a React-based project that demonstrates the seamless
        integration of 3rd party APIs. Explore GitHub's open-source projects,
        trending repositories, and connect with developers. Get started today
        and elevate your coding skills with GitHub Finder!

      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Created By: 
        <a  className="text-white"  href="https://www.linkedin.com/in/prince-saspara-a88130260/" target="_blank" rel="noreferrer" >
           Prince Saspara
        </a>
      </p>
    </>
  );
}

export default About;
