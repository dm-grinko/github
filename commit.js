const moment = require('moment');
const shell = require('shelljs')
const years = [
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
];

const commit = async(YYYY) => {
    // for each month
    for (let MM = 3; MM <= 12; MM++) {
        // get all days
        const days = moment(`${YYYY}-${MM}`, "YYYY-MM").daysInMonth();
        //  for each day
        for (let day = 1; day <= days; day++) {
            const DD = ("0" + day).slice(-2);
            // generate date
            const date = `${YYYY}-${MM}-${DD} 12:12:45`;
            // git commit
            await shell.exec(`./commit.sh "${date}"`);
        }
    }
};

years.forEach(async(YYYY) => commit(YYYY));