const App = {
    data() {
        return {
           counter: 0,
           title: 'Counter',
           titleIn: 'Notes',
           placeholderString: 'Enter what you want',
           warning: 'No more than 25 characters',
           inputValue: '',
           notes: [],
        }
    },

    methods: {
        inputChangeHandler(event) {
           console.log('inputChangeHandler', event.target.value);
           this.inputValue = event.target.value;
        },
       
        addHondler() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },

        deleteDesk(idx) {
            this.notes.splice(idx);
        },

        toUpperCase(item) {
            return item.toUpperCase();
        },
         
        removeNote(idx) {
            this.notes.splice(idx, 1);
        },

        reset: function() {
            this.counter = 0;
        },
    },

    computed: {
        doubleCountCompt() {
            return this.notes.length * 2;
        },
    },

    watch: {
        inputValue(value) {
            if (value.length > 25) {
                this.inputValue = this.warning;
            };
        }
    }
}

Vue.createApp(App).mount('#app')