function person(name){
    console.log(`Hello ${name}`)
}

function notherPerson(callback){
    const name = "Zabaa"
    callback(name)
}

notherPerson(person)