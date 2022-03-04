# Showcase of Frontend Mentor Challenges using react

## How Could you implement this yourself?

The main driver in all of this is the json file in the src folder.

### Writing your json file

The structure of the file should be a json object containing one array object named "data".
The array consists of objects that contain information about your projects.

Required fields are name, repo, and liveDemo

Example:

```
    {
      "name": "Tip calculator app",
      "repo": "https://github.com/fosteeco/front-end-mentor-tip-calculator-app",
      "liveDemo": "https://fosteeco.github.io/front-end-mentor-tip-calculator-app/",
    },
```

Once you've added all of your projects information into the json file you should backup the json file just in case something goes wrong with the next step.

### Getting Screenshots for your live demos

Make sure you create a public/images folder. This is where the script saves all the image files. The script is is called fetchImages.js. This script will OVERWRITE your ChallengesData.json, adding an image field for each object in the array.

## Dependency error

You may run into an issue with the react-reveal package when you run npm install.
Running npm with the --legacy-peer-deps may solve this problem. I couldn't find a simpler way to use fade in animations than this package. Could implement a vanilla javscript and css solution but I don't want to use a bunch of functions to calculate if an element is in the viewport. Keep it simple.

```
npm install --legacy-peer-deps
```

## Deploying

freecodecamp has a good guide here: https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
Here's the jist:

```
npm install gh-pages
```

Add this to your package.json scripts:

```
    "predeploy": "npm run build", <----------- #1
    "deploy": "gh-pages -d build", <---------- #2
```

Add this to package.json, make sure you change the fosteeco to your username:

```
  "name": "front-end-mentor-challenges-showcase",
  "homepage": "https://fosteeco.github.io/front-end-mentor-challenges-showcase", <-----------
  "version": "0.1.0",

```

Then run :

```
npm run deploy

```
