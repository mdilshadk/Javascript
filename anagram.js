function isAnagram(word1, word2) {
   
    const normalize = (str) => str.replace(/\s+/g, '').split('').sort().join('');
    
    return normalize(word1) === normalize(word2);
}
console.log(isAnagram("apple", "mango"));

