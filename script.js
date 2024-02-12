let date;
let place;
let food;
let offers;
let fastfood;
let sushi;
let pizza;
let foodCustom;
$(document).ready(function(){
    document.body.innerHTML = `
    <div class="content">
    <div class="container">
        <img class="buttheart" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWo4dno0cXR0dmdpYXJyeTYyNWhuNXlibWRoNW13OXI0eGJmOGhrNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBBjZ35Q6CMtuI8/giphy.gif">
        <h1>Will you be my valentine?</h1>
        <div>
            <input type="button" value="YES!!!!😊" id="first" class="yes">
        </div>
    </div>
    <input type="button" value="no😢" id="first" class="no">
    </div>
    `;
    $(".no").mouseenter(function(){
        $(this).css({
            "left":`${random(900)}px`,
            "top":`${random(450)}px`,
            "background": `rgb(${random(256)},${random(256)},${random(256)})`
        });
    });
    function random(max)
    {
        return Math.floor(Math.random()*max);
    }
    $(document).on("click", ".yes", function() {
        document.body.innerHTML = `
        <div class="content">
        <div class="container">
        <h1>Choose date and time!!!</h1>
        <input type="datetime-local" class="date">
        <img class="frogs" src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVyNmRocTVibjZhMDA4dHA3OGd6eWQwdzlrNG10YTIxcWM1Y2YwYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NUkNjO6J6kwiLuethv/giphy.gif">
        <input type="button" class="next" value="next">
        </div>
        </div>
        `;
    });

    $(document).on("click", ".next", function() {
        date = $(".date").val();
        document.body.innerHTML = `
        <div class="content">
        <div class="container">
        <h1>Write down the place, where you wanna hang out on this day!!</h1>
        <input class="place" type="text" id="text">
        <img class="frogs"src="https://media2.giphy.com/media/37q8VxQp9QdDHlQfAb/giphy.webp?cid=ecf05e47j5t6fol2hhzw1hv7x3po7cs8z8svu8axkskfkmvg&ep=v1_gifs_search&rid=giphy.webp&ct=g">
        <input id="place" class="next1" type="button" value="Next">
        </div>
        </div>
        `;
    });
    $(document).on("click", ".next1", function(){
        place = $(".place").val();
        document.body.innerHTML = `
        <div class="content">
        <div class="container">
            <h1>Choose what you wanna eat!</h1>
           <div class="option"> 
                <img id="foodimg" src="https://img.freepik.com/free-photo/maki-sushi-isolated-white_2829-7304.jpg" alt="">
                <input type="checkbox" class="sushi" id="food" name="sushi">
            </div>
            <div class="option"> 
                <img id="foodimg" src="https://t3.ftcdn.net/jpg/06/11/01/26/360_F_611012694_YztSwcyDjHflPhlil3LfeSDXMtew2Scy.jpg" alt="">
                <input type="checkbox" class="pizza" id="food" name="pizza">
            </div>
            <div class="option"> 
                <img id="foodimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw68CSdUCw09u89goqgYe0kUIju767rN8QEpP8q3PWLBf0FEzK1iAxVG4i0pqvnafrsE&usqp=CAU">
                <input type="checkbox"class="burgers" id="food" name="fastfood">
            </div>
              
           <div class="option">
            <h2>your variant:</h4>       
            <input type="text" class="CustomFood" id="text">
           </div>
                <input type="button" class="next2" value="Next!">
        </div>
        </div>
        `
    });
    $(document).on("click", ".next2", function(){
        foodCustom = $(".CustomFood").val();
        sushi = $(".sushi").val();
        pizza = $(".pizza").val();
        fastfood = $("fastfood").val();
        document.body.innerHTML = `
        <div class="content">
        <div class="container">
            <h1>Maybe you want to offer something? Write it here(if you want, sure thing)!</h1>
            <textarea class="offer"></textarea>
            <img class="frogs" src="https://media2.giphy.com/media/3o7ZeK1dyNazVE4Mdq/200.webp?cid=ecf05e47ngujef0duwvodetogch0xwjm98xxzmj8q9frpgji&ep=v1_gifs_search&rid=200.webp&ct=g">
            <input type="button" class="next3" value="Next!">
        </div>
       </div>`
    });
    $(document).on("click", ".next3", function(){
        offers = $(".offer").val();
        document.body.innerHTML = `
        <div class="content">
        <div class="container">
        <h1>Here is your order!</h1>
        <p>1.Date and time: ${date}</p>
        <p>2.Place:${place}</p>
        <p>3.Food:${sushi ? 'sushi, ' : ''} ${pizza ? 'pizza,' : ''} ${fastfood ? 'fastfood' : ''}, also your suggestions:${foodCustom}</p>
        <p>4.Your offers:${offers}</p>
        <img class="frogs" src="https://media0.giphy.com/media/xT0GqFhyNd0Wmfo6sM/giphy.webp?cid=790b7611682s9m6o3q3ktw5pcvzgkhwyhcz950kskj60p3pj&ep=v1_gifs_search&rid=giphy.webp&ct=g">
        <h2>Thanks for your time! Love you!</h2>
        </div>
        </div>
        `;
    });
});
