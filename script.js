function threeSum(arr, target) {
	// arr.sort();
	// write your code here
	let sum = 0;
	let ans = 0;
	let diff = 10000000000;
	/*for (let i = 0; i < 3; i++) {
		sum += arr[i];
	}
	diff = Math.abs(target - sum);
	let i = 3;
	let j = 0;
	ans = sum;
	while (i < arr.length) {
		sum += arr[i++];
		sum -= arr[j++];
		if (diff > Math.abs(target - sum)) {
			diff = Math.abs(target - sum);
			ans = sum;
		}
	}*/

	for(let i=0; i<arr.length -2; i++) {
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
	}
	
	return ans;
}

module.exports = threeSum;
