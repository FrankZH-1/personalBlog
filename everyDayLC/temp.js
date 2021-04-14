var Trie = function () {
	this.index = [];
};

Trie.prototype.insert = function (word) {
	if (word.length) {
		var wordArr = word.split('');
		var val = wordArr.shift();
		var newWord = wordArr.join('');
		if (this.index.indexOf(val)!=-1) {
			this.index.push(val);
			this.index[this.index.indexOf(val)] = new Trie();
			console.log(this.index[this.index.indexOf(val)]);
		}
	}
};

var Trie = new Trie();
Trie.insert('hello');