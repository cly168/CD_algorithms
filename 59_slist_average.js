function ListNode(val){
	this.val = val;
	this.next = null;
}
function SListavg(){
	this.head = null;
	this.avg = function(ListNode){
		var node = ListNode;
		var sum = 0;
		var count = 0;
		while(node){
			sum += node.val;
			count++;
			node = node.next;
		}
		var avg = sum/count;
		return avg;
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

var list = new SListavg();
for(var i =0 ; i < 10; i++){
	list.addFront(i);
}
console.log(list.avg(list.head));