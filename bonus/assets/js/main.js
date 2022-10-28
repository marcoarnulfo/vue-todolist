console.log("hello");




/*

Rifare l'esercizio della to do list. 
//Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//text, una stringa che indica il testo del todo
//done, un booleano (true/false) che indica se il todo è stato fatto oppure no

*/



const { createApp } = Vue

createApp({
    data() {
        return {
            error: false,
            message: 'Hello Vue!',
            todoList: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Studiare VUE',
                    done: false
                },
                {
                    text: 'Allenarsi',
                    done: false
                },
                {
                    text: 'Preparare cena',
                    done: false
                },
            ]
        }
    },
    methods: {
        done(i) {
            this.todoList[i].done = !this.todoList[i].done
        },
        test(i) {
            console.log("funziono");
            console.log(this.todoList[i].text);
            this.todoList.splice(i, 1)
            //document.querySelectorAll('span').classList.add("hide")
        },
        addNew() {
            if (this.newTask.length < 5) {
                console.log("erroe");
                this.error = true
            } else {
                const obj = { text: this.newTask, done: false }
                this.todoList.unshift(obj)
                this.newTask = ""
            }

        }
    }
}).mount('#app')
