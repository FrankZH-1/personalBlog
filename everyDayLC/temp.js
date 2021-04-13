function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var buildTree = function (preo, ino) {
	var node = new TreeNode();
	node.val = preo.shift();
	var leftIno = [];
	var rightIno = [];
	for (let i = 0; i < ino.length; i++) {
		if (ino[i] === node.val) {
			leftIno = ino.slice(0, i);
			rightIno = ino.slice(i + 1);
		}
	}
	var leftPreo = preo.slice(0, leftIno.length);
	var rightPreo = preo.slice(leftIno.length);
	node.left = leftIno.length ? buildTree(leftPreo, leftIno) : null;
	node.right = rightIno.length ? buildTree(rightPreo, rightIno) : null;
	return node;
};

var minDiff = function (RootNode) {
	var val = [];
	var diff = 1000000;
	var getVal = function (TreeNode) {
		if (!TreeNode)
			return null;
		else {
			getVal(TreeNode.left);
			val.push(TreeNode.val);
			getVal(TreeNode.right);
			return null;
		}
	};
	getVal(RootNode);
	for (var i = 0; i < val.length; i++) {
		for (var j = i + 1; j < val.length; j++) {
			var temp = val[i] - val[j] > 0 ? val[i] - val[j] : val[j] - val[i];
			diff = diff < temp ? diff : temp;
		}
	}
	return diff;
}

minDiff(buildTree([20, 3, 7, 5, 11, 13], [7, 3, 20, 11, 5, 13]));

// console.log(123);