class Pattern9
{
 public static void main(String[]args)
 {
   for(int i=1;i<=5;i++)
{
  for(int j=1;j<=5-i;j++)
{
  System.out.print(" ");
}
for(int k=1;k<=i;k++)
{
System.out.print((2*k)+" ");
}
System.out.println();
}
}
}


/*
OUTPUT:
     2
   2 4
  2 4 6
 2 4 6 8
2 4 6 8 10
*/