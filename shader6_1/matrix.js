class Matrix {

    constructor(){
        this.IDENTITY = [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]];
        this.data = [this.__copy(this.IDENTITY)];
        this.sp = 0;
    }

    translate(x, y, z) {
        let T = [[1,0,0,0], [0,1,0,0], [0,0,1,0], [x,y,z,1]];
        this.__mul(T);
    }

    rotateX(theta) {
        let T = [[1,0,0,0], [0,Math.cos(theta),Math.sin(theta),0], [0,-Math.sin(theta),Math.cos(theta),0], [0,0,0,1]];
        this.__mul(T);
    }

    rotateY(theta) {
        let T = [[Math.cos(theta),0,-Math.sin(theta),0], [0,1,0,0], [Math.sin(theta),0,Math.cos(theta),0], [0,0,0,1]];
        this.__mul(T);
    }

    rotateZ(theta) {
        let T = [[Math.cos(theta),Math.sin(theta),0,0], [-Math.sin(theta),Math.cos(theta),0,0], [0,0,1,0], [0,0,0,1]];
        this.__mul(T);
    }

    scale(x, y, z) {
        let T = [[x,0,0,0], [0,y,0,0], [0,0,z,0], [0,0,0,1]];
        this.__mul(T);
    }

    save() {
        let temp = this.__copy(this.data[this.sp]);
        this.data[++this.sp] = temp;
    }

    restore() {
        this.sp--;
    }
    
    value() {
        let temp = this.__copy(this.data[this.sp])
        return temp.flat();
    }

    __copy(arr) {
        let result = [];
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                result.push(element.slice());
            }
            else if (typeof element === 'number') {
                result.push(element);
            }
        });
        return result;
    }

    __mul(T) {
        let temp = [];
        let M = this.__transpose(this.data[this.sp]);
        let j = 0;
        M.forEach((eleM) => {
            let k = 0;
            T.forEach((eleT) => {
                let ij = 0;
                for (let i=0; i<M[0].length; i++) {
                    ij += eleM[i] * eleT[i];
                }
                this.data[this.sp][k][j] = ij;
                k++;
            });
            j++;
        });
    }

    __transpose(M) {
        let result = [];
        for (let i=0; i<M[0].length; i++) {
            result[i] = [];
            M.forEach(function(element) {
                result[i].push(element[i]);
            });
        }
        return result;
    }
}