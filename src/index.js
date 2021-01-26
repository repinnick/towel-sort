module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let array = new Array();
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 1)
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                if (!(matrix[i][j] === undefined)) array.push(matrix[i][j]);
            }
        else {
            for (let j = 0; j < matrix[i].length; j++) {
                if (!(matrix[i][j] === undefined)) array.push(matrix[i][j]);
            }
        }
    }
    return array;
};
