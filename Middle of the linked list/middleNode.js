

    /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
Runtime: 145 ms
Memory Usage: 46.7 MB
*/

var middleNode = function(head) {
    let mid = head;
    let finish = head;
    while(finish && finish.next !== null || undefined){
        mid = mid.next;
        finish = finish.next.next;
    }
    return mid
};
    