import axios from 'axios';

export function getGoogleAnalytics() {
  return axios.get('https://hl3jozomodfowtgqofbkvsz4cy0xjzfs.lambda-url.us-east-1.on.aws/', {
    params: {
      'viewid': '266951763',
      'startdate': '2022-08-15',
      'enddate': '2022-09-15'
    }
  })
  .then((resp) => {
    const gAnalytics = {
      "products": {
        "totalResults": 0,
        "totalUsers": 0,
        "data": [],
        "map": {}
      },
      "users": {
        "data": [],
      }
    };

    if (resp.status === 200) {
      const productData = resp.data.productResult.data;
      const userData = resp.data.userResult.data;

      const columns = productData.columnHeaders;
      const arrOutput = [];
      const mapOutput = {};

      let totalUsers = 0;

      if (productData.rows && productData.rows.length) {
        for (let row of productData.rows) {
          let newItem = {};
          for (let colIdx = 0; colIdx < columns.length; colIdx++) { // 7
            const col = columns[colIdx];
            newItem[col.name] = row[colIdx];
          }
          arrOutput.push(newItem);
          if (newItem['ga:clientID'] in mapOutput) {
            mapOutput[newItem['ga:clientID']].push(newItem);
          }
          else {
            totalUsers++;
            mapOutput[newItem['ga:clientID']] = [newItem];
          }
        }

        gAnalytics["products"] = {
          "totalResults": productData.totalResults,
          "totalUsers": totalUsers,
          "data": arrOutput,
          "map": mapOutput
        };
        gAnalytics["users"] = {
          "data": userData,
        };
      }
      return gAnalytics;
    }
    return gAnalytics;
  })
  .catch((err) => {
    console.log('error:', err.toString());
    return {
      "products": {
        "totalResults": 0,
        "totalUsers": 0,
        "data": [],
        "map": {}
      },
      "users": {
        "data": [],
      }
    };
  });
}

export function getInternalAnalytics() {
  return axios.get('public/mockdata.json')
    .then((resp) => {
      const iAnalytics = resp.data;
      const mapOutput = {};

      if (resp.status === 200 && iAnalytics.data && iAnalytics.data.length) {
        for (let row of iAnalytics.data) {
          if (row['clientID'] in mapOutput) {
            mapOutput[row['clientID']].push(row);
          }
          else {
            mapOutput[row['clientID']] = [row];
          }
        }
        iAnalytics['map'] = mapOutput;
      }
      else {
        iAnalytics['map'] = [];
      }

      return iAnalytics;
    })
    .catch((err) => {
      console.log('error:', err.toString());
      return {
        'data': [],
        'map': {}
      };
    });
}