function Node(val){
	this.val = val;
	this.next = null;
}
function sLList(){
	this.head;

this.contains = function(val){
		if(!this.head){
			return false;
		}
		var current = this.head
		while(current){
			if(current.val == val){
				return true;
			}
			current = current.next;
		}
		return false;
	}
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
for(var i = 0 ; i < 100; i++){
	list.addFront(i);
}
console.log(list.contains(45));
console.log(list.contains(1));
console.log(list.contains(99));
console.log(list.contains(151));