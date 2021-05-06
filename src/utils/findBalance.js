const findBalance = (initialBalance, fare) => {
    let balance =  parseFloat(initialBalance) - parseFloat(fare);
    return balance.toString()
}
export {findBalance}