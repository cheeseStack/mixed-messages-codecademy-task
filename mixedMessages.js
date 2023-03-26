// Plan project:

/* define a workout with 3 pieces of data: 
    1. exercise body part
    2. exercise equipment
    3. exercise duration
    4. what this will achieve (grgeatness, 6-pack, eternal happiness, etc)
*/

/*
 - create arrays for the 3 items above; exercise duration is a Math.ceil(Math.random() * 10) for 1 to 10 -mins
  - use choose or choice?? or Math.random for the selection of the others

  - Make a random index generator function to feed into the other functions

*/

// 1. Body parts to work out / exercise
const bodyPartOptions = ['fingers', 'thumbs', 'forearm', 'biceps', 'shoulders', 'back', 'chest', 'abdominals', 'hips', 'quadriceps', 'calves', 'ankles', 'toes'];


// 2. exercise equipment
const equipmentOptions = ['barbells', 'dumbells', 'TRX machine', 'treadmill', 'rowing machine', 'exercise bike', 'resistance bands', 'cans of beans' ]


// 3. Exercise duration between 1 and 10 minutes
// This does not need its own function or further action
const durationOptions = Math.ceil(Math.random() * 10)


// 4. What will the exercises achieve
const achieveOptions = ['eternal happiness', 'eternal life', 'respect from the world', 'immense wealth', 'elite athlete status', 'a world record', '3 wishes', 'a mystery prize', "a lifetime's supply of cheese", 'everything your heart desires']


// a) Create a random index functions based on the array length
const chooseRandomIndex = arr =>  Math.floor(Math.random() * arr.length)


// b) Function to select an option from any array
const chooseOption = arr =>  arr[chooseRandomIndex(arr)]


// c) generate choices

    // i) body part
const bodyPart = chooseOption(bodyPartOptions)

    // ii) equipment
const equipment = chooseOption(equipmentOptions)

    // iii) achieve options 
const achieve = chooseOption(achieveOptions)

// d) user message:
