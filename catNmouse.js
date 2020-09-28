function catNmouse() {
    let Cat = function (name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;

        this.sound = function () {
            alert(this.name +" meowwww!");
        }

        this.catch = function (mouse) {
            if (this.speed > mouse.speed){
                alert(this.name + " bắt " + mouse.name);
                mouse.status = false;
            }
            else {
                alert(this.name + " không bắt   " + mouse.name)
            }
        }
    }

    let nameCat = this.name ;


    let Mouse = function (name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.sound = function () {
            alert(this.name+ " chittttt!");
        }
    }
    let nameMouse = this.name ;
    function eatMouse() {
            this.weight += mouse.weight;
            alert( nameCat + " ăn chuột "+ nameMouse+" roiiiii!");
        }
    let  cat = new Cat("Mimi", 2, 100);
    cat.sound();
    let mouse = new Mouse("Chit", 0.5, 99);
    mouse.sound();
    cat.catch(mouse);
    eatMouse();
}
catNmouse();