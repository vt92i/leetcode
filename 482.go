// 482. License Key Formatting

package main

import "strings"

func licenseKeyFormatting(s string, k int) string {
	licenseKey := strings.ToUpper(strings.Join(strings.Split(s, "-"), ""))

	for i := len(licenseKey) - k; i > 0; i -= k {
		licenseKey = licenseKey[:i] + "-" + licenseKey[i:]
	}

	return licenseKey
}
