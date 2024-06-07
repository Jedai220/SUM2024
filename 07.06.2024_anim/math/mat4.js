// 4 x 4 matrix handle description type
export class mat4 {
    constructor (a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4){
        this.M = [[a1, a2, a3, a4],[b1, b2, b3, b4],[c1, c2, c3, c4],[d1, d2, d3, d4]];
        this.isMatrix = true;
    }    
    // create 4 x 4 matrix
    newMat4() {
        let a = localMat4(arguments);
        return a;
    }

    // multiple 4 x 4  function
    mat4MulMat4() {
        let a = localMat4MulMat4(arguments) ;
        return a;
    }

    // transpose 4 x 4  matrix 
    Mat4Transpose() {
        let a = localMat4Transpose(arguments) ;
        return a;
    }

    // matrix determinant calculating function
    Mat4Determinant() {
        let a = localMat4Determinant(arguments) ;
        return a;
    }  
}

/** Local matrix function description **/

// create matrix function
function localMat4() {
    let a = arguments[0];
    console.log(a[0]);
    return new mat4(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
} // end of 'localMat4' function

// multiple matrix function
function localMat4MulMat4() {
    if (typeof arguments[0] != 'object' || typeof arguments[1] != 'object' || arguments[0].isMatrix == false || arguments[1].isMatrix == false || typeof arguments[0].M[0][0] == 'undefined' || typeof arguments[1].M[0][0] == 'undefined') {
        console.log("EXCEPTION!!! multiple matrix");
        return;
    }

    console.log(typeof arguments[0].M[0][0]);

    let b = arguments[0],
        a = arguments[1];

    console.log("matrix mul matrix passed the test");
    return new mat4(a.M[0][0] * b.M[0][0] + a.M[0][1] * b[1][0] + a.M[0][2] * b.M[2][0] + a.M[0][3] * b[3][0],
                    a.M[0][0] * b.M[0][1] + a.M[0][1] * b[1][1] + a.M[0][2] * b.M[2][1] + a.M[0][3] * b[3][1],
                    a.M[0][0] * b.M[0][2] + a.M[0][1] * b[1][2] + a.M[0][2] * b.M[2][2] + a.M[0][3] * b[3][2],
                    a.M[0][0] * b.M[0][3] + a.M[0][1] * b[1][3] + a.M[0][2] * b.M[2][3] + a.M[0][3] * b[3][3],
                    a.M[1][0] * b.M[0][0] + a.M[1][1] * b[1][0] + a.M[1][2] * b.M[2][0] + a.M[1][3] * b[3][0],
                    a.M[1][0] * b.M[0][1] + a.M[1][1] * b[1][1] + a.M[1][2] * b.M[2][1] + a.M[1][3] * b[3][1],
                    a.M[1][0] * b.M[0][2] + a.M[1][1] * b[1][2] + a.M[1][2] * b.M[2][2] + a.M[1][3] * b[3][2],
                    a.M[1][0] * b.M[0][3] + a.M[1][1] * b[1][3] + a.M[1][2] * b.M[2][3] + a.M[1][3] * b[3][3],
                    a.M[2][0] * b.M[0][0] + a.M[2][1] * b[1][0] + a.M[2][2] * b.M[2][0] + a.M[2][3] * b[3][0],
                    a.M[2][0] * b.M[0][1] + a.M[2][1] * b[1][1] + a.M[2][2] * b.M[2][1] + a.M[2][3] * b[3][1],
                    a.M[2][0] * b.M[0][2] + a.M[2][1] * b[1][2] + a.M[2][2] * b.M[2][2] + a.M[2][3] * b[3][2],
                    a.M[2][0] * b.M[0][3] + a.M[2][1] * b[1][3] + a.M[2][2] * b.M[2][3] + a.M[2][3] * b[3][3],
                    a.M[3][0] * b.M[0][0] + a.M[3][1] * b[1][0] + a.M[3][2] * b.M[2][0] + a.M[3][3] * b[3][0],
                    a.M[3][0] * b.M[0][1] + a.M[3][1] * b[1][1] + a.M[3][2] * b.M[2][1] + a.M[3][3] * b[3][1],
                    a.M[3][0] * b.M[0][2] + a.M[3][1] * b[1][2] + a.M[3][2] * b.M[2][2] + a.M[3][3] * b[3][2],
                    a.M[3][0] * b.M[0][3] + a.M[3][1] * b[1][3] + a.M[3][2] * b.M[2][2] + a.M[3][3] * b[3][3],
    );
} // end of 'localMat4MulMat4' function.

// matrix transpose function
function localMat4Transpose(a) {
    let m = a[0];
    if (typeof m != 'object' || m.isMatrix == false || typeof m.M[0][0] == 'undefined') {
        console.log("EXCEPTION!!! transpose matrix");    
        return;
    }

    return new mat4(m.M[0][0], m.M[1][0], m.M[2][0], m.M[3][0],
                    m.M[0][1], m.M[1][1], m.M[2][0], m.M[3][1],
                    m.M[0][2], m.M[1][2], m.M[2][0], m.M[3][2],
                    m.M[0][3], m.M[1][3], m.M[2][0], m.M[3][3]);
}


// calculating 3 x 3  determinant function
function localMat3Determinant(a11, a12, a12, a21, a22, a23, a31, a32, a33) {
    let d = a11 * a22 * a33 - a11 * a23 * a32 + a12 * a23 * a31 - a12 * a21 * a33 +
         a13 * a21 * a32 - a13 * a22 * a31;
    return d; 
} // end of 'localMat3Determinant' function

// calculating 4 x 4 determinant function
function localMat4Determinant(a) {
    let m = a[0];
    if (typeof m != 'object' || m.isMatrix == false || typeof m.M[0][0] == 'undefined') {
        console.log("EXCEPTION!!! transpose matrix");    
        return;
    }

    return (+m.M[0][0] * localMat3Determinant(m.M[1][1], m.M[1][2], m.M[1][3],
                                    m.M[2][1], m.M[2][2], m.M[2][3],
                                    m.M[3][1], m.M[3][2], m.M[3][3]) +
            -m.M[0][1] * localMat3Determinant(a.M[1][0], a.M[1][2], a.M[1][3],
                                    m.M[2][0], m.M[2][2], m.M[2][3],
                                    m.M[3][0], m.M[3][2], m.M[3][3]) +
            +m.M[0][2] * localMat3Determinant(m.M[1][0], m.M[1][1], m.M[1][3],
                                    m.M[2][0], m.M[2][1], m.M[2][3],
                                    m.M[3][0], m.M[3][1], m.M[3][3]) +
            -m.M[0][3] * localMat3Determinant(m.M[1][0], m.M[1][1], m.M[1][2],
                                    m.M[2][0], m.M[2][1], m.M[2][2],
                                    m.M[3][0], m.M[3][1], m.M[3][2]));
} // end of 'localMat4Determinant' function

let a = new mat4(1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11,12,13,14,15,16);

a = localMat4Determinant(a);

export default new mat4; 

console.log("mat4.js completed");