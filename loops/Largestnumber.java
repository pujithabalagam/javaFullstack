import java.util.Scanner;
class Largestnumber{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter a  first number:");
int n1=sc.nextInt();
System.out.println("enter a  second number:");
int n2=sc.nextInt();
System.out.println("enter a  third number:");
int n3=sc.nextInt();
if(n1>n2 && n1>n3)
{
System.out.println(n1+" is the largest number");
}
else if(n2>n1 && n2>n3)
{
System.out.println(n2+" is the largest number");
}
else if(n3>n1 && n3>n2)
{
System.out.println(n3+" is the largest number");
}
else if(n1==n2 && n1>n3)
{
System.out.println(n1+ " "+n2+" is the largest number");
}
else if(n1==n3 && n1>n2)
{
System.out.println(n1+" "+n3+" is the largest number");
}
else if(n2==n3 && n2>n1)
{
System.out.println(n2+" "+n3+" is the largest number");
}
else if(n1==n3 && n1<n2)
{
System.out.println(n2+" is the largest number");
}
else if(n2==n3 && n2<n1)
{
System.out.println(n1+" is the largest number");
}
else if(n1==n3 && n1<n2)
{
System.out.println(n2+" is the largest number");
}
else
{
System.out.println("given three numbers are equal ");
}
}
}
output:
enter a  first number:
20
enter a  second number:
90
enter a  third number:
10
90 is the largest number
