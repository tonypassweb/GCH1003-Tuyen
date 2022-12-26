import java.util.Random;

public class okok {
    public static void main(String[] args) {
        int n = 70;
        long mem[] = new long[n+1];

        fib_mem(n, mem);
        for (long l : mem) {
            System.out.println(l);
        }

        int arr[] = new int[n];
        Random random = new Random();
        for (int i =0; i < arr.length; i++){
            arr[i] = random.nextInt(21);
            System.out.println(arr[i] + " ");
        }
        System.out.println();

        int brr[] = selection_sort(arr);
    }

    public static long fib_mem(int n, long[] mem) {
        if (n <= 2) {
            mem[n] = 1;
        }
        else {
            if (mem[n] == 0) {
                mem[n] = fib_mem(n-1, mem) + fib_mem(n-2, mem);
            }
        }
        return mem[n];
    }

    public static long fib(int n ) {
        if (n <= 2) return 1;
        return fib(n-1) + fib(n-2);
    }

    public static int selection_sort(int[] arr) {
        int brr[] = Arrays.copyOf(arr,arr.length)
        int n = arr.length;
        for (int i = 0; i < n - 2; i++) {
            int index = findMin(arr, i);
            swap(arr, i, index);
            }
            return brr;
        }
    public static void swap(int[] arr, int i, int index){
        int temp = arr[i];
        arr[i] = arr[index]
        arr[index] = temp;
    }
    public static int findMin(int[] arr, int i){
        int index-mint = i;
        for(int j = i+1; j < arr.length, j++){
            if(arr[index_min] > arr[j]) {
                index_min = j;
            }
            return index_min;
        }
    }    
}

