export const formatCurrency = (value)=>{


    return new Intl.NumberFormat(
        "en-US",
        {
            style:"currency",
            currency:"USD",
            maximumFractionDigits:0
        }
    ).format(value);


};



export const formatPercentage = (value)=>{


    return `${value.toFixed(1)}%`;

};