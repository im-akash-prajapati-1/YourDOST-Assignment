
public class SecondLargestUnique {
    public static int secondLargestUnique(int[] nums) {
        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : nums) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num < largest) {
                second = num;
            }
        }

        return second == Integer.MIN_VALUE ? -1 : second;
    }

    public static void main(String[] args) {
        System.out.println(secondLargestUnique(new int[]{3, 5, 2, 5, 6, 6, 1})); // 5
        System.out.println(secondLargestUnique(new int[]{7, 7, 7}));            // -1
    }
}
