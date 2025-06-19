import java.util.Scanner;
class Switchcase{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter a   number:");
int n=sc.nextInt();
int rem=n%2;
switch(rem)
{
case(0):  System.out.print(n+" "+"is  a Even number");
                                     break;
default:  System.out.print(n+" "+"is  a odd number");
                                     break;
}
}
}
 
output:
enter a   number:
12
12 is  a Even number

enter a   number:
23
23 is  a odd number

