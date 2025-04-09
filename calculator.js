function perimeter(){
    let base = parseFloat(document.getElementById('p_base').value);
    
    let length = parseFloat(document.getElementById('p_length').value);

    let perimeterofparallelogram = 2*(base + length);
    

    document.getElementById('perimeterOfParallelogram').textContent = perimeterofparallelogram;
}

function area(){
    let height = parseFloat(document.getElementById('p_height').value);
    let base = parseFloat(document.getElementById('p_base').value);

    let areaofparallelogram = base * height;

    document.getElementById('Area of Parallelogram').textContent = areaofparallelogram;


}

function volume(){
    let length3d = parseFloat(document.getElementById('pr_length').value);
    let breadth = parseFloat(document.getElementById('pr_breadth').value);
    let height3d = parseFloat(document.getElementById('pr_height').value);

    let v = (1/2*breadth*height3d)*length3d;          //(1/2*breadth*height3d) - base area

    document.getElementById('Volume of Prism').textContent = v;

    
}