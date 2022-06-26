function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances) {
        // 청구 내역 출력
        result += `    ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
    }
    result += `총액: ${usd((data.totalAmount))}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
    return result;

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
                            { style: "currency", currency: "USD",
                            minimumFractionDigits: 2 }).format(aNumber/100);
    }
}

import invoice from "./invoices.json" assert {type: "json"};
import plays from "./plays.json" assert {type: "json"};
import createStatementData from "./createStatementData.js";

//console.log(invoice[0].performances);
console.log(statement(invoice[0], plays));