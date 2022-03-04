import "./App.css";
import HeroPreview from "./components/HeroPreview";
import data from "./ChallengesData.json"; /* An array containing challenge objects */
/* Object format: 
name,
repo,
liveDemo,
*/

function App() {
  const challengeData = data.data;

  return (
    <div class="container mx-auto h-screen">
      <div class="text-center px-3 lg:px-0">
        <h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Christian Foster | Frontend Mentor Challenges
        </h1>
        <p class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
          Visit{" "}
          <a
            href="https://www.frontendmentor.io/"
            class="mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600"
          >
            Frontend Mentor
          </a>{" "}
          for more information about what they do
        </p>
        <p>
          Link to Repo for this site at{" "}
          <a href="https://github.com/fosteeco/front-end-mentor-challenges-showcase">
            github
          </a>
        </p>

        <div>
          {challengeData?.map((challenge, idx) => (
            <HeroPreview challenge={challenge} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
