import '../styles/index.scss';
import { getInternalAnalytics, getGoogleAnalytics } from './apis';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseData(data) {
  const parsedData = {
    'totalViews': 0,
    'totalUsers': 0,
    'totalProductViews': 0,
    'totalProductUsers': 0,
    'sdkInteractions': 0,
    'conversionValue': 0,
    'widgetConversionValue': 0,
    'conversionPercentage': 0,
    'widgetConversionPercentage': 0,
    'totalTransactions': 0,
    'widgetTransactions': 0,
    'avgTransactionValueWithWidget': 0,
    'avgTransactionValueWithoutWidget': 0
  };

  if (data.length == 0) return parsedData;

  const analyticData = data[1];
  const internalData = data[0];

  const totalProductViews = numberWithCommas(analyticData.products.totalResults);
  const totalProductUsers = numberWithCommas(analyticData.products.totalUsers);
  const sdkInteractions = numberWithCommas(internalData.data.length); // internalData.totalResults

  let totalViews = 0;
  let totalUsers = 0;
  let totalConversionValue = 0;
  let widgetConversionValue = 0;
  let totalSessions = 0;
  let widgetSessions = 0;
  let totalTransactions = 0;
  let widgetTransactions = 0;
  let totalConversionRate = 0;
  let widgetConversionRate = 0;

  let avgTransactionValueWithWidget = 0;
  let avgTransactionValueWithoutWidget = 0;

  if (analyticData.products.data && analyticData.products.data.length) {
    for (let item of analyticData.products.data) {
      totalConversionValue += parseFloat(item["ga:itemRevenue"]);
      if (item["ga:clientID"] in internalData.map) {
        widgetConversionValue += parseFloat(item["ga:itemRevenue"]);
      }
    }
  }

  if (analyticData.users.data.rows && analyticData.users.data.rows.length) {
    for (let row of analyticData.users.data.rows) {
      totalUsers += parseInt(row[1]);
      totalSessions += parseInt(row[2]);
      totalTransactions += parseInt(row[6]);

      if (row[0] in internalData.map) {
        // widgetSessions += parseInt(row[2]);
        widgetTransactions += parseInt(row[6]);
      }
    }
  }

  widgetSessions = sdkInteractions; 
  totalViews = totalSessions;

  totalConversionRate = (totalSessions === 0) ? 0 : (totalTransactions / totalSessions * 100).toFixed(2);
  widgetConversionRate = (widgetSessions === 0) ? 0 : (widgetTransactions / widgetSessions * 100).toFixed(2);

  avgTransactionValueWithWidget = (widgetTransactions === 0) ? 0 : (widgetConversionValue / widgetTransactions).toFixed(2);
  avgTransactionValueWithoutWidget = (totalTransactions - widgetTransactions === 0) ? 0 : ((totalConversionValue - widgetConversionValue) / (totalTransactions - widgetTransactions)).toFixed(2);

  parsedData['totalViews'] = totalViews;
  parsedData['totalUsers'] = totalUsers;
  parsedData['totalProductViews'] = totalProductViews;
  parsedData['totalProductUsers'] = totalProductUsers;
  parsedData['sdkInteractions'] = sdkInteractions;
  parsedData['conversionValue'] = numberWithCommas(totalConversionValue.toFixed(2));
  parsedData['widgetConversionValue'] = numberWithCommas(widgetConversionValue.toFixed(2));
  parsedData['conversionPercentage'] = totalConversionRate;
  parsedData['widgetConversionPercentage'] = widgetConversionRate;
  parsedData['totalTransactions'] = numberWithCommas(totalTransactions);
  parsedData['widgetTransactions'] = numberWithCommas(widgetTransactions);
  parsedData['avgTransactionValueWithWidget'] = numberWithCommas(avgTransactionValueWithWidget);
  parsedData['avgTransactionValueWithoutWidget'] = numberWithCommas(avgTransactionValueWithoutWidget);

  return parsedData;
}

document.addEventListener('DOMContentLoaded', () => {
  Promise.all([getInternalAnalytics(), getGoogleAnalytics()]).then((results) => {
    const loadingElem = document.getElementById("mui-loading");
    const appElem = document.getElementById("mui-app");
    const totalViewsElem = document.getElementById("totalViews");
    const totalUsersElem =  document.getElementById("totalUsers");
    const totalProductViewsElem = document.getElementById("totalProductViews");
    const totalProductUsersElem = document.getElementById("totalProductUsers");
    const sdkInteractionsElem = document.getElementById("sdkInteractions");
    const conversionValueElem = document.getElementById("conversionValue");
    const widgetConversionValueElem = document.getElementById("widgetConversionValue");
    const conversionPercentageElem = document.getElementById("conversionPercentage");
    const widgetConversionPercentageElem = document.getElementById("widgetConversionPercentage");
    const totalTransactionsElem = document.getElementById("totalTransactions");
    const widgetTransactionsElem = document.getElementById("widgetTransactions");
    const avgTransactionValueWithWidgetElem = document.getElementById("avgTransactionValueWithWidget");
    const avgTransactionValueWithoutWidgetElem = document.getElementById("avgTransactionValueWithoutWidget");

    const result = parseData(results);

    if (totalViewsElem) totalViewsElem.innerText = result.totalViews;
    if (totalUsersElem) totalUsersElem.innerText = result.totalUsers;
    if (totalProductViewsElem) totalProductViewsElem.innerText = result.totalProductViews;
    if (totalProductUsersElem) totalProductUsersElem.innerText = result.totalProductUsers;
    if (sdkInteractionsElem) sdkInteractionsElem.innerText = result.sdkInteractions;
    if (conversionValueElem) conversionValueElem.innerHTML = "&pound;" + result.conversionValue;
    if (widgetConversionValueElem) widgetConversionValueElem.innerHTML = "&pound;" + result.widgetConversionValue;
    if (conversionPercentageElem) conversionPercentageElem.innerHTML = result.conversionPercentage + '%';
    if (widgetConversionPercentageElem) widgetConversionPercentageElem.innerHTML = result.widgetConversionPercentage + '%';
    if (totalTransactionsElem) totalTransactionsElem.innerText = result.totalTransactions;
    if (widgetTransactionsElem) widgetTransactionsElem.innerText = result.widgetTransactions;
    if (avgTransactionValueWithWidgetElem) avgTransactionValueWithWidgetElem.innerHTML = "&pound;" + result.avgTransactionValueWithWidget;
    if (avgTransactionValueWithoutWidgetElem) avgTransactionValueWithoutWidgetElem.innerHTML = "&pound;" + result.avgTransactionValueWithoutWidget;

    if (loadingElem) loadingElem.style.display = "none";
    if (appElem) appElem.style.display = "block";
  });
});
