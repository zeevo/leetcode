function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        switch (char) {
            case "(": {
                stack.push("(");
                break;
            }

            case "[": {
                stack.push("[");
                break;
            }

            case "{": {
                stack.push("{");
                break;
            }

            case ")": {
                const top = stack.pop();
                if (top !== "(") {
                    return false;
                }
                break;
            }

            case "]": {
                const top = stack.pop();
                if (top !== "[") {
                    return false;
                }
                break;
            }

            case "}": {
                const top = stack.pop();
                if (top !== "{") {
                    return false;
                }
                break;
            }
        }
    }

    return stack.length === 0;
}
