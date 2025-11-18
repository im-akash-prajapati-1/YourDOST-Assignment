def second_largest_unique(nums):
    largest = float('-inf')
    second = float('-inf')

    for num in nums:
        if num > largest:
            second = largest
            largest = num
        elif largest > num > second:
            second = num

    return second if second != float('-inf') else -1


# Test cases
print(second_largest_unique([3, 5, 2, 5, 6, 6, 1]))  # 5
print(second_largest_unique([7, 7, 7]))              # -1
