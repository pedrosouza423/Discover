let family = {
    incomes: [2500, 3000, 9000, 6000, 6000],
    expenses: [4000, 2500, 400, 3000, 4000]
}

console.log(calculateBalance(family))

// console.log(sum(family.expenses))
function sum(array) {
    let total = 0;

    for (const i of array) {
        total += i;
    }
    return total
}

function calculateBalance(family) {
    let totalIncomes = sum(family.incomes);
    let totalExpenses = sum(family.expenses);

    let total = totalIncomes - totalExpenses
    return total
}