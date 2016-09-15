function Node(val){
	this.val = val;
	this.next = null;
}

function sLList(){
	this.head = null;
	this.removeFront = function(){
		if(!this.head){
			return null;
		}
		else{
			 this.head = this.head.next;
		}
		return this.head;
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
for(var i = 0 ; i < 1; i++){
	list.addFront(i);
}
console.log(list);
console.log(list.removeFront());