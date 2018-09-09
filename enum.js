"use strict";
var Day;
(function (Day) {
    Day[Day["Mon"] = 0] = "Mon";
    Day[Day["Tue"] = 1] = "Tue";
    Day[Day["Wed"] = 2] = "Wed";
    Day[Day["Thu"] = 3] = "Thu";
    Day[Day["Fri"] = 4] = "Fri";
    Day[Day["Sat"] = 5] = "Sat";
    Day[Day["Sun"] = 6] = "Sun";
})(Day || (Day = {}));
;
function getDayName(day) {
    switch (day) {
        case Day.Mon:
            return 'Понедельник';
        case Day.Tue:
            return 'Вторник';
        case Day.Wed:
            return 'Среда';
        case Day.Thu:
            return 'Четверг';
        case Day.Fri:
            return 'Пятница';
        case Day.Sat:
            return 'Суббота';
        case Day.Sun:
            return 'Воскресенье';
        default:
            return '';
    }
}
