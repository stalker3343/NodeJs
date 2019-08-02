module.exports = (temp, item) => {
    let output = temp;
    Object.keys(item).map((el) => {
        let patern = new RegExp(`{%${el}%}`, "gi")

        if (el === "organic") {
            if (item[el]) {
                output = output.replace(patern, "")
            } else {
                output = output.replace(patern, "not-organic")
            }
        } else {
            output = output.replace(patern, item[el])
        }


    });
    return output;
}