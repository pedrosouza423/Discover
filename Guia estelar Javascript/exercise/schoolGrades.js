let score = 100



console.log(getScore(score))

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 89
    let scoreC = score >= 70 && score < 79
    let scoreD = score >= 60 && score < 69
    let scoreF = score < 60

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if(scoreB){
        scoreFinal = "B"
    } else if(scoreC){
        scoreFinal = "C"
    } else if(scoreD){
        scoreFinal = "D"
    } else if(scoreF){
        scoreFinal = "F"
    }else{
        console.log("Nota invalida")
    }
    return scoreFinal   
}
