module.exports = {
    description: (desc) => {
        console.log(desc)
        const removeTags = (openTag, closeTag) => {
            let startText = 0;
            let endText = desc.indexOf(openTag);
            let cleanDesc = "";
            while (startText < desc.length && endText < desc.length &&
                startText !== -1 && endText !== -1 &&
                desc.indexOf(closeTag) !== -1) {
                cleanDesc += desc.slice(startText, endText);
                let nextOpen = desc.indexOf(openTag, endText + 1);
                let nextClose = desc.indexOf(closeTag, endText + 1);
                while (nextOpen < nextClose && nextOpen !== -1 && nextClose != -1) {
                    nextOpen = desc.indexOf(openTag, nextOpen + 1);
                    nextClose = desc.indexOf(closeTag, nextClose + 1);
                }
                startText = nextClose + 1;
                endText = desc.indexOf(openTag, startText)
            }
            cleanDesc += desc.slice(startText)
            desc = cleanDesc;
        };
        removeTags("{", "}");
        removeTags("<", ">");

        return desc.split(" ").filter(word => word.length < 30).join(" ")

    },
    date: (date) => {
        const BC = date.indexOf("-") !== -1 ? true : false;
        const yearEndIndex =
            date.indexOf("/") === -1 ? date.length : date.indexOf("/");
        return `${date.slice(BC ? 1 : 0, yearEndIndex)} ${BC ? " B.C." : ""}`;
    }
}

// console.log(module.exports.description("The first commitment period of the Kyoto Protocol ends.{{cite journal"))
