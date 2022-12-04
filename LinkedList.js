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

class DoublyLinkedList extends LinkedList{
    addToHead(value){
      const prevhead = this.head; // storing before the change
      super.addTohead(value);
      if(prevhead) prevhead.prev = this.head;
      return true;
    }
    addToTail(){
      const prevTail = this.tail;
      super.addToTail(value);
      if(prevTail) this.tail.prev = prevTail;
      return true;
    }
    removeHead(){
      const res = super.removeHead();
      //accessing the newHead to nullify the prev pointer
      if(this.head && this.head.prev) this.head.prev = null;
      return res;
    }
    removeTail(){
      if(!this.tail) return null;

      const prevTail = this.tail;
      if(this.tail === this.head) this.tail = this.head = null;
      else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return prevTail.value;
    }
  }