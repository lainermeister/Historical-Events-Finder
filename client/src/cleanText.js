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
                let nextOpen = desc.indexOf(openTag, endText + openTag.length);
                let nextClose = desc.indexOf(closeTag, endText + openTag.length);
                while (nextOpen < nextClose && nextOpen !== -1 && nextClose != -1) {
                    nextOpen = desc.indexOf(openTag, nextOpen + openTag.length);
                    nextClose = desc.indexOf(closeTag, nextClose + openTag.length);
                }
                startText = nextClose + closeTag.length;
                endText = desc.indexOf(openTag, startText)
            }
            cleanDesc += desc.slice(startText)
            desc = cleanDesc;
        };
        removeTags("{", "}");
        removeTags("<a", "</a>");
        // removeTags("amp", "amp");
        return desc;
        // return desc.split(" ").filter(word => word.length < 30).join(" ")
    },
    date: (date) => {
        const BC = date.indexOf("-") !== -1 ? true : false;
        const yearEndIndex =
            date.indexOf("/") === -1 ? date.length : date.indexOf("/");
        return `${date.slice(BC ? 1 : 0, yearEndIndex)} ${BC ? " B.C." : ""}`;
    }
}

