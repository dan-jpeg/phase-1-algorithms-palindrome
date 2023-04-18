function isPalindrome(word) {
  word = word.replace(/\s/g, '').toLowerCase();
  reverseWord = word.split('').reverse().join('')
 if (reverseWord === word) {
  return true
 } else { 
  return false
}}

module.exports = isPalindrome;