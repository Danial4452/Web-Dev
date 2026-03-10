#SIX SEVEN 
def sum67(nums):
    sum = 0
    in_range = False
    for i in nums:
        if i == 6:
            in_range = True
        elif i == 7 and in_range:
            in_range = False
        elif not in_range:
            sum += i
    return sum