var nums = [3, 2, 2, 3];
var removeElement = function (nums, val) {
	var move = function (index, arr) {
		for (let i = index; i < arr.length; i++)
			arr[i] = arr[i + 1];
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			move(i, nums);
			i--;
		}
	}
	return nums;
};

console.log(removeElement(nums, 3));