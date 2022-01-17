let app = new Vue ({
    el: '#vueApp',
    data:
    {
        aggiungi: '',
        lista :
        [
            {
                testo: 'nome',
                done: false
            }

        ]

    },
    methods:
    {
        aggiungiLista : function()
        {
            this.lista.push({testo : this.aggiungi , done:false});
        },
        cambiaStato : function(index)
        {
            this.lista[index].done = !this.lista[index].done
        },
        rimuoviLista : function(index)
        {
            this.lista.splice(index , 1)
        }
    }
    
});
