function ListNode(val){
	this.val = val;
	this.next = null;
}
function min(){
	this.head = null;
	this.min = function(ListNode){
		var node = ListNode
		var min = node.val
		while(node){
			if(node.val < min){
				min = node.val;
			}
			node = node.next;
		}
		return min;
	}
	this.addFront = function(val){
		var node =  new ListNode(val);
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

var list = new min();
for(var i =-3; i < 10; i++){
	list.addFront(i);
}
console.log(list.min(list.head));