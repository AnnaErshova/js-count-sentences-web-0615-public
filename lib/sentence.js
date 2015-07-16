'use strict';

var countSentences = function(sentences){
  return sentences.split(/\!|\?|\.\s|\./).length-1;
};

