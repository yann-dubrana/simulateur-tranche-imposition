class TaxBracketItem {
    limit: number = 0
    rate: number = 0

    constructor(limit: number, rate: number) {
        this.limit = limit
        this.rate = rate
    }
}

class TaxBracketItemDetail {
    bottomRange = 0
    highRange = 0

    taxableAmount: number = 0
    rate: number = 0
    tax: number = 0

    constructor(bottomRange: number, higherRange: number, taxableAmount: number, rate: number, tax: number) {
        this.bottomRange = bottomRange
        this.highRange = higherRange
        this.taxableAmount = taxableAmount
        this.rate = rate
        this.tax = tax
    }

    rangeLabel() {
        if (this.bottomRange === 0) {
            return `jusqu'a ${this.highRange.toLocaleString('fr-FR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })} €`
        }
        if (this.highRange === Infinity) {
            return `à partir de ${(this.bottomRange + 1).toLocaleString('fr-FR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })} €`;
        }
        return `De ${(this.bottomRange + 1).toLocaleString('fr-FR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })} à ${this.highRange.toLocaleString('fr-FR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })} €`;
    }
}

export class TaxBracketResult {
    name: string = ""
    color: string = "#8e0d41"
    income: number = 0
    total: number = 0
    items: TaxBracketItemDetail[] = []

    position() {
        return {x: this.income, y: this.total}
    }
}

class TaxBracket {
    name: string = ""
    color: string = "#8e0d41"
    items: TaxBracketItem[] = []

    constructor(name: string, color: string, items: TaxBracketItem[]) {
        this.name = name
        this.color = color
        this.items = items
    }

    generate = (maxIncome: number, step: number, numPeople: number) => {
        const data = [];
        for (let income = 0; income <= maxIncome; income += step) {
            const result = this.calculate(income, numPeople);
            data.push({income, totalTax: result.total});
        }
        return data;
    };

    calculate(income: number, numPeople: number) {

        let previousLimit = 0;
        const quotientIncome = income / numPeople;

        let calculation: TaxBracketResult = new TaxBracketResult();
        calculation.name = this.name
        calculation.color = this.color
        calculation.income = income;
        for (const {limit, rate} of this.items) {
            if (quotientIncome > previousLimit) {
                const taxableAmount = Math.min(quotientIncome, limit) - previousLimit;
                const tax = taxableAmount * rate;
                const bottomRange = previousLimit;
                const highRange = limit === Infinity ? Infinity : limit;
                calculation.items.push(new TaxBracketItemDetail(bottomRange, highRange, taxableAmount, rate, tax));
                calculation.total += tax;
            }
            previousLimit = limit;
        }

        calculation.total *= numPeople;
        return calculation
    }
}

class Application {

    graphFactor: number = $state(4)

    numPeople: number = $state(1)
    income: number = $state(32000)

    maxIncome: number = $derived(this.income * this.graphFactor)
    resolution: number = $state(100)

    taxBrackets: TaxBracket[] = $state([])
    taxBracketsResult: TaxBracketResult[] = $derived.by(() => {
        let data = []
        for (const bracket of this.taxBrackets) {
            data.push(bracket.calculate(this.income, this.numPeople))
        }
        return data
    })

    mostAvantageous: TaxBracketResult = $derived(this.taxBracketsResult.reduce((prev, curr) => {
        return (prev.total < curr.total) ? prev : curr;
    }))

    dataset: any = $derived.by(() => {
        let data = []
        for (const bracket of this.taxBrackets) {
            data.push({
                label: bracket.name,
                data: bracket.generate(this.maxIncome, this.resolution, this.numPeople).map(entry => ({
                    x: entry.income,
                    y: entry.totalTax
                })),
                borderColor: bracket.color,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 5
            })
        }

        for (const bracket of this.taxBracketsResult) {
            data.push({
                label: bracket.name + " pour vous",
                data: [bracket.position()],
                borderColor: bracket.color,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15
            })
        }

        return data
    })

    constructor(taxBrackets: TaxBracket[]) {
        this.taxBrackets = taxBrackets
    }

    getBracketByName(name: string) {
        return this.taxBrackets.find(bracket => bracket.name.toUpperCase() === name.toUpperCase());
    }

}


export const app = new Application([
    new TaxBracket(
        "Actuel",
        "#50011e",
        [
            new TaxBracketItem(11294, 0),
            new TaxBracketItem(28797, 0.11),
            new TaxBracketItem(82341, 0.30),
            new TaxBracketItem(177106, 0.41),
            new TaxBracketItem(Infinity, 0.45),
        ]
    ),
    new TaxBracket(
        "LFI",
        "#055226",
        [
            new TaxBracketItem(10292, 0.01),
            new TaxBracketItem(15438, 0.05),
            new TaxBracketItem(20584, 0.10),
            new TaxBracketItem(27789, 0.15),
            new TaxBracketItem(30876, 0.20),
            new TaxBracketItem(33964, 0.25),
            new TaxBracketItem(38081, 0.30),
            new TaxBracketItem(44256, 0.35),
            new TaxBracketItem(61752, 0.40),
            new TaxBracketItem(102921, 0.45),
            new TaxBracketItem(144089, 0.50),
            new TaxBracketItem(267594, 0.55),
            new TaxBracketItem(411683, 0.60),
            new TaxBracketItem(Infinity, 0.90),
        ]
    )
])