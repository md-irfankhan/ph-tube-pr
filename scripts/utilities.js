const getTime = (second) => {

    const year = parseInt(second / 31536000);
    if (year > 0) {

        const year = parseInt(second / 31536000);
        return year + " year";
    }
    else if (parseInt(second / 3600) > 0 && parseInt(second / 3600) <= 24) {
        const hour = parseInt(second / 3600);
        return hour + " hour";
    }
    else if (parseInt(second / 3600) < 24 && parseInt(second / (24 * 60 * 60)) < 7) {
        const days = parseInt(second / (24 * 60 * 60));
        return days + " days";
    }
    else if (parseInt(second / 604800) <= 4 && parseInt(second / (24 * 60 * 60)) > 7) {
        const week = parseInt(second / 604800);
        return week + " week";
    }
    else if (parseInt(second / (30 * 24 * 60 * 60)) <= 12 && parseInt(second / (24 * 60 * 60)) >= 30) {
        const month = parseInt(second / (30 * 24 * 60 * 60));
        return month + " month";
    }
    else if (parseInt(second / 60) < 60 && parseInt(second / (60)) > 0) {
        const minute = parseInt(second / 60);
        return minute + " minute";
    }
    else {
        return second + " second";
    }


}

function active(id) {
    const btns = document.getElementsByClassName('cat-btn');
    for(const bt of btns){
        bt.classList.remove('active')
    }
    document.getElementById(id).classList.add('active');
}
