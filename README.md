## Inspiration
BrainPort360- A VR journey with your brain!

So you made your way to this project, but how did you do it? Did your motor cortex fire up the muscle fibers in your arm to move the mouse and use the keyboard to type on the screen and hit ENTER, pushing the hi-tech processor in your computer to fetch this page?

Not far from now, that could all seem out of date. That’s because many smart inventors are investing big time and money into computers that can read your thoughts in real time. The ultimate goal is to create super-machines that know what you want before you figure out yourself.

The three T’s of the future — , Telekinesis, Teleportation and Telepathy

Telekinesis is the ability to move objects through mind power.

Teleportation refers to transporting yourself or your mind to a location miles away from you in fraction of seconds.

Telepathy is the ability to transmit words, emotions, or images to someone else’s mind.

Though many people believe in such psychic ability, scientific evidence for its existence remains still very elusive.

Presenting BrainPort360 - Teleportation made easy!

## What it does

BrainPort360 is a software which uses a Brainwave headset to record your brainwaves and process it in real time.
The output is then sent to a VR world where you can control things and teleport to new places in the world with the force of your mind!

## How I built it

Hardware and Software used : 
EMOTIV EPOC+

React360
EmotivBCI
CortexUI
NODE-RED
Python
(Pytorch)

Testing instructions :

1) Connect the EMOTIV EPOC+ headset with your computer and train the headset with 4 commands using EmotivBCI
2) Open the NODE-RED flow file in NODE-RED dashboard and deploy it
3) Clone the GitHub repository for React360 project and install the dependencies using :
 npm install/yarn
 npm start/yarn start
4)Browse to localhost:8081/index.html


## Challenges I ran into
Establishing a communication between the Brain(which is interfaced with NODE-RED) and React-360 and sending a trigger to teleport through the emulation of keypress in the python server 

## Accomplishments that I'm proud of
Made this project in 7 days (and nights!)

