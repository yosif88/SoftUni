class Stringer{
    constructor(str, len){
        this.innerString = str;
        this.innerLength = len;

    }
    increase(length){
        this.innerLength += length;
    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
        
    }

    toString(){
        if (this.innerLength == 0){
          
            return this.innerString.substring(0, this.innerLength) + '...';

        }else if(this.innerString.length > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + '...';
        }
        
            return this.innerString
        
    }
}