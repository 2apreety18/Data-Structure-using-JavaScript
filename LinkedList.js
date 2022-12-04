function Node (value) {
    this.value = this.value;
    this.next = null;
}

function LinkedList(){
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.addTohead = function(value) {
    const node = new Node(value);
    if(!this.head) {
        this.head = this.tail = node;
    } else {
        const prevHead = this.head;
        node.next = prevHead;
        this.head = node;
    }
    return true;
}

LinkedList.prototype.addToTail = function(value){
    const node = new Node(value);
    if(!this.head){
        this.head= this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    return true;
}

LinkedList.prototype.contains = function(value){
    let node = this.head;
    while(node){
        if(node.value === value){
            return true;
        }
        node = node.next;
    }
    return false;
}

LinkedList.prototype.removeHead = function() {
    if(!this.head) return null;
    const prevhead = this.head;
    if(prevhead.next){
        this.head = prevhead.next;
        return prevhead;
    }else{
        this.head = this.tail = null;
    }
}

let list = new LinkedList();
list.addTohead("hello");
list.addTohead("world");
list.addTohead("in");
list.addToTail("javaScript");
console.log(list);
