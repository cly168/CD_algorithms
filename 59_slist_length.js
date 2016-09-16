function ListNode(val){
	this.val = val;
	this.next = null;
}
function SListlength(){
	this.head = null;
	this.length = function(ListNode){
		var count=0;
		var node = ListNode
		while(node){
			count++;
			node = node.next;
		}
		return count;
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

var list = new SListlength();
for(var i =0 ; i < 10; i++){
	list.addFront(i);
}
console.log(list.length(list.head));