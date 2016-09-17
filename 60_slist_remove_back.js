function Slistremoveback(){
	this.head = null;
	this.removeback = function(){
		if(this.head != null){
			var node = this.head;
			while(node.next.next){
				node=node.next;
			}
			node.next = null;
		}
		else{
			this.head = null;
		}
	}
}