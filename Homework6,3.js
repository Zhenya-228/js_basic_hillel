function camelCase(str, separator) {
  const words = str.split(separator);
  words[0] = words[0].toLowerCase(); // Перше слово в нижньому регістрі

  for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return words.join('');
}

console.log(camelCase("tYTUHre_irirReleg hghggh oigokoj ffkgokro e", " "))


