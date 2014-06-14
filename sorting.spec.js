describe("Bubble Sort", function() {
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it("handles an array with a single element", function() {
        expect(bubbleSort([10])).toEqual([10]);
    });

    it("handles an array with multiple elements", function() {
        expect(bubbleSort([99, 3, 10, 47, 0])).toEqual([0, 3, 10, 47, 99]);
    });
});

describe("Merge Sort", function() {
    it("is able to merge two arrays", function() {
        // test the merging algorithm
        expect(merge([2], [1])).toEqual([1,2]);
        expect(merge([2], [1,3])).toEqual([1,2,3]);
        expect(merge([4,2], [1,3])).toEqual([1,2,3,4]);
    });

    it("able to split an array into two halves", function() {
        expect(split([1,3,4,2])).toEqual([[1,3],[4,2]]);
        expect(split([1,3,4,2,0])).toEqual([[1,3],[4,2,0]]);
    });

    it("is able to sort an array", function() {
      expect(mergeSort([99, 3, 10, 47, 0])).toEqual([0,3,10,47,99]);
      expect(mergeSort([99,98,67,54,33,20,14,9,0])).toEqual([0,9,14,20,33,54,67,98,99]);
    })
});

