// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 1) {
            matrix[i] = matrix[i].sort((a, b) => b - a);
        }
        for (let item of matrix[i]) {
            result.push(item);
        }
    }

    return result;
};
