function Slistaddback(){
	this.head = null;
	this.addback = function(val){
		if(this.head != null;){
			var node = this.head;		
			while(node.next){
				node = node.next;
		}
			node.next = new ListNode(val);
		else{
			this.head = new ListNode(val);
		}
	}
}