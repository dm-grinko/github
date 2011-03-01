const moment = require('moment');
const shell = require('shelljs')

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

commit(2011);