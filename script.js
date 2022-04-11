const ratings = document.querySelectorAll('.bubble2')
for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', function(){
            try{
                document.querySelector('.selected').classList.remove('selected')
            } catch {}
            this.classList.add('selected')
            const value = this.value
            console.log(value)
    })
}









