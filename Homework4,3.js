function tree(height) {
  let painting = '';
  for (let i = 1; i <= height; i++) {
      painting += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + '\n'; 
  }
  console.log(painting);
}
tree(prompt("Введіть висоту ялинки"));