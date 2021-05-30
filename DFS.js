class Node{
    constructor(data) {
        this.data=data;
        this.children=[];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data) {
        this.childre = this.childre.filter(child => child.data === data ? false : true);
    }
}

class Tree{
    constructor() {
        this.root=null;
    }

    BFS(fn){
        if(this.root === null) return;

        const unvisitedQueue = [this.root];
        while(unvisitedQueue.length !== 0){
            const current = unvisitedQueue.shift(); // dequeue
            unvisitedQueue.push(...current.children);  // 현재 부모 노드의 자식들을 모두 다 큐에 담는다.
           fn(current);      // 현재 노드를 가지고 callback 함수 실행
        }
    }

    DFS(fn){
        if(this.root === null) return;

        const unvisitedList=[this.root];
        while(unvisitedList.length !== 0){
            const current = unvisitedList.shift();
            unvisitedList.unshift(...current.children);   // list 앞에다 넣어준다. (우선순위 : 내 자식들이 먼저)
            fn(current);
        }
    }
}

const lettersBFS=[];
const lettersDFS=[];
const t =new Tree();
t.root=new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.BFS(node => lettersBFS.push(node.data));
t.DFS(node=> lettersDFS.push(node.data));

console.log(lettersBFS);
console.log(lettersDFS);

