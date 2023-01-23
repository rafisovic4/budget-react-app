
import formatNumber from "./formatNumber";

// Функция форматирования денег
const formatMoney = (value, format = "руб.") => {
    return `${formatNumber(value)} ${format}`;
}

export default formatMoney;