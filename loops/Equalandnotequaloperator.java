import java.util.Scanner;
class Equalandnotequaloperator{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter first number:");
int n1=sc.nextInt();
System.out.println("enter seccond  number:");
int n2=sc.nextInt();
if(n1==n2)
{
System.out.print("given numbers are equal");
}
else if (n1!=n2)
{
System.out.print("given numbers are not  equal");
}
}
}

output:
enter first number:
10
enter seccond  number:
20
given numbers are not  equal

enter first number:
10
enter seccond  number:
10
given numbers are equal