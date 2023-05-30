const buffer = new Buffer.from("Zabaa")  // utf-8


buffer.write("Ab")  // Abbaa
buffer.write("Abcdefgh")  //Abcde

console.log(buffer.toString())
console.log(buffer)
console.log(buffer.toJSON())