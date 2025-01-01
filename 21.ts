/**
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function print(list: ListNode | null) {
    if (!list) {
        console.log([]);
        return;
    }
    let eles = [list.val];
    let cur = list.next;
    while (cur) {
        eles.push(cur.val);
        cur = cur.next;
    }
    console.log(eles);
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (!list1 && !list2) {
        return null;
    }

    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    let head: ListNode;
    let mergeCurrent: ListNode;
    let current1: ListNode | null = list1;
    let current2: ListNode | null = list2;

    if (current1.val <= current2.val) {
        head = new ListNode(current1.val, null);
        current1 = current1.next;
    } else {
        head = new ListNode(current2.val, null);
        current2 = current2.next;
    }

    mergeCurrent = head;

    while (true) {
        if (!current1) {
            mergeCurrent.next = current2;
            break;
        }
        if (!current2) {
            mergeCurrent.next = current1;
            break;
        }

        if (current1.val <= current2.val) {
            mergeCurrent.next = new ListNode(current1.val, null);
            mergeCurrent = mergeCurrent.next;
            current1 = current1.next;
        } else {
            mergeCurrent.next = new ListNode(current2.val, null);
            mergeCurrent = mergeCurrent.next;
            current2 = current2.next;
        }
    }

    return head;
}

const list1 = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4)))
);
const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));

print(mergeTwoLists(list1, list2));
