function bunnyEars(bunnies) {
    // Base case: if bunnies == 0, just return 0.
    if (bunnies == 0) {
        return 0;
    }
    // Recursive case: return 2 (for the current bunny's ears) + ears from the rest
    return 2 + bunnyEars(bunnies - 1);
}

// Test cases
console.log(bunnyEars(0)); // should give 0
console.log(bunnyEars(1)); // should give 2
console.log(bunnyEars(2)); // should give 4
console.log(bunnyEars(3)); // should give 6
console.log(bunnyEars(4)); // should give 8
