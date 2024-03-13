const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: [
                {
                    text: '',
                    done: false
                },
            ],

            tasks: [
                {
                    text: 'ciao',
                    done: true
                },
                {
                    text: 'arrivederci',
                    done: false
                },
                {
                    text: 'buonanotte',
                    done: true
                }
            ]
        }
    },

    methods: {
        /* funzione per aggiungere le task alla dom */
        addTask() {
            this.newTask.push({ ...this.newTodo });
            this.tasks.unshift(this.newTask)
            this.newTask = ''
        },
        /* funzione per eliminare le task dalla dom */
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        /* funzione per aggiunger una linea sulla task nel caso ci clicco */
        lineCheck(index) {
            this.tasks[index].done = !this.tasks[index].done
        }
    }
}).mount('#app')
