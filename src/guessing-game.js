class GuessingGame {
    constructor() {
        this.minIndx = 0;
        this.maxIndx = 0;
        this.midIndex = 0;
        this.arr = [];

    }

    setRange(min, max) {

        for (let i = min;  i <= max ; i++ ) {
            this.arr.push(i) ;
        }

        this.minIndx = 0;
        this.maxIndx = this.arr.length-1;

    }

    guess(type = '') {
        let midIndex = Math.round((this.minIndx+this.maxIndx) / 2);
        this.midIndex = midIndex;
        return this.arr[midIndex];
    }

    lower() {
        this.maxIndx = this.midIndex;
    }

    greater() {
        this.minIndx = this.midIndex;
    }
}

module.exports = GuessingGame;
