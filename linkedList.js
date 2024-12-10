const node = (value = null, next = null) => {
    return {
        value: value,
        next: next,
    }
}


const linkedList = (value) => {
    return {
        head: node(value),
        
        tail() {
            let index = this.head.next
            while (index.next != null) {
                index = index.next  
            }
            return index 
        },

        append(value) {
            let newNode = node(value);
            if (this.head.next == null) {
               return this.head.next = newNode;
            }
            let index = this.tail()
            return index.next = newNode;
        },

        prepend(value){
            let newNode = node(value)
            newNode.next = this.head;
            this.head = newNode;
        },

        size() {
            let index = this.head
            let size = 1;
            while (index.next != null) {
                index = index.next
                size++  
            }
            return size;
        },

        at(n) {
            let index = this.head
            for(let i = 0; i < n; i++) {
                if (index.next == null) {
                    return new Error("Out of Range")
                }
                index = index.next
            }
            return index;
        },

        pop() {
            let last = this.tail()
            let index = this.head
            while (index.next.value != last.value){
                index = index.next
            }
            index.next = null;
        },

        contains(value) {
            if (this.head.value == value) return true;
            let index = this.head
            while (index.next != null) {
                index = index.next
                if (index.value == value) {
                    return true;
                }
            }
            return false;
        },

        find(value) {
            let index = this.head
            let counter = 0;

            if (index.value == value) {
                return counter
            }
            while (index.next != null) {
                index = index.next
                counter ++
                if (index.value == value) {
                    return counter
                }
            }
            return null
        },
        
        toString() {
            let string = this.head.value 
            let index = this.head
            while (index.next != null) {
                index = index.next
                string += " -> "
                string += index.value
            }
            string += " -> "
            string += index.next
            console.log(string)
        },

        inserAt(value, i) {
            let index = this.head
            let goal = this.at(i)
            while (index.next != goal){
                index = index.next
            }
            index.next = node(value);
            index.next.next = goal;
        },

        removeAt(i) {
            let index = this.head
            let goal = this.at(i)
            while (index.next != goal){
                index = index.next
            }
            index.next = index.next.next
        }
    }
}

const list = linkedList("dog")
list.append("cat")
list.append("bun")
list.prepend("duckling")
list.append("meow")
list.pop()
list.toString()
console.log(list.at(3))
list.inserAt("OWA", 3)
console.log(list.at(3))
list.toString()
list.removeAt(3)
list.toString()