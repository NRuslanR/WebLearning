var mix1 = {
    id: 1,
    activate: function () {
        console.log(this.id + " activated");
    }
};
var SimpleMix = /** @class */ (function () {
    function SimpleMix() {
    }
    SimpleMix.prototype.activate = function () {
        console.log("{SimpleMix " + this.id + " activated}");
    };
    return SimpleMix;
}());
var SimpleMixture = /** @class */ (function () {
    function SimpleMixture() {
    }
    SimpleMixture.prototype.activate = function () {
        console.log("SimpleMixutre " + this.id + " pre-activated");
        for (var i = 1; i <= 5; ++i) {
            if (typeof this[i] !== 'undefined' && 'activate' in this[i] /*instanceof IMix*/)
                this[i] /*this[i] as IMix*/.activate();
        }
        console.log("SimpleMixutre " + this.id + " post-activated");
    };
    return SimpleMixture;
}());
var sm1 = new SimpleMixture();
sm1.id = 1;
sm1[mix1.id] = mix1;
sm1[2] = new SimpleMix();
sm1[2].id = 2;
var sm2 = new SimpleMixture();
sm2.id = 3;
sm2[4] = new SimpleMix();
sm2[4].id = 4;
sm2[5] = new SimpleMix();
sm2[5].id = 5;
sm1[sm2.id] = sm2;
sm1.activate();
