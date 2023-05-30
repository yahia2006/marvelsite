const nightmode=document.getElementById('night')
nightmode.addEventListener('click',function(){
    document.getElementById('bd').style.backgroundColor='#111';
    document.getElementById('watch').style.color='whitesmoke';
    document.getElementById('h3').style.color='white';
    document.getElementById('night').style.display='none';
    document.getElementById('sun').style.display='block';
    document.getElementById('p').style.color='white'
    document.getElementById('se').style.border='2px solid white'
    document.getElementById('fm').style.backgroundColor='white'
    document.getElementById('g').style.color='black'
    document.getElementById('r').style.color='black'
    document.getElementById('com').style.color='white'
})
const sunmode=document.getElementById('sun')
sunmode.addEventListener('click',function(){
    document.getElementById('bd').style.backgroundColor='white';
    document.getElementById('watch').style.color='black';
    document.getElementById('watch').style.border='2px solid black'
    document.getElementById('h3').style.color='black';
    document.getElementById('night').style.display='block';
    document.getElementById('sun').style.display='none';
    document.getElementById('p').style.color='black'
    document.getElementById('se').style.border='2px solid black'
    document.getElementById('fm').style.backgroundColor='#333'
    document.getElementById('g').style.color='white'
    document.getElementById('r').style.color='white'
    document.getElementById('com').style.color='black'

})

const tailer=document.getElementById('trailer')
tailer.addEventListener('click',function(){
    document.getElementById('vdt').style.display='block';
    document.getElementById('imt').style.display='none';
    let video=document.getElementById('vdt')
    video.play()
    const pa=document.getElementById('vdt')
pa.addEventListener('click',function(){
    video.pause()
})

})





const opennav=document.getElementById('navopen')
opennav.addEventListener('click',function(){
            document.getElementById('navia1').style.display='flex'
            document.getElementById('navia2').style.display='flex'
            document.getElementById('navia3').style.display='flex'
            document.getElementById('navia4').style.display='flex'
            document.getElementById('navopen').style.display='none'
            document.getElementById('navclose').style.display='block'
           

})



const navclose=document.getElementById('navclose')
    navclose.addEventListener('click',function(){
        document.getElementById('navia1').style.display='none'
            document.getElementById('navia2').style.display='none'
            document.getElementById('navia3').style.display='none'
            document.getElementById('navia4').style.display='none'
            document.getElementById('navopen').style.display='block'
            document.getElementById('navclose').style.display='none'
})


const part1=document.getElementById('p1')
part1.addEventListener('click',function(){
    document.getElementById('c2').style.display='none'
    document.getElementById('c3').style.display='none'
    document.getElementById('c1').style.display='flex'
    document.getElementById('c4').style.display='none'
})
const part2=document.getElementById('p2')
part2.addEventListener('click',function(){
    document.getElementById('c1').style.display='none'
    document.getElementById('c3').style.display='none'
    document.getElementById('c2').style.display='flex'
    document.getElementById('c4').style.display='none'
})
const part3=document.getElementById('p3')
part3.addEventListener('click',function(){
    document.getElementById('c1').style.display='none'
    document.getElementById('c3').style.display='flex'
    document.getElementById('c2').style.display='none'
    document.getElementById('c4').style.display='none'

})
const part4=document.getElementById('p4')
part4.addEventListener('click',function(){
    document.getElementById('c1').style.display='none'
    document.getElementById('c3').style.display='none'
    document.getElementById('c2').style.display='none'
    document.getElementById('c4').style.display='flex'

})





