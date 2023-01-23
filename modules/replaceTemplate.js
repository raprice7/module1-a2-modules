module.exports = (htmlStr, customer)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%CUSTOMERNAME%}/g, customer.CustomerName);
    output = output.replace(/{%LOANAMOUNT%}/g, customer.loanAmount);
    output = output.replace(/{%INTEREST%}/g, customer.interest);
    output = output.replace(/{%LOANTERMYEARS%}/g, customer.loanTermYears);
    output = output.replace(/{%LOANTYPE%}/g, customer.loanType);
    return output;
};