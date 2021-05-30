const app = new Vue (
    {
        el: '#root',
        data: {
            emails: [],
            emailsNumber: 10,
            error: false
        },
        created: function() {
            // Cicla 10 volte per generare 10 indirizzi email da inserire nell'array "emails"
            for(i = 0; i < this.emailsNumber; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.emails.push(response.data.response);
                    })
                    .catch((error) => {
                        this.error = true;
                    }) 
            }
        }
    }
)