// 创建一个人
var Human = function (param) {
    this.skill = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密';
}
Human.prototype = {
    getSkill: function () {
        return this.skill;
    },
    getHobby: function () {
        return this.hobby;
    }
}

var Named = function (name) {
    var that = this;
    (function (name, that) {
        that.wholeName = name;
        if(name.indexOf(' ') > -1){
            that.FirstName = name.slice(0, name.indexOf(' '));
            that.SecondName = name.slice(name.indexOf(' '));
        }
    })(name, that);
}

var Work = function (work) {
    var that = this;
    (function (that, work) {
        switch(work){
            case 'code':
                that.work = '工程师';
                that.workDescript = '每天沉醉于编程';
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师';
                that.workDescript = '设计更似一种艺术';
                break;
            case 'teach':
                that.work = '教师';
                tha.workDescript = '教育很快乐';
                break;
            default:
                that.work = work;
                that.workDescript = '还没有相关描述'
        }
    })(that, work)
}

Work.prototype.changeWork = function (work) {
    this.work = work;
}

Work.prototype.changeDescript = function (setance) {
    this.workDescript = setance;
}

// 这样就有三个类，应聘者类，姓名解析类，期望职位类。所以创建以为招聘者就要通过这三个类组合调用

// 创建
var Person = function (name, work) {
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}

var person = new Person('A B', 'code');
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescript('改变职位描述');
console.log(person.work.workDescript);
