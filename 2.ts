/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

type ListNode = {
    val: number;
    next: ListNode | null;
};

function arrayToListNode(ar: number[]) {
    return ar.reduce<ListNode | null>((acc, curr) => {
        if (acc === null) {
            return {
                val: curr,
                next: null,
            };
        } else {
            acc.next = {
                val: curr,
                next: null,
            };

            return acc;
        }
    }, null);
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let head: ListNode = {
        val: 0,
        next: null,
    };
    let p = l1;
    let q = l2;
    let current = head;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = p?.val ?? 0;
        let y = q?.val ?? 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);

        current.next = {
            next: null,
            val: sum % 10,
        };

        current = current.next;

        p = p?.next ?? null;
        q = q?.next ?? null;
    }

    if (carry > 0) {
        current.next = {
            val: carry,
            next: null,
        };
    }

    return head.next;
}
