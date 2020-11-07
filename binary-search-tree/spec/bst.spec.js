describe("BST", () => {
  var bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });
  describe("insert", () => {
    it("should insert element with key 8 correctly", () => {
      expect(bst.insert({
        key: 8,
        data: {
          name: "number",
        },
      })).toBe(true);
    });
    it("should insert elements with key 8, 10, 3 correctly", () => {
      expect(bst.insert({
        key: 8,
        data: {
          name: "number",
        },
      })).toBe(true);;
      expect(bst.insert({
        key: 10,
        data: {
          name: "number",
        },
      })).toBe(true);
      expect(bst.insert({
        key: 3,
        data: {
          name: "number",
        },
      })).toBe(true);
    });
    it("should insert elements with key 8, 10, 3, 1, 6, 14, 13 correctly", () => {
      expect(bst.insert({
        key: 8,
        data: {
          name: "number",
        },
      })).toBe(true);
      expect(bst.insert({
        key: 10,
        data: {
          name: "number",
        },
      })).toBe(true);
      expect(bst.insert({
        key: 3,
        data: {
          name: "number",
        },
      })).toBe(true);
      expect(bst.insert({
        key: 1,
        data: {
          name: "number",
        },
      })).toBe(true);
      expect(bst.insert({
        key: 6,
        data: {
          name: "number",
        },
      })).toBe(true);
      expect(bst.insert({
        key: 14,
        data: {
          name: "number",
        },
      })).toBe(true);
      expect(bst.insert({
        key: 13,
        data: {
          name: "number",
        },
      })).toBe(true);
    });
  });
  describe("find", () => {
    it("should find 8 correctly in the tree", () => {
      bst.insert({
        key: 8,
        data: {
          name: "number"
        },
      });
      expect(bst.find(8)).toBe(true);
    });
    it("should find 8, 10, 3 correctly in the tree", () => {
      bst.insert({
        key: 8,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: "number",
        },
      });
      expect(bst.find(8)).toBe(true);
      expect(bst.find(10)).toBe(true);
      expect(bst.find(3)).toBe(true);
    });
    it("should find 8, 10, 3, 1, 6, 14, 13 correctly in the tree", () => {
      bst.insert({
        key: 8,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 10,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 3,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 1,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 6,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 14,
        data: {
          name: "number",
        },
      });
      bst.insert({
        key: 13,
        data: {
          name: "number",
        },
      });
      expect(bst.find(8)).toBe(true);
      expect(bst.find(10)).toBe(true);
      expect(bst.find(3)).toBe(true);
      expect(bst.find(1)).toBe(true);
      expect(bst.find(6)).toBe(true);
      expect(bst.find(14)).toBe(true);
      expect(bst.find(13)).toBe(true);
    });
  });
});
