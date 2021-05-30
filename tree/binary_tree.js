class Node{
    constructor(data,left=null, right=null) {
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class BST{
    constructor() {
        this.root=null;
    }

    add(data){
        const node=this.root;
        if(node === null){
            this.root=new Node(data);
            return;
        }else{
            const searchTree=function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left =new Node(data);
                        return;
                    }else if(node.left !== null){
                        // left에 함수 있을 시 재귀 함수 적용
                        return searchTree(node.left);
                    }
                }else if(data > node.data){
                    if(node.right === null){
                        node.right=new Node(data);
                        return;
                    }else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    remove(data){
        // 제거할 data의 파라미터를 두번째에 놓았다.
        const removeNode=function(node,data){
            if(node === null){
                return null;
            }
            if(data === node.data){
                // node has no children
                if(node.left === null && node.right === null){
                    return null;
                }
                // node has no left child
                if(node.left === null){
                    return node.right;
                }
                // node has no right child
                if(node.right === null){
                    return node.left;
                }
                let tempNode=node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right=removeNode(node.right,tempNode.data);
                return node;
            }else if(data < node.data){
                node.left = removeNode(node.left,data);
                return node;
            }else{
                node.right = removeNode(node.right,data);
                return node;
            }
        }
        this.root=removeNode(this.root,data);
    }
}

const bst = new BST()
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
console.log(bst);