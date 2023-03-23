function DateBuilder() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septembet', 'Auctober', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let d = new Date();
    let date = d.getDate();
    let day = days[d.getDay()];
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    
    return (
        <div className="day-section">
            <div className="day-item">{day}</div>
            <div className="day-item">{date}</div>
            <div className="day-item">{month}</div>
            <div className="day-item">{year}</div>
        </div>
    )

}
export default DateBuilder;