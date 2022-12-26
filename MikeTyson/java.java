public class Main {
    public static void main(String[] args) {
        //Sum = 1 + 2 + 3 + ... + n
        int a = 20;
        int n = 150;
        //c1: Gaus equation
        int sum = (n+1) * n/2;
        //n là kích thước của dữ liệu đầu vào, T(n) là tổng phép toán mà máy phải thực hiện

        //Big 0: time complexity of solution 1 is 0(1) => constant time 
        System.out.println("Sum 01 =" + sum);
        //c2: I teration
        sum = tinh_tong(n);//call the function of tinh_tong()
        //pass the value of the function's parameter(s): Argument
        System.out.println("Sum 02 =" + sum);
        //c3: Recursion
        sum = tinh_tong_recursion(n);
        System.out.println("Sum 03 =" + sum);
        //sum even numbers
        if (a%2 != 0) a++;
        if (n%2 != 0) n--;
        sum = sum_even(a,n);
        System.out.println("Sum 04 =" + sum);
    }
    //calculate sum of the first 'a' number, and returns the result as an interger
    private static int tinh_tong(int a) { //Iterative function
        int sum=0;
        for(int i=1; i<=n; i++){
            sum += i;
        }
        return sum;//retuned value => se la int 
    }
    private static int tinh_tong_recursion(int a) { //Recursion function
        if(a==1) return 1;
        else return tinh_tong_recursion(a-1) + a;
    }
    private static int sum_even(int a, int b) {
        if(a==b){
            return a;
        }
        return sum_even(a,b-2)+b; //a=10, b=20 => 10+20, 10+18, 10+16, 10+14, ...
    }
}
