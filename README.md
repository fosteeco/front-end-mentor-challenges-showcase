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
