*{
margin:0;
padding:0;
box-sizing:border-box;
}


body{
font-family:Arial,sans-serif;
color:#263238;
line-height:1.7;
}


h1,h2,h3{
color:#173A63;
}


section{
padding:80px 10%;
}


header{
position:fixed;
width:100%;
background:white;
z-index:1000;
box-shadow:0 2px 15px #ddd;
}


nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 10%;
}


.logo img{
height:60px;
}


nav ul{
display:flex;
gap:25px;
list-style:none;
}


nav a{
text-decoration:none;
color:#173A63;
}


.menu-button{
display:none;
}



.hero{

height:100vh;

display:flex;
align-items:center;

background:
linear-gradient(
rgba(23,58,99,.5),
rgba(23,58,99,.5)
),
url("bilder/hero.jpg");

background-size:cover;
background-position:center;

}



.hero-text{
color:white;
max-width:600px;
}


.hero h1{
color:white;
font-size:3rem;
}


.button{

display:inline-block;
background:#8AA58A;
color:white;

padding:15px 35px;

border-radius:30px;

text-decoration:none;

}



.two-columns{

display:grid;

grid-template-columns:1fr 1fr;

gap:40px;

}



.gruenderin img{

width:100%;
max-width:350px;

border-radius:20px;

}



.cards{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

}



.card,.wert{

background:#f6f7f4;

padding:30px;

border-radius:20px;

}



.werte{

display:grid;

grid-template-columns:1fr 1fr;

gap:20px;

}



form{

display:flex;

flex-direction:column;

gap:15px;

max-width:600px;

}



input,textarea{

padding:15px;

border-radius:10px;

border:1px solid #ccc;

}



textarea{

height:150px;

}



button{

padding:15px;

background:#173A63;

color:white;

border:none;

border-radius:30px;

}



.telefon-button{

position:fixed;

bottom:20px;

right:20px;

background:#8AA58A;

color:white;

font-size:25px;

width:60px;

height:60px;

border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

text-decoration:none;

}



footer{

background:#173A63;

color:white;

text-align:center;

padding:30px;

}




@media(max-width:900px){


nav ul{

display:none;

flex-direction:column;

background:white;

position:absolute;

right:10%;

top:80px;

padding:20px;

}


nav ul.aktiv{

display:flex;

}


.menu-button{

display:block;

}


.cards,
.two-columns{

grid-template-columns:1fr;

}


.werte{

grid-template-columns:1fr;

}


.hero h1{

font-size:2rem;

}


}