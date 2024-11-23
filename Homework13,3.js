function permute(arr) {
  const results = [];

  function generatePermutation(current, remaining) {
    if (remaining.length === 0) {
      results.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = [...current, remaining[i]];
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      generatePermutation(newCurrent, newRemaining);
    }
  }

  generatePermutation([], arr);
  return results;
}