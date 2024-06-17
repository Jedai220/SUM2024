function changeBKC(id) {
    if (typeof id == 'string') {

    }

    if (id == "b1") {
        alert("hi1");
    }
    else if (id == "b2") {
        alert("hi2");
    }
}

function changeOpacity() {
    
}

class statusH {
    constructor() {
        this.hidden = false
    }
}

export {changeBKC};

let status = new statusH

export default status;

//document.addEventListener("click", () => {changeBKC(this)});