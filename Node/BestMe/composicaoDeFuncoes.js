const grupo = ["Pedro", "Luizinha", "Lucas"]
const uppercaseTheLastWithA = grupo
                                .filter(person => person.startsWith("L"))
                                .map(lPerson => lPerson.toLocaleUpperCase())