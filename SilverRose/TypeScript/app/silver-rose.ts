export class CheckOut {
    pricingRules: Array<any>;
    total: number;

    constructor(pricingRules = [] as Array<any>) {
        this.pricingRules = pricingRules;
        this.total = 0;
    }

    scan(item: string) {

    }
}
