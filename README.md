### Requirements
- Node.js and NPM (to host the project locally)
- Bower (`npm install bower`)

You don't actually need Node and Bower installed if you
1. Have other means of hosting this project locally **and**
2. You grab the [underscore](http://www.underscorejs.com/underscore.js) and the [require](http://requirejs.org/docs/release/2.1.6/comments/require.js) libraries added under `lib/underscore/underscore.js` and `lib/requirejs/require.js`, respectively.
3. If you can deal with that, the requirements aren't needed.

If you didn't install the requirements, then you don't need to do the following steps.

### Setup
- `$> npm install`
- `$> bower install`
- `$> node index.js`

Currently, the site is running at `localhost:3000` you can edit `index.js` to change anything there.
The files you should be concerned with are in `src/` and there's only 2 of them, and their pretty
straight forward.

### Useful Resources/Tips
- `cmd+ctrl+i` for the chrome developer tools
- (Web Audio API Book)[http://chimera.labs.oreilly.com/books/1234000001552/pr01.html]
- (Web Audio Spec)[https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html]
- (Getting Started with Web Audio)[http://www.html5rocks.com/en/tutorials/webaudio/intro]
