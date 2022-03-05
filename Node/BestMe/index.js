// const questions = [
//     "O que eu aprendi hoje?",
//     "O que eu me deixou aborrecido?",
//     "O que eu poderia fazer para melhorar?",
//     "O que me deixou feliz hoje?",
//     "Quantas pessoas eu ajude hoje?",
// ]

// const ask = (index = 0 ) => {
//     process.stdout.write(questions[index] + "\n\n\n")    
// }



// process.stdin.on('data', data =>{
//     process.stdin.write(data.toString().trim() + "\n\n")
//     process.exit()
// })
const sayMyName = () => console.log('Pedro');
const runFunctions = fn => fn();

runFunctions(sayMyName)