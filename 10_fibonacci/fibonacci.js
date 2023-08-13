const fibonacci = function(n) {

    n = Number.parseInt(n)

    if (n < 0) {
        return "OOPS";
    } else if (n < 2) {
        return n;
    } else {
        fN = 1;
        fNm1 = 0;
        for (let i=2; i<=n; i++) {
            [fN, fNm1] = [fN + fNm1, fN];
        };
        return fN;
    };
};

// Do not edit below this line
module.exports = fibonacci;
