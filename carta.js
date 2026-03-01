function handleClick(){
  clicks++;

  if(clicks === 1){
    envelope.classList.add('open');
    heart.classList.add('hide-heart');
  }
  else if(clicks === 2){
    envelope.classList.add('show-image');
    text.classList.add('hide-text');
    startHearts();
  }
}

function startHearts(){
  for(let i=0;i<25;i++){
    const h=document.createElement('div');
    h.className='falling-heart';
    h.style.left=Math.random()*100+'vw';
    h.style.animationDuration=(3+Math.random()*3)+'s';
    document.body.appendChild(h);

    setTimeout(()=>h.remove(),6000);
  }
}