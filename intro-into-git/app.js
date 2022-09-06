// object, boolean, number, string, array, 

var personMcman = {
    name: "personMcman",
    age: 27,
    alive: true,
    friends: ["RandyRandelmen", "Mr.krystal", "Big James M", "JT Tilley"],
    vehicle: {
        model: "X Æ A-12",
        roofed: false,
        wheels: 3,
        features: ["cupholders", "heated seats", "ejection seat", "AP heat seeking missiles"],

    },
}

console.log(personMcman.vehicle.features[1])

console.log(personMcman.vehicle.features)

var color = 'blue'

if (color === "blue") {
    console.log("this is red")
} else if (color === 'purple') {
    console.log("this is blue ")
} else {
    console.log("this is purple ")
}

if (1 === 2 && 3 === 3) {
    console.log("I can't do math")
} else if (1 === 1 && 3 === 3) {
    console.log("I can do math")
} else {
    console.log("what are numbers??")
}

var favfood = ["pizza", "chicken", "pasta", "potato", "fruit"]

for (var i = 0; i < favfood.length; i++) {

    console.log(favfood[i])

    console.log(i)
}

var getElementExample = document.getElementById("Title")

console.log(getElementExample)
console.dir(getElementExample)

function dontclick() {
    console.log("a mistake has been made"),
        document.body.style.backgroundColor = "red"
}
var button = document.getElementById("button")
button.addEventListener("click", dontclick

)



function applyNewImage() {
    //create a new element
    const newElement = document.createElement("img")
    
    
    //apply image source to new elekmt
    newElement.setAttribute("src", "https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load")
    
    //apply class name to elelemnt
    newElement.setAttribute("class", "jsImage")


    //append the new elelemt to the dom
    document.body.appendChild(newElement)
    console.log("test")

}

button.addEventListener("dblclick", applyNewImage)