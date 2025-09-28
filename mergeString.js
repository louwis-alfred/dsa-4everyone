var mergeAlternately = function (word1, word2) {
    let answer = "";
    let i = 0
    let j = 0

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            answer += word1[i]
            i++
        }

        if (j < word2.length) {
            answer += word2[j]
            j++
        }
    }

    return answer

};