# Description

In this project, I have implemented a vr board game where the player is at the center of a cube and can put pieces on each of the six surfaces by staring at the board. To play it, the player must at least have a smartphone that supports webvr and a pair of vr glasses.

The major work I have done is:

1. Create the board using `LineSegments` provided by three.js library.
2. Create the milkway background using `CubeTextureLoader` provided by three.js library. The milkway images are obtained from [here](https://github.com/mrdoob/three.js/tree/master/examples/textures/cube/MilkyWay).
3. Create the sun using [`Lensflare.js`](https://github.com/mrdoob/three.js/blob/master/examples/js/objects/Lensflare.js) library. The pictures I used comply with the [license](https://cims.nyu.edu/~al4902/final/textures/lensflare/LICENSE.txt).
4. Initialize the board by putting all the pieces down and setting them invisible.
5. Use the technique of raycasting to determine which piece is being stared at, and set it visible permanently if the player looks at it more than 100 frames. The `raycaster` is provided by three.js.

The potential development includes:

1. Build a server where two players can play against each other.
2. Support controllers of vr headsets like oculus/vive.
3. Support normal version on desktop.