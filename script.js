const ratings = document.querySelectorAll('.bubble2')
for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', function(){
            try{
                document.querySelector('.selected').classList.remove('selected')
            } catch {}
            this.classList.add('selected')
            const value = this.value

            const submit = document.querySelector('.submit')
            submit.addEventListener('click', function(e){
                
                const hiddens = document.querySelectorAll('.hidden')
                hiddens.forEach(hidden => {
                    hidden.classList.remove('hidden')
                    const visibles = document.querySelectorAll('.visible')
                    visibles.forEach(visible => {
                        visible.classList.add('hidden')
                    });
                });

                document.querySelector('.value').innerHTML = value

            })

    })
}








/*
 for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    if(rating.classList.contains('selected') == false){
        console.log('selection')
        return false
    }
}
*/
