function Node(val){
	this.val = val;
	this.next = null;
}
function sLList(){
	this.head;
	this.addFront = function(val){
		var node = new Node(val);
		if(!this.head){
			this.head = node;
		}
		else{
			node.next = this.head;
			this.head = node;
		}
		return this.head;
	}
}
list = new sLList();
console.log(list.head);
list.addFront(2);
console.log(list.head);
list.addFront(3);
console.log(list.head)
// console.log(list.head)
