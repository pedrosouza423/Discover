
function sayMyname(nome = ""){
    if (nome === "") {
        throw "Nome é obrigatório"
    }

    console.log(`Congrats ${nome}, your app is running without errors`)
}

// sayMyname("Pedro")

try {
    sayMyname("")
} catch (e) {
    console.log(e)
}