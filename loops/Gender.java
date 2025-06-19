import java.util.Scanner;
class Gender{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in);
System.out.println("enter your gender :");
 char g=sc.next().charAt(0);

switch(g )
{
case 'm':
case 'M':  System.out.print("Male");
                   break;
case  'f':
case 'F':  System.out.print("Female");
                                     break;
default:  System.out.print("invalid gender");
                                     break;
}
}
}

output:
enter your gender   number:
female
Female

enter your gender   number:
male
Male

enter your gender   number:
other
invalid gender