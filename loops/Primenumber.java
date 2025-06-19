import java.util.Scanner;
class Primenumber{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter a   number:");
int n=sc.nextInt();
int count=0;
for(int i=2;i<n;i++)
{
 if(n%i==0)
 {
 count++;
 }
}
if(count==0)
{
System.out.println(n+" "+"is a prime number");
}
else
{
System.out.println(n+" "+"is not a prime number");
}
}
}


output: enter a   number:
123
123 is not a prime number

enter a   number:
83
83 is a prime number

