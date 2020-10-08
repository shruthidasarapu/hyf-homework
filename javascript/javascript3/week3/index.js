const canvas = document.getElementById('circle');
      const window_width = window.innerWidth;
      const window_height = window.innerHeight;
      canvas.width = window_width;
      canvas.height = window_height;
      const ctx = canvas.getContext('2d');
      function getRandomColor() {
          const letters = '0123456789ABCDEF'
          let color = '#';
          for(let i = 0; i < 6 ; i++){
              color += letters[Math.floor(Math.random()*16)];
          }
          return color;
      }
      class Circle {
          constructor(x, y, r, startAngle, endAngle, fillColor){
              this.x = x;
              this.y = y;
              this.r = r;
              this.startAngle = startAngle;
              this.endAngle = endAngle;
              this.fillColor = fillColor;
          }
          draw(){
        
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor);
            ctx.fillStyle = getRandomColor();
            ctx.fill();
            ctx.stroke();   
            
        }
        
      }
        let allCircles = [];
        let createCircle = function(circle){
            circle.draw();
        }
        for(let num = 0; num < 10; num++){
            let randomX = Math.random()* window_width;
            let randomY = Math.random()* window_height;
            let randomR = Math.floor((Math.random() * 50) + 10);
           
          const c1 = new Circle(randomX, randomY, randomR, 0, 2 * Math.PI, '#000000');
          allCircles.push(c1);
          createCircle(allCircles[num]);
        }