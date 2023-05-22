function threeSum(arr, target) {
	// arr.sort();
	// write your code here
	let sum = 0;
	let ans = 0;
	let diff = 10000000000;

	/*for(let i=0; i<arr.length -2; i++) {
		for(let j=i+1; j<arr.length-1; j++) {
			for(let k=j+1; k<arr.length; k++) {
				
				sum = arr[i] + arr[j] + arr[k];
				
				if (diff > Math.abs(target - sum)) {
					diff = Math.abs(target - sum);
					ans = sum;
					if(ans == target)
						return ans;
				}
			}
		}
	}*///Time complexity : O(n^3);

	arr.sort(function(a,b){return a-b});
	
	for (let i = 0; i < arr.length - 2; i++) {
		let st = i + 1;
		let en = arr.length - 1;

		while (st < en) {
			sum = arr[i] + arr[st] + arr[en];

			if (diff > Math.abs(target - sum)) {
				diff = Math.abs(target - sum);
				ans = sum;
				if (ans == target)
					return ans;
			}

			if (sum > target)
				en--;
			else {
				st++;
			}
		}
	}
	
	return ans;
}

module.exports = threeSum;
