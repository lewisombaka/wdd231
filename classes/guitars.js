// modules
// instead of using defer, use type="module"
// helps in encapsulation and code reusability
// they need to be exported so that they can be used

export default function playGuitar(){
    return "Play Guitar!";
}

export function shredding (){
    return "Plucking the strings!";
}

export function plucking(){
    return "Plucking the strings!";
}

// Go and import this modules in any js file in the folder