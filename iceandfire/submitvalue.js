var form = document.querySelector('form');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    console.log(e);
    console.log(e.target.elements);
    console.log(Array.from(e.target.elements));
    Array.from(e.target.elements).forEach((ele) => {

        

        console.log(    ele.name,     ele.value
            );
        


    })
})