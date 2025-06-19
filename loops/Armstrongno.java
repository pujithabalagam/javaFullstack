import java.util.Scanner;
import java.lang.Math;
class Armstrongno{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter a   number:");
int a=sc.nextInt();
int temp=a;
int b;
int sum=0;
int len = String.valueOf(a).length();
while(temp!=0)
{
b=temp%10;
sum+=Math.pow(b,len);
 temp=temp/10;
}
if(sum==a)
{
System.out.println(a+" is a armstrong number");
}
else
{
System.out.println(a+" is not a armstrong number");
}
}
}
output:
enter a   number:
370
370 is a armstrong number

