const btn=document.querySelector("#throttle");
    const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        console.log(now-prev, delay);
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }
document.querySelector('#center').addEventListener("mousemove", throttleFunction((dets)=>{
    // your less repetition code
    var div=document.createElement('div');      // to create div
    div.classList.add('imagediv');              // to add class to any particular query
    div.style.left=dets.clientX+'px';
    div.style.top=dets.clientY+'px';

    var img=document.createElement('img');
    img.setAttribute('src','https://picsum.photos/200');
    div.appendChild(img);

    document.body.appendChild(div);
    gsap.to(img,{
        y:'0',
        ease:Power1,
        duration:.6
    })
    gsap.to(img,{
        y:'100%',
        ease:Power2,
        delay:.7

    })
    setTimeout(function(){
        div.remove();
    },2000);
}, 400));