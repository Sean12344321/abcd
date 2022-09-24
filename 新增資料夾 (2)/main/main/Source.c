#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
main() {
	int a, b, c, d;
	scanf("%d%d%d%d", &a, &b, &c, &d);
	int area = (c - a) * (d - b);
	int p = 2 * ((c - a) + (d - b));
	printf("%d\n%d", area, p);
}