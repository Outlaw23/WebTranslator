const mapping = {
    b:"h", c:"j", d:"k", f:"l", g:"m",
    h:"n", j:"p", k:"q", l:"r", m:"s",
    n:"z", p:"t", q:"v", r:"w", s:"y",
    z:"b", t:"x", v:"d", w:"f", y:"g",
    x:"c"
};

export function translateToHado(text) {
    return text
        .toLowerCase()
        .split("")
        .map(letter => mapping[letter] || letter)
        .join("");
}

