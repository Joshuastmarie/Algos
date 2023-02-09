/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    const head = list1.val < list2.val ? list1 : list2;
    while (true) {
        if (list1.val < list2.val) {
            if (!list1.next) { list1.next = list2; return head; }
            else if (list1.next.val < list2.val) list1 = list1.next;
            else {
                const temp = list1;
                list1 = list1.next;
                temp.next = list2;
            }
        } else {
            if (!list2.next) { list2.next = list1; return head; }
            else if (list2.next.val < list1.val) list2 = list2.next;
            else {
                const temp = list1.next;
                list1.next = list2.next;
                list2.next = list1;
                list1 = temp;
                list2 = list2.next;
                if (!list1) return head;
            }
        }
    }
};


const a3 = new ListNode(4, null);
const a2 = new ListNode(2, a3);
const a1 = new ListNode(1, a2);

const b3 = new ListNode(4, null);
const b2 = new ListNode(3, b3);
const b1 = new ListNode(1, b2);

let runner = mergeTwoLists(a1, b1);
while (runner) {
    console.log(runner.val);
    runner = runner.next;
}