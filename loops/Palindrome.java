import java.util.Scanner;
class Palindrome{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter a number:");
int n=sc.nextInt();
int temp=n;
int len=String.valueOf(n).length();
int s=0;
while(n!=0)
{
int r=n%10;
s=s*10+r;
n=n/10;
}
if(temp==s)
{
System.out.println(temp+"  is a palindrome"); 
}
else
{
System.out.println(temp+"  is not  a palindrome"); 
}
}
}
output:
enter a number:
121
121  is a palindrome

enter a number:
12345543
12345543  is not  a palindrome