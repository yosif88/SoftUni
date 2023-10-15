(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1];

    };
    Array.prototype.skip = function (n) {
        let firstElArr = this.slice(n).map(x => Number(x));
        return firstElArr;
    };

    Array.prototype.take = function (n) {
       
          return this.slice(0, n);
           
        
    };

    Array.prototype.sum = function () {
        return this.reduce((acc, a) => acc + a, 0);
    }
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }

})()
