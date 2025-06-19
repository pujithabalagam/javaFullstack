import java.util.Scanner;
class Evenorodd{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter a number:");
int n=sc.nextInt();
 int i;
for(i=1;i<=n;i++)
{
if(i%2==0)
{
System.out.println(i+" is a even number");
}
else
{
System.out.println(i+" is a odd number");
}
}
}
}
output:
enter a number:
20
1 is a odd number
2 is a even number
3 is a odd number
4 is a even number
5 is a odd number
6 is a even number
7 is a odd number
8 is a even number
9 is a odd number
10 is a even number
11 is a odd number
12 is a even number
13 is a odd number
14 is a even number
15 is a odd number
16 is a even number
17 is a odd number
18 is a even number
19 is a odd number
20 is a even number