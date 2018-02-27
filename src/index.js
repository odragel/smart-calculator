class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.initialValue = initialValue;
        this.elements =[];

    }

    add(number) {
        // your implementation
        this.elements.push({operand: "+", curNumber: number});
        return this;
    }

    subtract(number) {
        // your implementation
        this.elements.push({operand: "-", curNumber: number});
        return this;
    }

    multiply(number) {
        // your implementation
        this.elements.push({operand: "*", curNumber: number});
        return this;
    }

    devide(number) {
        // your implementation
        this.elements.push({operand: "/", curNumber: number});
        return this;
    }

    pow(number) {
        // your implementation
        this.elements.push({operand: "pow", curNumber: number});
        return this;
        }

    toString() {
        var result="";
        while(this.elements.length > 0){
          var curEl =this.elements.pop();
          if(curEl.operand != "pow"){
            result = curEl.operand + curEl.curNumber + result;
          }else{
            if(this.elements.length > 0){
                this.elements[this.elements.length - 1].curNumber = "Math.pow("+this.elements[this.elements.length - 1].curNumber+","+curEl.curNumber+")";
            } else{
                result = "Math.pow("+this.initialValue+","+curEl.curNumber+")" + result;
                this.initialValue = null;
            }
          }
        }
        if(this.initialValue!= null){
            result=this.initialValue+result;
        }


        return eval(result);


    }

}

module.exports = SmartCalculator;
