export const processTemplate = (name: string, subst: {[key: string]: number}, template: string): string => {
    switch (name) {
        case 'eurocall': return template
            .replace("$notional", subst.notional.toString())
            .replace("$margin", subst.margin.toString())
            .replace("$strike", subst.strike.toString())
            .replace("$premium", subst.premium.toString())
            .replace("$minValue", subst.minValue.toString())
            .replace("$maxValue", subst.maxValue.toString())
    }
    return template
}