const SYMBOL_VAL = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
} as const;

function romanToInt(s: string): number {
    const symbols = s.split("") as (keyof typeof SYMBOL_VAL)[];
    let sum = 0;
    let skip = false;
    symbols.forEach((symbol, i, arr) => {
        if (skip) {
            skip = false;
            return;
        }
        const next = arr[i + 1];
        switch (symbol) {
            case "I": {
                if (next === "V") {
                    sum += 4;
                    skip = true;
                } else if (next === "X") {
                    sum += 9;
                    skip = true;
                } else {
                    sum += SYMBOL_VAL[symbol];
                }
                break;
            }
            case "X": {
                if (next === "L") {
                    sum += 40;
                    skip = true;
                } else if (next === "C") {
                    sum += 90;
                    skip = true;
                } else {
                    sum += SYMBOL_VAL[symbol];
                }
                break;
            }

            case "C": {
                if (next === "D") {
                    sum += 400;
                    skip = true;
                } else if (next === "M") {
                    sum += 900;
                    skip = true;
                } else {
                    sum += SYMBOL_VAL[symbol];
                }
                break;
            }

            default: {
                sum += SYMBOL_VAL[symbol];
            }
        }
    });
    return sum;
}
