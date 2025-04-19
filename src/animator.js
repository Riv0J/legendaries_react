function animator(element, params){
    if(hasClass(element,"animating")){
        console.log("returned");
        
        return;
    }
    addClass(element, "animating");

    const period = 50;
    let timing = 0;
    let interval = setInterval(function() {
        
        const percent = timing * 100 / params.time;
        const keyframe = params.keyframes[percent];
        
        if(keyframe){
            executeKeyframe(element, keyframe);
        }

        timing += period;
        if(timing == params.time) {
            executeKeyframe(element, params.keyframes[100]);
            removeClass(element, "animating");
            clearInterval(interval);
            console.log("removed");

        }
    }, period);
}

function executeKeyframe(element, keyframe){
    console.log(element);
    
    console.log(keyframe);
    Object.keys(keyframe).forEach(value => {
        if(value == "func"){
            keyframe[value]();
        } else {
            element.style[value] = keyframe[value];
        }
    });
}

function hasClass(element, clas){
    return element.classList.contains(clas);
}

function addClass(element, clas){
    return element.classList.add(clas);
}

function removeClass(element, clas){
    return element.classList.remove(clas);
}

export default animator;