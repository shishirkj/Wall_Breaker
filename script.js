const canvas  =document.getElementById('canvas');
const ctx = canvas.getContext('2d');


var scoreElement = document.getElementById("score");




function increment()
{ 
  let val  = parseInt( scoreElement.innerText);
  val++;
  scoreElement.innerText = val;
}

//crating walls

//fillRect();

//1st Row


const row1 = 
{ 
    hh: 20,
    ii:120,
    jj:220,
    kk:320,
    ll:420,
    mm:520,
    nn:620,
};

function row_1()
{ 
ctx.fillStyle = 'blue'
ctx.fillRect(row1.hh,20,90,20);
ctx.fillRect(row1.ii,20,90,20);
ctx.fillRect(row1.jj,20,90,20);
ctx.fillRect(row1.kk,20,90,20);
ctx.fillRect(row1.ll,20,90,20);
ctx.fillRect(row1.mm,20,90,20);
ctx.fillRect(row1.nn,20,90,20);
}


//2nd Row
const row2 =
{ 
    aa: 20,
    bb:120,
    cc:220,
    dd:320,
    ee:420,
    ff:520,
    gg:620,
};

function row_2()
{ 
ctx.fillStyle = 'coral'
ctx.fillRect(row2.aa,50,90,20);
ctx.fillRect(row2.bb,50,90,20);
ctx.fillRect(row2.cc,50,90,20);
ctx.fillRect(row2.dd,50,90,20);
ctx.fillRect(row2.ee,50,90,20);
ctx.fillRect(row2.ff,50,90,20);
ctx.fillRect(row2.gg,50,90,20);
}


//3rd Row
const row3 = 
{ 
    n: 20,
    o:120,
    p:220,
    q:320,
    r:420,
    s:520,
    t:620,
};

function row_3()
{ 
ctx.fillStyle = 'pink'
ctx.fillRect(row3.n,80,90,20);
ctx.fillRect(row3.o,80,90,20);
ctx.fillRect(row3.p,80,90,20);
ctx.fillRect(row3.q,80,90,20);
ctx.fillRect(row3.r,80,90,20);
ctx.fillRect(row3.s,80,90,20);
ctx.fillRect(row3.t,80,90,20);
}



//4th Row
const row4 = 
{ 
    m: 20,
    g:120,
    h:220,
    i:320,
    j:420,
    k:520,
    l:620,
};

function row_4()
{
    
    ctx.fillStyle = 'hotpink'
    ctx.fillRect(row4.m,110,90,20);
    ctx.fillRect(row4.g,110,90,20);
    ctx.fillRect(row4.h,110,90,20);
    ctx.fillRect(row4.i,110,90,20);
    ctx.fillRect(row4.j,110,90,20);
    ctx.fillRect(row4.k,110,90,20);
    ctx.fillRect(row4.l,110,90,20);
}

const row5 = 
{ 
    x: 20,
    a:120,
    b:220,
    c:320,
    d:420,
    e:520,
    f:620,
};

function row_5()
{
    
    // had to give a,b,c.. cauz if just row5.x+100and so on.. then interconnected
    ctx.fillStyle = 'black'
    ctx.fillRect(row5.x,140,90,20);
    ctx.fillRect(row5.a,140,90,20);
    ctx.fillRect(row5.b,140,90,20);
    ctx.fillRect(row5.c,140,90,20);
    ctx.fillRect(row5.d,140,90,20);
    ctx.fillRect(row5.e,140,90,20);
    ctx.fillRect(row5.f,140,90,20);
}

const bar_shape = 
{ 
    x:canvas.width/2,
    y:590,
    w:50,
    h:10,
    speed:5,
    dx:0,
    dy:0,


}


function bar()
{ 
    ctx.fillStyle = 'green';
    ctx.fillRect(bar_shape.x,bar_shape.y,bar_shape.w,bar_shape.h);
}




const circle = 
{ 
    y:581,
    x:canvas.width/2,
    size:7,
    dx:0,
    dy:0,
   
}

function draw_circle()
{ 
 ctx.beginPath();
 ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
 ctx.fillStyle = 'blue';
 ctx.fill();

}



function moving_circle()
{ 
    circle.x += circle.dx;
    circle.y += circle.dy;

}


function moving_bar()
{ 
    bar_shape.x += bar_shape.dx;
    bar_shape.y += bar_shape.dy;

    detect();
    
}


// detectWalls

function detect()
{ 
    //SideWalls

    //(left)
    if(bar_shape.x<0)
    { 
        bar_shape.x  = 0;
    } 

        //(right)
    else if(bar_shape.x+bar_shape.w>canvas.width)
    { 
        bar_shape.x=canvas.width - bar_shape.w;
    }


}




//clear every scene 

function clear()
{ 
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


function removeBrick() {





  //ROW 5
  
  
    if (
      circle.x + circle.size >= row5.x &&
      circle.x - circle.size <= row5.x + 90 &&
      circle.y + circle.size >= 140 &&
      circle.y - circle.size <= 160
    ) {
      circle.dy *= -1;
      circle.dx *= -1;
  
       // Set the brick's x position outside the canvas to hide it

       // tried to use  ctx.clearRect(row5.x, 140, 90, 20); but it goes only for fraction of second
      row5.x = -100;
        increment();
    }


    if (
        circle.x + circle.size >= row5.a &&
        circle.x - circle.size <= row5.a + 90 &&
        circle.y + circle.size >= 140 &&
        circle.y - circle.size <= 160
      ) {
        circle.dy *= -1;
        circle.dx *= -1;
    
        // Set the brick's x position outside the canvas to hide it
        row5.a = -200;
        increment();
      }


      if (
        circle.x + circle.size >= row5.b &&
        circle.x - circle.size <= row5.b + 90 &&
        circle.y + circle.size >= 140 &&
        circle.y - circle.size <= 160
      ) {
        circle.dy *= -1;
        circle.dx *= -1;
        increment();
    
        // Set the brick's x position outside the canvas to hide it
        row5.b = -200;
      }


      if (
        circle.x + circle.size >= row5.c &&
        circle.x - circle.size <= row5.c + 90 &&
        circle.y + circle.size >= 140 &&
        circle.y - circle.size <= 160
      ) {
        circle.dy *= -1;
        circle.dx *= -1;
    
        // Set the brick's x position outside the canvas to hide it
        row5.c = -200;
        increment();
      }

      if (
        circle.x + circle.size >= row5.d &&
        circle.x - circle.size <= row5.d + 90 &&
        circle.y + circle.size >= 140 &&
        circle.y - circle.size <= 160
      ) {
        circle.dy *= -1;
        circle.dx *= -1;
    
        // Set the brick's x position outside the canvas to hide it
        row5.d = -200;
        increment();
      }

      if (
        circle.x + circle.size >= row5.e &&
        circle.x - circle.size <= row5.e + 90 &&
        circle.y + circle.size >= 140 &&
        circle.y - circle.size <= 160
      ) {
        circle.dy *= -1;
        circle.dx *= -1;
    
        // Set the brick's x position outside the canvas to hide it
        row5.e = -200;
        increment();
      }


      if (
        circle.x + circle.size >= row5.f &&
        circle.x - circle.size <= row5.f + 90 &&
        circle.y + circle.size >= 140 &&
        circle.y - circle.size <= 160
      ) {
        circle.dy *= -1;
        circle.dx *= -1;
    
        // Set the brick's x position outside the canvas to hide it
        row5.f = -200;
        increment();
      }




      //ROW 4



      if (
        circle.x + circle.size >= row4.m &&
        circle.x - circle.size <= row4.m + 90 &&
        circle.y + circle.size >= 110 &&
        circle.y - circle.size <= 130
      ) {
        circle.dy *= -1;
        circle.dx *= -1;
    
         // Set the brick's x position outside the canvas to hide it
  
         // tried to use  ctx.clearRect(row5.x, 140, 90, 20); but it goes only for fraction of second
        row4.m = -100;
        increment();
      }
  
  
      if (
          circle.x + circle.size >= row4.g &&
          circle.x - circle.size <= row4.g + 90 &&
          circle.y + circle.size >= 110 &&
          circle.y - circle.size <= 130
        ) {
          circle.dy *= -1;
          circle.dx *= -1;
      
          // Set the brick's x position outside the canvas to hide it
          row4.g = -200;
          increment();
        }
  
  
        if (
          circle.x + circle.size >= row4.h &&
          circle.x - circle.size <= row4.h + 90 &&
          circle.y + circle.size >= 110 &&
          circle.y - circle.size <= 130
        ) {
          circle.dy *= -1;
          circle.dx *= -1;
      
          // Set the brick's x position outside the canvas to hide it
          row4.h = -200;
          increment();
        }
  
  
        if (
          circle.x + circle.size >= row4.i &&
          circle.x - circle.size <= row4.i + 90 &&
          circle.y + circle.size >= 110 &&
          circle.y - circle.size <= 130
        ) {
          circle.dy *= -1;
          circle.dx *= -1;
      
          // Set the brick's x position outside the canvas to hide it
          row4.i = -200;
          increment();
        }
  
        if (
          circle.x + circle.size >= row4.j &&
          circle.x - circle.size <= row4.j + 90 &&
          circle.y + circle.size >= 110 &&
          circle.y - circle.size <= 130
        ) {
          circle.dy *= -1;
          circle.dx *= -1;
      
          // Set the brick's x position outside the canvas to hide it
          row4.j = -200;
          increment();
        }
  
        if (
          circle.x + circle.size >= row4.k &&
          circle.x - circle.size <= row4.k + 90 &&
          circle.y + circle.size >= 110 &&
          circle.y - circle.size <= 130
        ) {
          circle.dy *= -1;
          circle.dx *= -1;
      
          // Set the brick's x position outside the canvas to hide it
          row4.k = -200;
          increment();
        }
  
  
        if (
          circle.x + circle.size >= row4.l &&
          circle.x - circle.size <= row4.l + 90 &&
          circle.y + circle.size >= 110 &&
          circle.y - circle.size <= 130
        ) {
          circle.dy *= -1;
          circle.dx *= -1;
      
          // Set the brick's x position outside the canvas to hide it
          row4.l = -200; increment();
        }




        //ROW 3

        if (
            circle.x + circle.size >= row3.n &&
            circle.x - circle.size <= row3.n + 90 &&
            circle.y + circle.size >= 80 &&
            circle.y - circle.size <= 100
          ) {
            circle.dy *= -1;
            circle.dx *= -1;
        
             // Set the brick's x position outside the canvas to hide it
      
             // tried to use  ctx.clearRect(row5.x, 140, 90, 20); but it goes only for fraction of second
            row3.n= -11100; increment();
          }
      
      
          if (
              circle.x + circle.size >= row3.o &&
              circle.x - circle.size <= row3.o + 90 &&
              circle.y + circle.size >= 80 &&
              circle.y - circle.size <= 100
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row3.o = -2111100; increment();
            }
      
      
            if (
              circle.x + circle.size >= row3.p &&
              circle.x - circle.size <= row3.p + 90 &&
              circle.y + circle.size >= 80 &&
              circle.y - circle.size <= 100
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row3.p = -211100; increment();
            }
      
      
            if (
              circle.x + circle.size >= row3.q &&
              circle.x - circle.size <= row3.q + 90 &&
              circle.y + circle.size >= 80 &&
              circle.y - circle.size <= 100
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row3.q = -21100; increment();
            }
      
            if (
              circle.x + circle.size >= row3.r &&
              circle.x - circle.size <= row3.r + 90 &&
              circle.y + circle.size >= 80 &&
              circle.y - circle.size <= 100
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row3.r = -11200; increment();
            }
      
            if (
              circle.x + circle.size >= row3.s &&
              circle.x - circle.size <= row3.s + 90 &&
              circle.y + circle.size >= 80 &&
              circle.y - circle.size <= 100
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row3.s= -500; increment();
            }
      
      
            if (
              circle.x + circle.size >= row3.t &&
              circle.x - circle.size <= row3.t + 90 &&
              circle.y + circle.size >= 80 &&
              circle.y - circle.size <= 100
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row3.t = -1100; increment();
            
            }




            //ROW 2



            
        if (
            circle.x + circle.size >= row2.aa &&
            circle.x - circle.size <= row2.aa + 90 &&
            circle.y + circle.size >= 50 &&
            circle.y - circle.size <= 70
          ) {
            circle.dy *= -1;
            circle.dx *= -1;
        
             // Set the brick's x position outside the canvas to hide it
      
             // tried to use  ctx.clearRect(row5.x, 140, 90, 20); but it goes only for fraction of second
            row2.aa= -11100; increment();
          }
      
      
          if (
              circle.x + circle.size >= row2.bb &&
              circle.x - circle.size <= row2.bb + 90 &&
              circle.y + circle.size >= 50 &&
              circle.y - circle.size <= 70
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row2.bb = -2111100; increment();
            }
      
      
            if (
              circle.x + circle.size >= row2.cc &&
              circle.x - circle.size <= row2.cc + 90 &&
              circle.y + circle.size >= 50 &&
              circle.y - circle.size <= 70
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row2.cc = -211100; increment();
            }
      
      
            if (
              circle.x + circle.size >= row2.dd &&
              circle.x - circle.size <= row2.dd + 90 &&
              circle.y + circle.size >= 50 &&
              circle.y - circle.size <= 70
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row2.dd = -21100; increment();
            }
      
            if (
              circle.x + circle.size >= row2.ee &&
              circle.x - circle.size <= row2.ee + 90 &&
              circle.y + circle.size >= 50 &&
              circle.y - circle.size <= 70
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row2.ee = -11200; increment();
            }
      
            if (
              circle.x + circle.size >= row2.ff &&
              circle.x - circle.size <= row2.ff + 90 &&
              circle.y + circle.size >= 50 &&
              circle.y - circle.size <= 70
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row2.ff= -500; increment();
            }
      
      
            if (
              circle.x + circle.size >= row2.gg &&
              circle.x - circle.size <= row2.gg + 90 &&
              circle.y + circle.size >= 80 &&
              circle.y - circle.size <= 70
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row2.gg = -1100; increment();
            
            }



            //ROW 1


        if (
            circle.x + circle.size >= row1.hh &&
            circle.x - circle.size <= row1.hh + 90 &&
            circle.y + circle.size >= 20 &&
            circle.y - circle.size <= 40
          ) {
            circle.dy *= -1;
            circle.dx *= -1;
        
             // Set the brick's x position outside the canvas to hide it
      bar
             // tried to use  ctx.clearRect(row5.x, 140, 90, 20); but it goes only for fraction of second
            row1.hh= -11100; increment();
          }
      
      
          if (
              circle.x + circle.size >= row1.ii &&
              circle.x - circle.size <= row1.ii + 90 &&
              circle.y + circle.size >= 20 &&
              circle.y - circle.size <= 40
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row1.ii = -2111100; increment();
            }
      
      
            if (
              circle.x + circle.size >= row1.jj &&
              circle.x - circle.size <= row1.jj + 90 &&
              circle.y + circle.size >= 20 &&
              circle.y - circle.size <=40
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row1.jj = -211100; increment();
            }
      
      
            if (
              circle.x + circle.size >= row1.kk &&
              circle.x - circle.size <= row1.kk + 90 &&
              circle.y + circle.size >= 20 &&
              circle.y - circle.size <= 40
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row1.kk = -21100; increment();
            }
      
            if (
              circle.x + circle.size >= row1.ll &&
              circle.x - circle.size <= row1.ll + 90 &&
              circle.y + circle.size >= 20 &&
              circle.y - circle.size <= 40
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row1.ll = -11200; increment();
            }
      
            if (
              circle.x + circle.size >= row1.mm &&
              circle.x - circle.size <= row1.mm + 90 &&
              circle.y + circle.size >= 20 &&
              circle.y - circle.size <= 40
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row1.mm= -500; increment();
            }
      
      
            if (
              circle.x + circle.size >= row1.nn &&
              circle.x - circle.size <= row1.nn + 90 &&
              circle.y + circle.size >= 20 &&
              circle.y - circle.size <= 40
            ) {
              circle.dy *= -1;
              circle.dx *= -1;
          
              // Set the brick's x position outside the canvas to hide it
              row1.nn = -1100; increment();
            
            }


  }








function ballMoving()
{ 
      //detect side walls and upper walls
      if(circle.x+circle.size>canvas.width)
      { 
          //circle.dx *=-1;
          circle.dx = circle.dx * -1;
      
      }


   if(circle.x-circle.size<0)
      { 
          //circle.dx *=-1;
          circle.dx = circle.dx * -1;
      
     }

      if(circle.y+circle.size>canvas.height)
      { 
        
         circle.dy = circle.dy * -1;

     }
     if(circle.y-circle.size<0)
     { 
      
         circle.dy = circle.dy * -1;

     }
    
// Bar detection
if (
  circle.x + circle.size >= bar_shape.x &&
  circle.x - circle.size <= bar_shape.x + bar_shape.w &&
  circle.y + circle.size >= bar_shape.y &&
  circle.y <= bar_shape.y + bar_shape.h
) {
  // Check if the circle is touching the center of the bar.
  if (circle.x === bar_shape.x + bar_shape.w / 2) {
    // Bounce straight up.
    circle.dy = -circle.dy;
  } else if (circle.x < bar_shape.x + bar_shape.w / 2) {
    // Bounce left.
    circle.dx = -circle.dx;
  } else {
    // Bounce right.
    circle.dx = -circle.dx;
  }
}

}




//bricks detection





function update()
{ 
   
 clear();
 removeBrick(); 
row_1();

row_2();

row_3();

row_4();

row_5();

bar();
moving_bar();

moving_circle();

draw_circle();

ballMoving();


   

requestAnimationFrame(update);

}




update();


function moveRight()
{ 
    bar_shape.dx = bar_shape.speed;
}


function moveLeft()
{ 
    bar_shape.dx = -bar_shape.speed;
}



function moveDown()
{ 
    bar_shape.dy = bar_shape.speed;
}



function keyDown(e)
{ 
    if(e.key=== 'ArrowRight')
    { 
        moveRight();
    }

    if(e.key=== 'ArrowLeft')
    { 
        moveLeft();
    }

    
    if(e.key=== 'ArrowDown')
    { 
        moveDown();
    }
}



function keyUp(e)
{ 
    if(e.key==='ArrowRight'|| e.key==='ArrowLeft')

    { bar_shape.dx =0;}

    if(e.key==='ArrowUp'|| e.key==='ArrowDown')

    { bar_shape.dy =0;}

}


document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    circle.dx = 5;
    circle.dy = 7;
  }
});

document.addEventListener('keyup',keyUp);
document.addEventListener('keydown',keyDown);





