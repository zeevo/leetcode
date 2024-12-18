function longestCommonPrefix(strs: string[]): string {
    let i = 0;
    let prefix = "";
    if (strs.length === 1) {
        return strs[0];
    }

    while (true) {
        let candidate = strs[0][i];
        if (!candidate) {
            break;
        }
        let exit = false;
        strs.forEach((curr) => {
            if (curr[i] !== candidate) {
                exit = true;
            }
        });

        if (exit) {
            break;
        } else {
            prefix += candidate;
        }

        i += 1;
    }

    return prefix;
}
