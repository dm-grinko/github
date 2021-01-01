const moment = require('moment');
const shell = require('shelljs')
const years = [
    2021
    // 2020,
    // 2019,
    // 2018,
    // 2017,
    // 2016,
    // 2015,
    // 2014,
    // 2013,
    // 2012,
];

const commit = async(years) => {
    const promises = [];
    // for each year
    for (let y = 0; y < years.length; y++) {
        const YYYY = years[y];
        // for each month
        for (let MM = 1; MM <= 8; MM++) {
            // get all days
            const days = moment(`${YYYY}-${MM}`, "YYYY-MM").daysInMonth();
            //  for each day
            for (let day = 1; day <= days; day++) {
                const DD = ("0" + day).slice(-2);
                // git commit
                promises.push(shell.exec(`./commit.sh "${YYYY}-${MM}-${DD} 12:12:45"`));
            }
        }
    }
    await Promise.all(promises);
};

commit(years);