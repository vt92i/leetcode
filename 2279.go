// 2279. Maximum Bags With Full Capacity of Rocks

package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println(maximumBags([]int{10, 2, 2}, []int{2, 2, 0}, 100))
}

func maximumBags(capacity []int, rocks []int, additionalRocks int) int {
	var diff []int
	var result int

	for i := 0; i < len(capacity); i++ {
		diff = append(diff, capacity[i]-rocks[i])
	}
	sort.Ints(diff)

	for i := 0; i < len(diff); i++ {
		for diff[i] != 0 && additionalRocks > 0 {
			var n int = 1
			if additionalRocks > diff[i] {
				n = diff[i]
			}
			diff[i] -= n
			additionalRocks -= n
		}
		if diff[i] == 0 {
			result++
		}
	}

	return result
}
