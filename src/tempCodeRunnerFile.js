class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for (const element of arr) {
      if (Array.isArray(element)) {
        const nestedDepth = this.calculateDepth(element) + 1;
        depth = Math.max(depth, nestedDepth);
      }
    }
       return depth;
  }
}
const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));