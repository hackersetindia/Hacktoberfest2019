#include<stdio.h>
int main()
{
	int n,i,j,temp;
	scanf("%d",&n);
	int a[n];
	printf("Enter the elements\n");
	for(i=0;i<n;i++)
	scanf("%d",(a+i));
	for(i=1;i<n;i++)
		for(j=0;j<i;j++)
		{
			if(a[i]<a[j])
			{
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	for(i=0;i<n;i++)
	printf("%d ",a[i]);
}