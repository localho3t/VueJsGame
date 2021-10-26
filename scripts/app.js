new Vue({
    el: "#app",
    data: {
        isGame: false,
        YourHeals: 100,
        monsterHeals: 100,
    },

    methods: {
        calculateDamage: function(min, max) {
            return Math.max((Math.floor(Math.random() * max) + 1), min)
        },
        startGame: function() {
            if (this.YourHeals <= 0) {
                this.YourHeals = 100;
            } else if (this.monsterHeals <= 0) {
                this.monsterHeals = 100;
            }
            this.isGame = true;
        },
        attack: function() {
            var monsterA = this.calculateDamage(1, 8);
            var YourA = this.calculateDamage(1, 8);
            this.YourAttack(monsterA)
            this.monsterAttack(YourA)
                // console.log(dmg)
        },
        specialAttack: function() {
            var monsterA = this.calculateDamage(5, 20);
            var YourA = this.calculateDamage(5, 20);
            if (this.YourHeals < YourA) {
                // alert('شما نمیتوانید حمله ویژه داشته باشید. برای حمله ویژه جان شما باید بیشتر از 40 باشد');
                this.YourHeals = 0;
                this.Win();
                return;
            } else {
                this.YourAttack(YourA)

            }
            if (this.monsterHeals < monsterA) {
                // alert('شما نمیتوانید حمله ویژه داشته باشید. برای حمله ویژه جان شما باید بیشتر از 40 باشد');
                this.monsterHeals = 0;
                this.Win();
                return;
            } else {
                this.monsterAttack(monsterA)
            }

        },
        heal: function() {
            this.YourHeals <= 85 ? this.YourHeals += 15 : this.YourHeals = 100
            this.monsterHeals <= 85 ? this.monsterHeals += 15 : this.monsterHeals = 100
        },
        YourAttack: function(dmg) {
            this.monsterHeals - dmg > 0 ? this.monsterHeals -= dmg : this.monsterHeals = 0;
            this.Win();
        },
        monsterAttack: function(dmg) {
            this.YourHeals - dmg > 0 ? this.YourHeals -= dmg : this.YourHeals = 0;
            this.Win();
        },
        giveUp: function() {
            this.YourHeals = 100;
            this.monsterHeals = 100;
            this.isGame = false;
        },
        Win: function() {
            if (this.monsterHeals <= 0) {
                // console.log('win');
                this.YourHeals = 100;
                this.monsterHeals = 100;
                confirm('شما برنده شدید. مسابقه مجدد؟ ');
                this.isGame = false;
                return;
            } else if (this.YourHeals <= 0) {

                this.YourHeals = 100;
                this.monsterHeals = 100;
                confirm('شما باختید. مسابقه مجدد؟ ');
                this.isGame = false;
                return;
            }
        }

    },

})