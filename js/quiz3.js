const CalculateGrade = (scoer) => {
    let grade = null
    if(scoer >= 81 && scoer <= 100){
        grade = "A"
    } else if(scoer >= 71 && scoer <= 80){
        grade = "B"
    } else if(scoer >= 61 && scoer <= 70){
        grade = "C"
    } else if(scoer >= 51 && scoer <= 60){
        grade = "D"
    } else if(scoer >= 0 && scoer <= 50){
        grade = "F"
    } else {
        grade ="Scoer was invalid"
    }
    return grade
}

console.log(CalculateGrade(81))